<template>
    <div class="pa-2">
        <v-card elevation="2" class="pa-2">
            <v-card-title>
                Election Form
                <v-spacer></v-spacer>
                <v-btn color="secondary" v-if="!isShow">
                    <v-icon class="mr-2">mdi-backspace</v-icon>
                    Return
                </v-btn>
                <span v-else class="d-flex align-center">
                    <span class="text-subtitle-1 mr-1">Election Url: </span>
                    <v-tooltip bottom color="primary">
                        <template v-slot:activator="{ on, attrs }">
                            <v-chip label outlined v-bind="attrs" v-on="on" @click="copyLink" color="success">
                                {{url}}
                                <v-icon small class="ml-2">mdi-content-copy</v-icon>
                            </v-chip>
                        </template>
                        <span>Click to copy election url link</span>
                    </v-tooltip>
                </span>
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
                        <step-1 :election="payload.election" @cancelEdit="cancelEdit"></step-1>
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
                        <step-2 :positions="payload.positions" @cancelEdit="cancelEdit"></step-2>
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
                        <step-3 :positions="payload.positions" @cancelEdit="cancelEdit"></step-3>
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
        url: '',
        payload: {
            election: {
                name: '',
                school_year: '',
                description: '',
                date_open: '',
                time_open: '',
                date_close: '',
                time_close: '',
                code: '',
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
            this.url = window.location.origin+'/election/'+this.payload.election.urlkey
            console.log(JSON.parse(localStorage.payload), 'test')
            // console.log(localStorage.payload)
        }
        if(localStorage._show){
            this.isShow = true
        }
    },
    methods: {
        cancelEdit() {
            axios.get(`/admin-api/election/get-set/${this.payload.election.id}`).then(({ data }) => {
                this.payload = data
            })
        },
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
        },
        copyLink() {
            let url = this.url
            navigator.clipboard.writeText(url);
            alert("Link copied to clipboard")
        },
    },
}
</script>