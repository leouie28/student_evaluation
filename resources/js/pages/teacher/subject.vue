<template>
  <div>
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
        <!-- <template v-slot:[`item.id`]="{ item }">
            <span class="primary--text font-weight-bold">{{item.id}}</span>
        </template> -->
        <template v-slot:[`item.created_at`]="{ item }">
            {{ moment(item.created_at).format("DD/MM/YYYY") }}
        </template>
        <template v-slot:[`item.action`]="{ item }">
            <v-btn color="primary" icon small>
                <v-icon small>mdi-eye-outline</v-icon>
            </v-btn>
            <v-btn color="primary" icon small @click.stop="editItem(item)">
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
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {
  },
  data: () => ({
      routeApi: "/web-admin/level",
      form: false,
      excelForm: false,
      data: {
          title: "Grade Level",
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
              text: "Subject",
              align: "start",
              sortable: true,
              value: "name",
          },
          {
              text: "Grade Level",
              align: "start",
              sortable: true,
              value: "info",
          },
          {
              text: "Department",
              align: "start",
              sortable: false,
              value: "department_name",
          },
          {
              text: "No. of Student",
              align: "start",
              sortable: false,
              value: "department_name",
          },
          {
              text: "Created at",
              align: "start",
              sortable: true,
              value: "created_at",
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
              .catch((error) => {
                  this._newAlert(true, 'error', error.response?.data.message);
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
