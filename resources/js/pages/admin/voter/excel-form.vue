<template>
    <div>
        <v-dialog persistent max-width="600" v-model="show">
            <v-card>
                <v-card-title>Import Excel</v-card-title>
                <v-divider class="pt-0 mt-0"></v-divider>
                <v-card-text>
                    <div v-if="!inserting" :class="file_name?'excel excel-color text-center py-6':'excel text-center py-6'" @click="$refs.file_input.click()">
                        <input ref="file_input" name="file" class="hide" @change="onFileChange" accept=".xlsx" type="file">
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
                    <div class="text-center py-6" v-else>
                        <v-progress-circular
                        size="70"
                        indeterminate
                        color="green"
                        ></v-progress-circular>
                        <div class="mt-5">
                            <span>Inserting record! Please wait...</span>
                        </div>
                    </div>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text :disabled="inserting" @click="$emit('close')">
                        Close
                    </v-btn>
                    <v-btn color="secondary" :disabled="inserting" @click="insertRecord">
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
        file: '',
        inserting: false,
    }),
    methods: {
        onFileChange(e) {
            this.file_name = e.target.files[0].name
            this.file = e.target.files[0]
        },
        insertRecord() {
            if(this.file){
                this.inserting = true
                const config = {
                    headers: {
                        'content-type': 'multipart/form-data',
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                    }
                }
                // form data
                let formData = new FormData();
                formData.append('file', this.file);
                axios.post(`/admin-api/student/insert-excel`, formData, config).then(({data}) => {

                }).finally(() => {
                    setTimeout(() => {
                        this.inserting = false
                        this.closeThis()
                    },2000)
                })
            }
        },
        closeThis() {
            setTimeout(() => {
                this.$emit('close')
            },1000)
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