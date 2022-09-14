<template>
    <div class="pa-2">
        <v-card elevation="2" class="pa-2">
            <v-card-title>
                Election Form
                <v-spacer></v-spacer>
                <v-btn color="secondary">
                    <v-icon class="mr-2">mdi-backspace</v-icon>
                    Return
                </v-btn>
            </v-card-title>
            <v-card-text>
                <v-stepper v-model="step">
                    <v-stepper-header>
                    <v-stepper-step
                        :complete="step > 1 || isShow"
                        :editable="isShow"
                        step="1"
                    >
                        Election Info
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step
                        :complete="step > 2 || isShow"
                        :editable="isShow"
                        step="2"
                    >
                        Election Positions
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step
                        :complete="step > 3 || isShow"
                        :editable="isShow"
                        step="3">
                        Election Candidates
                    </v-stepper-step>
                    </v-stepper-header>

                    <v-stepper-items>
                    <v-stepper-content step="1">
                        <step-1 :election="payload.election"></step-1>
                        <div v-if="!isShow">
                            <v-btn
                            color="primary"
                            @click="saveLocal(2)"
                            >
                            {{isShow?'Next':'Continue'}}
                            </v-btn>
                            <v-btn text disabled>
                            Back
                            </v-btn>
                        </div>
                    </v-stepper-content>

                    <v-stepper-content step="2">
                        <step-2 :positions="payload.positions"></step-2>
                        <div v-if="!isShow">
                            <v-btn
                            color="primary"
                            @click="saveLocal(3)"
                            >
                            {{isShow?'Next':'Continue'}}
                            </v-btn>
                            <v-btn text @click="step = 1">
                            Back
                            </v-btn>
                        </div>
                    </v-stepper-content>

                    <v-stepper-content step="3">
                        <step-3 :positions="payload.positions"></step-3>
                        <div v-if="!isShow">
                            <v-btn
                            color="primary"
                            :disabled="isShow"
                            @click="warning"
                            >
                            {{isShow?'Next':'Create Election'}}
                            </v-btn>
                            <v-btn text @click="step = 2">
                            Back
                            </v-btn>
                        </div>
                    </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>
            </v-card-text>
        </v-card>
        <Warning :data="warning_data" @close="warning_data.trigger = false" @confirm="create"></Warning>
    </div>
</template>
<script>
import Step1 from './step1.vue'
import Step2 from './step2.vue'
import Step3 from './step3.vue'
export default {
    components: {
        Step1,
        Step2,
        Step3,
    },
    data: () => ({
        isShow: false,
        step: 1,
        payload: {
            election: {
                name: '',
                school_year: '',
                description: '',
                date_open: '',
                time_open: '',
                date_close: '',
                time_close: '',
                image: null,
            },
            positions: [
                {
                    name: '',
                    max_vote: 1,
                    candidate: [
                        {
                            name: '',
                            partylist: '',
                            image: null
                        }
                    ],
                    sort: 1,
                },
            ],
        }
    }),
    mounted() {
        if(localStorage.getItem('payload')){
            this.payload = JSON.parse(localStorage.payload)
            console.log(JSON.parse(localStorage.payload), 'test')
            // console.log(localStorage.payload)
        }
        if(localStorage._show){
            this.isShow = true
        }
    },
    methods: {
        warning() {
            let text = 'Are you sure you want to add this data?'
            this._warning(text)
        },
        saveLocal(step) {
            this.step = step
            localStorage.setItem('payload', JSON.stringify(this.payload))
        },
        create() {
            this.warning_data.trigger = false
            localStorage.setItem('payload', JSON.stringify(this.payload))
            axios.post(`/admin-api/election/store-set`, this.payload).then(({ data }) => {
                this._newAlert(true, data.type, data.message)
            }).finally(()=>{
                setTimeout(() => {
                    localStorage.removeItem('payload')
                    this.$router.push({path: '/admin/election'})
                },2000)
            })
        }
    },
}
</script>