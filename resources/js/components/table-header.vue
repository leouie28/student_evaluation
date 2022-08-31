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
                mdi-autorenew
                {{ data.isFetching ? "mdi-spin" : "" }}
            </v-icon>
            <v-spacer></v-spacer>
            <div class="d-inline mr-2">
                <v-text-field
                dense
                placeholder="Search ..."
                append-icon="mdi-magnify"
                hide-details="">
                </v-text-field>
            </div>
            <v-tooltip v-if="!hide.includes('addNew')" bottom color="primary">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        color="secondary"
                        dark
                        @click.stop="$emit('addNew')"
                        class="mr-2"
                        v-bind="attrs"
                        v-on="on"
                    >
                        Add 
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                </template>
                <span>Add New</span>
            </v-tooltip>
            <v-tooltip v-if="!hide.includes('excel')" bottom color="primary">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        color="success"
                        dark
                        @click.stop="$emit('importExcel')"
                        class="mr-2"
                        v-bind="attrs"
                        v-on="on"
                    >
                        Import Excel 
                        <v-icon>mdi-upload</v-icon>
                    </v-btn>
                </template>
                <span>Import from excel file</span>
            </v-tooltip>
            <v-tooltip v-if="!hide.includes('download')" bottom color="primary">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        color="primary"
                        dark
                        class="mr-2"
                        v-bind="attrs"
                        v-on="on"
                    >
                        Download 
                        <v-icon>mdi-download</v-icon>
                    </v-btn>
                </template>
                <span>Download {{data.title}} record</span>
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
        searchWidth: {
          type: String
        }
    },
}
</script>