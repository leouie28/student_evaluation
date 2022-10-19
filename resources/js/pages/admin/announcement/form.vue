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
                            label="Heading/Titile"
                            v-model="payload.title"
                            :readonly="isEdit"
                            :rules="rule"
                            filled
                            required
                            hide-details="auto"
                            ></v-text-field>
                        </v-col>
                        <v-col md="12" cols="12">
                            <v-textarea
                            dense
                            label="Content/Message"
                            :readonly="isEdit"
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
                    <v-btn color="secondary" @click="save" v-if="!isEdit">
                        {{isEdit?'Update':'Send'}}
                        <v-icon class="ml-2">mdi-{{isEdit?'content-save':'send'}}</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
export default {
    data: () => ({
        // isEdit: false,
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
    props: {
        show: {
            type: Boolean,
            default: () => false
        },
        edit: {
            type: Boolean,
            default: () => false
        },
        data: {
            type: Object,
            default: () => {}
        }
    },
    mounted() {
        console.log(this._getters('is_editing'),'form')
    },
    methods: {
        save() {
            if(this.payload.title && this.payload.content){
                if(this.isEdit) {
                    this.$emit('update',this.payload)
                    this.closeForm()
                }else {
                    this.$emit('save',this.payload)
                    this.closeForm()
                }
            }else{
                alert('Important field are required')
            }
        },
        closeForm() {
            // console.log(this.payload)
            this.$emit('close')
            setTimeout(() => {
                this._commit('is_editing', false)
                this.payload = JSON.parse(JSON.stringify(this.orig))
            },200)
        }
    },
    computed: {
        isEdit() {
            return this._getters('is_editing')
        }
    },
    watch: {
        data: {
            handler(val) {
                if(val) {
                    this.payload = val
                }
            },immediate:true,deep:true
        }
    }
}
</script>