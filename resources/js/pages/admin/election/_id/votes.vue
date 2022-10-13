<template>
    <div class="pa-2">
        <v-card elevation="2" class="pa-2">
            <table-header
            :data="data"
            @addNew="addNew"
            @refresh="fetchPage"
            @search="fetchPage"
            :hide="['filter', 'download', 'excel', 'addNew']">
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
            fixed-header>
                <template v-slot:[`item.created_at`]="{ item }">
                    {{ moment(item.created_at).format('YYYY-MM-DD') }}
                </template>
                <template v-slot:[`item.action`]="{ item }">
                    <v-btn
                        class="px-2"
                        elevation="0"
                        small
                        color="primary"
                        @click="editItem(item)"
                    >
                        <v-icon class="mr-1" small>mdi-eye</v-icon>
                        view vote
                    </v-btn>
                </template>
                <template v-slot:no-data>
                    <div>No Data</div>
                </template>
            </v-data-table>
        </v-card>
    </div>
</template>

<script>
import DeleteDialog from "@/components/deleteDialog.vue";
import TableHeader from "@/components/table-header.vue";
export default {
    components: {
        DeleteDialog,
        TableHeader,
    },
    data: () => ({
        data: {
            title: "Votes",
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
        items: [],
        selectedItem: {},
        selected: [],
        headers: [
            { text: "ID", align: "start", sortable: true, value: "id", },
            { text: "Voter Id", align: "start", sortable: true, value: "voter_id", },
            { text: "Voter Name", align: "start", sortable: true, value: "voter_name", },
            { text: "Vote Data", align: "start", sortable: true, value: "data", },
            { text: "Date Submitted", align: "start", sortable: true, value: "created_at", },
            { text: "Actions", align: "center", sortable: false, value: "action", },
        ],
    }),
    methods: {
        fetchPage() {
            this.data.isFetching = true;
            let params = this._createParams(this.options);
            params = params + this._createFilterParams(this.data.filter);
            if (this.data.keyword) params = params + "&keyword=" + this.data.keyword;
            let id = this.$route.params.id
            axios.get(`/admin-api/election/get-votes/${id}?${params}`).then(({ data }) => {
                this.data.title = data.details.name + ' Votes'
                this.data_items = data.votes.data;
                this.total = data.votes.total;
                this.data.isFetching = false;
            });
        },
        close() {
            this.form = false
            this.excelForm = false
        },
    },
};
</script>