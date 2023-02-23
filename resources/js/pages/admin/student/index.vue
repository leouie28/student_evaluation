<template>
    <div class="pa-2">
        <v-card elevation="0" class="pa-2">
            <table-header
                :data="data"
                @addNew="addNew"
                @refresh="fetchPage"
                @importExcel="importExcel"
                @search="fetchPage"
                :hide="['download']"
            >
                <template v-slot:custom_filter>
                    <admin-filter :filter="data.filter"></admin-filter>
                </template>
            </table-header>
            <v-data-table
                :headers="headers"
                :items="data_items"
                :search="data.keyword"
                :loading="data.isFetching"
                :server-items-length="total"
                :footer-props="footerPages"
                :options.sync="options"
                :items-per-page="options.itemsPerPage"
                @update:options="fetchPage"
                @click:row="viewItem"
                class="cursor-pointer table-fix-height clickable-item"
                fixed-header
            >
                <template v-slot:[`item.student_id`]="{ item }">
                    <span class="primary--text font-weight-bold">{{
                        item.student_id
                    }}</span>
                </template>
                <template v-slot:[`item.image`]="{ item }">
                    <v-avatar tile>
                        <img alt="image" src="/images/system/noimage.png" />
                    </v-avatar>
                </template>
                <template v-slot:[`item.level_name`]="{ item }">
                    <span class="primary--text">{{ item.level_name }}</span>
                </template>
                <template v-slot:[`item.section_name`]="{ item }">
                    <span class="primary--text">{{ item.section_name }}</span>
                </template>
                <template v-slot:[`item.created_at`]="{ item }">
                    {{ moment(item.created_at).format("DD/MM/YYYY") }}
                </template>
                <template v-slot:[`item.action`]="{ item }">
                    <v-btn color="primary" icon small>
                        <v-icon small>mdi-eye-outline</v-icon>
                    </v-btn>
                    <v-btn
                        color="primary"
                        icon
                        small
                        @click.stop="editItem(item)"
                    >
                        <v-icon small>mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn color="error" icon small @click="warning(item)">
                        <v-icon small>mdi-delete</v-icon>
                    </v-btn>
                </template>
                <template v-slot:no-data>
                    <div>No Data</div>
                </template>
            </v-data-table>
        </v-card>
        <template v-if="form">
            <data-form
                :show="true"
                :data="selectedItem"
                @close="close"
                @save="save"
                @update="update"
            >
            </data-form>
        </template>
        <Alert :data="alert_data"></Alert>
        <Warning
            :data="warning_data"
            @close="close"
            @confirm="confirm"
        ></Warning>
    </div>
</template>

<script>
import DeleteDialog from "@/components/deleteDialog.vue";
import DataForm from "./form.vue";
import TableHeader from "@/components/table-header.vue";
import axios from "axios";
export default {
    components: {
        DeleteDialog,
        DataForm,
        TableHeader,
    },
    data: () => ({
        routeApi: "/web-admin/student",
        form: false,
        excelForm: false,
        data: {
            title: "Student",
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
            {
                text: "Student Id",
                align: "start",
                sortable: true,
                value: "student_id",
            },
            {
                text: "Image",
                align: "start",
                sortable: true,
                value: "image",
            },
            {
                text: "First Name",
                align: "start",
                sortable: true,
                value: "first_name",
            },
            {
                text: "Last Name",
                align: "start",
                sortable: false,
                value: "last_name",
            },
            {
                text: "Address",
                align: "start",
                sortable: true,
                value: "address",
            },
            {
                text: "Gender",
                align: "start",
                sortable: true,
                value: "gender",
            },
            {
                text: "Grade Level",
                align: "start",
                sortable: true,
                value: "level_name",
            },
            {
                text: "Section",
                align: "start",
                sortable: true,
                value: "section_name",
            },
            {
                text: "Actions",
                align: "center",
                sortable: false,
                value: "action",
            },
        ],
    }),
    methods: {
        fetchPage() {
            this.data.isFetching = true;
            let params = this._createParams(this.options);
            params = params + this._createFilterParams(this.data.filter);
            if (this.data.keyword)
                params = params + "&keyword=" + this.data.keyword;
            axios.get(`${this.routeApi}?${params}`).then(({ data }) => {
                this.data_items = data.data;
                this.total = data.total;
                this.data.isFetching = false;
            });
        },
        editItem(val) {
            // console.log(this.alert_data.trigger, val,'trigger')
            this._commit("is_editing", true);
            this.selectedItem = val;
            this.form = true;
        },
        save(payload) {
            this.form = false;
            axios
                .post(`${this.routeApi}`, payload)
                .then(({ data }) => {
                    this.fetchPage();
                    this._newAlert(true, data.type, data.message);
                })
                .finally(() => {
                    this.showForm = false;
                    this.payload = null;
                });
        },
        update(payload) {
            axios
                .put(`${this.routeApi}/${payload.id}`, payload)
                .then(({ data }) => {
                    this.form = false;
                    this.fetchPage();
                    this._newAlert(true, data.type, data.message);
                    this.selectedItem = null;
                });
        },
        importExcel() {
            this.excelForm = true;
        },
        close() {
            this.selectedItem = {};
            this.form = false;
            this.warning_data.trigger = false;
        },
        warning(val) {
            this.selectedItem = val;
            let text = "Are you sure you want to delete";
            this._warning(true, text, val.name);
            this.deleteForm = true;
        },
        confirm() {
            this.warning_data.trigger = false;
            axios
                .delete(`/admin-api/announcement/${this.selectedItem.id}`)
                .then(({ data }) => {
                    this.fetchPage();
                    this._newAlert(true, data.type, data.message);
                });
        },
    },
};
</script>
