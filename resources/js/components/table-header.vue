<template>
    <div>
        <v-toolbar
        flat>
            <v-toolbar-title>{{data.title}}</v-toolbar-title>
            <v-divider
            class="mx-4"
            inset
            vertical
            ></v-divider>
            <v-icon
                @click.stop="$emit('refresh')"
                v-if="!hide.includes('refresh')"
            >
                mdi-reload
                {{ data.isFetching ? "mdi-spin" : "" }}
            </v-icon>
            <v-spacer></v-spacer>
            <div class="d-inline mr-4">
                <v-text-field
                dense
                placeholder="Search record ..."
                append-icon="mdi-magnify"
                hide-details="">
                </v-text-field>
            </div>
            <!-- <v-tooltip v-if="!hide.includes('gridView')" bottom color="primary">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        color="primary"
                        dark
                        @click.stop="$emit('gridView')"
                        class="mr-2"
                        v-bind="attrs"
                        v-on="on"
                    >
                        <v-icon>mdi-view-grid</v-icon>
                    </v-btn>
                </template>
                <span>Grid View</span>
            </v-tooltip> -->
            <v-tooltip v-if="!hide.includes('filter')" bottom color="secondary">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        color="warning"
                        dark
                        small
                        @click.stop="$emit('importExcel')"
                        class="mr-1"
                        v-bind="attrs"
                        v-on="on"
                    > 
                        <span class="text-capitalize">Filter</span>
                        <v-icon small>mdi-filter-menu</v-icon>
                    </v-btn>
                </template>
                <span>Filter records</span>
            </v-tooltip>
            <v-tooltip v-if="!hide.includes('excel')" bottom color="secondary">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        color="success"
                        dark
                        small
                        @click.stop="$emit('importExcel')"
                        class="mr-1"
                        v-bind="attrs"
                        v-on="on"
                    > 
                        <span class="text-capitalize">Import Excel</span>
                        <v-icon small>mdi-table-arrow-left</v-icon>
                    </v-btn>
                </template>
                <span>Import from excel file</span>
            </v-tooltip>
            <v-tooltip v-if="!hide.includes('download')" bottom color="secondary">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        color="primary"
                        dark
                        small
                        class="mr-1"
                        v-bind="attrs"
                        v-on="on"
                    >
                        <span class="text-capitalize">Download</span>
                        <v-icon small>mdi-download</v-icon>
                    </v-btn>
                </template>
                <span>Download {{data.title}} record</span>
            </v-tooltip>
            <v-tooltip v-if="!hide.includes('addNew')" bottom color="secondary">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        color="secondary"
                        dark
                        small
                        @click.stop="$emit('addNew')"
                        class="mr-1"
                        v-bind="attrs"
                        v-on="on"
                    >
                        <span class="text-capitalize">New</span>
                        <v-icon small>mdi-plus</v-icon>
                    </v-btn>
                </template>
                <span>Add New</span>
            </v-tooltip>
        </v-toolbar>
    </div>
</template>
<script>
export default {
    props: {
        data: {
            type: Object,
            default: () => {
                return {
                    title: "Table Header",
                    isFetching: false,
                    keyword: ""
                };
            }
        },
        options: {
            type: Boolean,
            default: () => {
                return false;
            }
        },
        hide: {
            type: Array,
            default() {
                return [];
            }
        },
        disable: {
            type: Array,
            default() {
                return [];
            }
        },
    },
}
</script>
<style scoped>
.v-application .v-btn{
    min-width: unset !important;
    padding: 0 10px !important;
}
</style>