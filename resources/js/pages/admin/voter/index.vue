<template>
    <div class="pa-2">
        <v-card elevation="2" class="pa-2">
            <table-header
            :data="data"
            @addNew="addNew"
            @refresh="fetchPage"
            @importExcel="importExcel"
            @search="fetchPage"
            :hide="['gridView', 'filter', 'download']">
                <template v-slot:custom_filter>
                    <admin-filter :filter="data.filter"></admin-filter>
                </template>
            </table-header>
            <v-data-table
            :headers="headers"
            :items="data_items"
            :search="data.keyword"
            show-select
            :loading="data.isFetching"
            :server-items-length="total"
            :footer-props="footerPages"
            :options.sync="options"
            :items-per-page="options.itemsPerPage"
            @update:options="fetchPage"
            @click:row="viewItem"
            class="cursor-pointer table-fix-height clickable-item"
            fixed-header>
                <template v-slot:[`item.created_at`]="{ item }">
                    {{ moment(item.created_at).format('YYYY-MM-DD') }}
                </template>
                <template v-slot:[`item.status`]="{ item }">
                    <v-icon :color="item.status==1?'success':'error'">mdi-{{item.status==1?'check':'close'}}</v-icon>
                </template>
                <template v-slot:[`item.action`]="{ item }">
                    <v-btn
                        class="px-2"
                        elevation="0"
                        icon
                        color="primary"
                        @click.stop="editItem(item)"
                    >
                        <v-icon>mdi-square-edit-outline</v-icon>
                    </v-btn>
                    <v-btn
                        class="px-2"
                        elevation="0"
                        icon
                        color="error"
                        @click="warning(item)"
                    >
                        <v-icon>mdi-trash-can</v-icon>
                    </v-btn>
                </template>
                <template v-slot:no-data>
                    <div>No Data</div>
                </template>
            </v-data-table>
        </v-card>
        <data-form
        :show="form"
        :data="selectedItem"
        @close="close"
        @save="save"
        @update="update">
        </data-form>
        <excel-form :show="excelForm" @close="close" @save="save"></excel-form>
        <Alert :data="alert_data"></Alert>
        <Warning :data="warning_data" @close="close" @confirm="confirm"></Warning>
    </div>
</template>

<script>
import DeleteDialog from "@/components/deleteDialog.vue";
import DataForm from "./form.vue";
import ExcelForm from "./excel-form.vue";
import TableHeader from "@/components/table-header.vue";
export default {
    components: {
        DeleteDialog,
        DataForm,
        ExcelForm,
        TableHeader,
    },
    data: () => ({
        form: false,
        excelForm: false,
        data: {
            title: "Voters",
            isFetching: false,
            keyword: "",
            filter: {},
        },
        footerPages: {
            "items-per-page-options": [5, 10, 15, 20, 30, 40, 50, 100, -1],
        },
        options: {
            itemsPerPage: 15,
        },
        total: 0,
        deleteForm: false,
        showForm: false,
        dialogDelete: false,
        items: [],
        selectedItem: {},
        selected: [],
        headers: [
            { text: "Student Id", align: "start", sortable: true, value: "student_id", },
            { text: "Name", align: "start", sortable: true, value: "name", },
            // { text: "Voted", align: "start", sortable: false, value: "voted", },
            { text: "Date Added", align: "start", sortable: true, value: "created_at", },
            { text: "Active", align: "start", sortable: false, value: "status", },
            { text: "Actions", align: "center", sortable: false, value: "action", },
        ],
    }),
    methods: {
        fetchPage() {
            this.data.isFetching = true;
            let params = this._createParams(this.options);
            params = params + this._createFilterParams(this.data.filter);
            if (this.data.keyword) params = params + "&keyword=" + this.data.keyword;
            axios.get(`/admin-api/student?${params}`).then(({ data }) => {
                this.data_items = data.data;
                this.total = data.total;
                this.data.isFetching = false;
            });
        },
        editItem(val){
            // console.log(this.alert.trigger,'trigger')
            this._commit('is_editing', true)
            this.selectedItem = val
            this.form = true
        },
        save(payload) {
            this.form = false
            console.log(payload)
            axios.post(`/admin-api/student`, payload).then(({ data }) => {
                this.fetchPage()
                this._newAlert(true, data.type, data.message)
            }).finally(()=>{
                this.showForm = false;
                this.payload = null;
            })
        },
        update(payload) {
            axios.put(`/admin-api/student/${this.selectedItem.id}`, payload).then(({ data }) => {
                this.fetchPage()
                this._newAlert(true, data.type, data.message)
                this.payload = null;
            })
            this.form = false
        },
        activate() {

        },
        importExcel() {
            this.excelForm = true
        },
        close() {
            this.form = false
            this.excelForm = false
            this.fetchPage()
        },
        warning(val){
            this.selectedItem = val
            let text = 'Are you sure you want to delete'
            this._warning(true, text, val.name)
            this.deleteForm = true
        },
        confirm() {
            this.warning_data.trigger = false
            axios.delete(`/admin-api/student/${this.selectedItem.id}`).then(({data})=>{
                this.fetchPage()
                this._newAlert(true, data.type, data.message)
            });
        }
    },
};
</script>