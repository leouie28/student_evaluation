<template>
    <div>
        <v-dialog persistent max-width="600" v-model="show">
            <v-card>
                <v-card-title>Import Excel</v-card-title>
                <v-divider class="pt-0 mt-0"></v-divider>
                <v-card-text>
                    <div :class="file_name?'excel excel-color text-center py-6':'excel text-center py-6'" @click="$refs.file_input.click()">
                        <input ref="file_input" name="file" class="hide" @change="onFileChange($event.target.files)" accept=".xlsx" type="file">
                        <v-icon x-large style="font-size:80px;" :color="file_name?'success': ''">
                            mdi-microsoft-excel
                        </v-icon>
                        <div>
                            <v-toolbar-title class="text--primary">
                                {{file_name?file_name:'Accept .xlsx excel file only'}}
                            </v-toolbar-title>
                        </div>
                        <v-btn elevation="0" color="light" @click.stop="$refs.file_input.click()">
                            <span class="text-capitalize">Browse file</span>
                        </v-btn>
                    </div>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="$emit('close')">
                        Close
                    </v-btn>
                    <v-btn color="secondary" @click="$emit('save',payload)">
                        Insert records
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
export default {
    data: () => ({
        file_name: '',
        file: null,
    }),
    methods: {
        onFileChange(file) {
            this.file_name = file[0].name
        }
    },
    props: {
        show: {
            type: Boolean,
            default: () => false
        }
    }
}
</script>
<style scoped>
.hide{
    display: none;
}
.excel{
    border: 2px dashed grey;
}
.excel-color{
    border: 2px dashed #4caf50;
}
</style>