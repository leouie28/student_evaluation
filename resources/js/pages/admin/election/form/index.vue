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
                        :complete="step > 1"
                        step="1"
                    >
                        Election Info
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step
                        :complete="step > 2"
                        step="2"
                    >
                        Election Positions
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step step="3">
                        Election Candidates
                    </v-stepper-step>
                    </v-stepper-header>

                    <v-stepper-items>
                    <v-stepper-content step="1">
                        <step-1 :election="payload.election"></step-1>
                        <v-btn
                        color="primary"
                        @click="saveLocal(2)"
                        >
                        Continue
                        </v-btn>

                        <v-btn text disabled>
                        Back
                        </v-btn>
                    </v-stepper-content>

                    <v-stepper-content step="2">
                        <step-2 :positions="payload.positions"></step-2>
                        <v-btn
                        color="primary"
                        @click="saveLocal(3)"
                        >
                        Continue
                        </v-btn>

                        <v-btn text @click="step = 1">
                        Back
                        </v-btn>
                    </v-stepper-content>

                    <v-stepper-content step="3">
                        <step-3 :positions="payload.positions"></step-3>
                        <v-btn
                        color="primary"
                        @click="create"
                        >
                        Create election
                        </v-btn>

                        <v-btn text @click="step = 2">
                        Back
                        </v-btn>
                    </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>
            </v-card-text>
        </v-card>
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
                    ]
                },
            ],
        }
    }),
    mounted() {
        if(localStorage.getItem('payload')){
            this.payload = JSON.parse(localStorage.payload)
            console.log(JSON.parse(localStorage.payload))
            // console.log(localStorage.payload)
        }
    },
    methods: {
        saveLocal(step) {
            this.step = step
            localStorage.setItem('payload', JSON.stringify(this.payload))
        },
        create() {
            localStorage.setItem('payload', JSON.stringify(this.payload))
            axios.post(`/admin-api/election/store-set`, this.payload).then(({ data }) => {
                
            }).finally(()=>{
                
            })
        }
    },
}
</script>