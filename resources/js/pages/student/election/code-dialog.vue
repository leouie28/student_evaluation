<template>
    <div>
        <v-dialog persistent v-model="show" max-width="500">
            <v-card>
                <v-card-title>
                    Election Passcode
                </v-card-title>
                <v-card-text>
                    <template v-if="!submitting">
                        <div>
                            <v-toolbar-title>
                                Please enter passcode:
                            </v-toolbar-title>
                        </div>
                        <div>
                            <v-text-field
                            filled
                            placeholder="Passcode ..."
                            v-model="code"
                            hide-details="auto"
                            ></v-text-field>
                            <div v-if="invalid" class="text-center mt-2 error--text">
                                Invalid passcode!
                            </div>
                        </div>
                        <div class="text-right mt-3">
                            <v-btn text @click="$emit('close')">
                                Close
                            </v-btn>
                            <v-btn color="primary" @click="submitCode">
                                Submit
                            </v-btn>
                        </div>
                    </template>
                    <div v-else class="text-center mt-4">
                        <v-progress-circular
                        indeterminate
                        size="50"
                        color="primary"
                        ></v-progress-circular>
                        <div class="mt-4">Please wait ...</div>
                    </div>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {
            code: '',
            submitting: false,
            invalid: false,
        }
    },
    props: {
        show: {
            type: Boolean,
            default: () => false
        }
    },
    mounted() {
        console.log(this.$route.params.key,'123')
    },
    methods: {
        submitCode() {
            console.log(this.code)
            if(this.code.length >= 1) {
                this.submitting = true
                let key = this.$route.params.key
                axios.post(`/student-api/election-api/${key}/check-code`, this.code).then(({data}) => {
                    
                })
            }
        }
    }
}
</script>