<template>
    <div>

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
                    v-model="data.keyword"
                    @keyup="(data.keyword.length<=0 ? $emit('search') : '')"
                    placeholder="Search record ..."
                    append-icon="mdi-magnify"
                    @keydown.enter="$emit('search')"
                    @click:append="$emit('search')"
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
                <v-menu
                v-if="!hide.includes('filter')"
                transition="slide-y-transition"
                bottom
                :close-on-content-click="false"
                offset-y
                >
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
                    <slot name="filter">
                        <v-card width="300" class="pa-2">
                            <v-card-title>Filter</v-card-title>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="12">
                                        <v-select
                                        dense
                                        outlined
                                        label="Field"
                                        hide-details=""
                                        ></v-select>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn block color="warning" class="text-capitalize">Filter Record</v-btn>
                            </v-card-actions>
                        </v-card>
                    </slot>
                </v-menu>
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
        <v-sheet v-if="data.isFiltered" color="grey lighten-2" class="px-2 d-flex align-center" rounded="md">
            <span class="pr-3">Filter by:</span>
            <v-chip-group column>
                <v-chip class="elevation-4" label color="primary">gender:"Male"</v-chip>
                <v-chip class="elevation-4" label color="primary">department:"PreSchool"</v-chip>
            </v-chip-group>
        </v-sheet>
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
                    keyword: "",
                    isFiltered: false,
                    filter: []
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