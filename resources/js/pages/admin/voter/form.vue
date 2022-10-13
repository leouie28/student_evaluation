<template>
    <div>
        <v-dialog persistent max-width="500" v-model="show">
            <v-card>
                <v-card-title>Voter Info</v-card-title>
                <v-divider class="mt-0 pt-0"></v-divider>
                <v-card-text class="pb-0">
                    <v-row>
                        <v-col md="12" cols="12">
                            <v-text-field
                            dense
                            label="Student Id"
                            v-model="payload.student_id"
                            :rules="rule"
                            filled
                            required
                            hide-details="auto"
                            ></v-text-field>
                        </v-col>
                        <v-col md="12" cols="12">
                            <v-text-field
                            dense
                            label="Name"
                            v-model="payload.name"
                            :rules="rule"
                            filled
                            required
                            hide-details="auto"
                            ></v-text-field>
                        </v-col>
                        <v-col md="12" cols="12">
                            <v-text-field
                            dense
                            label="Password"
                            v-model="payload.password"
                            filled
                            required
                            hide-details="auto"
                            ></v-text-field>
                        </v-col>
                        <v-col md="12" cols="12">
                            <v-radio-group
                            class="mt-0"
                            row
                            hide-details="auto"
                            v-model="payload.active"
                            >
                            <v-radio
                                label="Active"
                                value="1"
                            ></v-radio>
                            <v-radio
                                label="Inactive"
                                value="0"
                            ></v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="close">
                        Close
                    </v-btn>
                    <v-btn color="secondary" @click="save">
                        {{isEdit?'Update':'Create'}}
                        <v-icon>mdi-{{isEdit?'content-save':'plus'}}</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
import { watch } from 'vue'
export default {
    data: () => ({
        payload: {
            isEdit: false,
            student_id: '',
            name: '',
            password: '',
            active: '1',
        },
        orig: {
            isEdit: false,
            student_id: '',
            name: '',
            password: '',
            active: '1',
        },
        rule: [v => !! v || 'This field is required']
    }),
    mounted() {
        console.log('test')
    },
    computed: {
        isEdit() {
            return this._getters('is_editing') 
        }
    },
    methods: {
        close() {
            this.$emit('close')
            setTimeout(() => {
                this._commit('is_editing',false)
                this.payload = JSON.parse(JSON.stringify(this.orig))
            },200)
        },
        save() {
            if(this.payload.student_id && this.payload.name){
                if(this.isEdit) {
                    this.$emit('update', this.payload)
                    this.close()
                }else {
                    this.$emit('save',this.payload)
                    this.close()
                }
            }else{
                alert('Important field are required')
            }
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
        data: {
            handler(val) {
                if(val) {
                    this.payload = val
                    this.payload.active = String(val.status)
                    console.log(this.payload)
                }
            }
        }
    }
}
</script>