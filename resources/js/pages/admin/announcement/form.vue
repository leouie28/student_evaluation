<template>
    <div>
        <v-dialog persistent max-width="600" v-model="show">
            <v-card>
                <v-card-title>Announcement Info</v-card-title>
                <v-divider class="mt-0 pt-0"></v-divider>
                <v-card-text class="">
                    <v-row>
                        <v-col md="12" cols="12">
                            <v-text-field
                            dense
                            label="Titile"
                            v-model="payload.title"
                            :rules="rule"
                            filled
                            required
                            hide-details="auto"
                            ></v-text-field>
                        </v-col>
                        <v-col md="12" cols="12">
                            <v-textarea
                            dense
                            label="Content"
                            v-model="payload.content"
                            :rules="rule"
                            filled
                            required
                            hide-details="auto"
                            ></v-textarea>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="closeForm">
                        Close
                    </v-btn>
                    <v-btn color="secondary" @click="save">
                        {{isEdit?'Update':'Create'}}
                        <v-icon class="ml-2">mdi-{{isEdit?'content-save':'plus'}}</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
export default {
    data: () => ({
        isEdit: false,
        payload: {
            title: '',
            content: '',
        },
        orig: {
            title: '',
            content: ''
        },
        rule: [v => !! v || 'This field is required'],
    }),
    methods: {
        save() {
            if(this.payload.title && this.payload.content){
                if(this.payload.isEdit) {
                    this.$emit('update',this.payload)
                }else {
                    this.$emit('save',this.payload)
                }
            }else{
                alert('Important field are required')
            }
        },
        closeForm() {
            // console.log(this.payload)
            this.payload = JSON.parse(JSON.stringify(this.orig))
            this.$emit('close')
            setTimeout(() => {
                this.isEdit = false
            },100)
        }
    },
    props: {
        show: {
            type: Boolean,
            default: () => false
        },
        data: {
            type: Object,
            default: () => {}
        }
    },
    watch: {
        isEdit(val) {
            console.log(val)
        },
        data: {
            handler(val) {
                if(val) {
                    console.log(val)
                    this.isEdit = true
                    this.payload = val
                }
            },immediate:true,deep:true
        }
    }
}
</script>