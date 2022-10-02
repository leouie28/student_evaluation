<template>
    <div v-if="valid">
        <v-card :class="elect.image == '/images/system/noimage.png' ? 'mb-2 cus-border-top' : 'mb-2'">
            <v-img
            height="150"
            :src="elect.image"
            ></v-img>
            <v-card-title>{{elect.name}}</v-card-title>
            <v-divider class="my-0"></v-divider>
            <v-card-text>
                {{elect.description}}
                <div class="d-flex justify-end">
                    <!-- 10:20:34 -->
                    <countdown :time="time" :interval="1000" v-if="time>0">
                        <template slot-scope="props">
                            <span class="text--primary">Close in：{{ props.days }}d : {{ props.hours }}h : {{ props.minutes }}m : {{ props.seconds }}s</span>
                        </template>
                    </countdown>
                    <span v-else class="error--text">Election Closed</span>
                </div>
            </v-card-text>
        </v-card>
        <template v-for="(pos, i) in elect.positions">
            <v-card class="mb-2" :key="pos.id">
                <v-card-text>
                    <v-toolbar-title>{{pos.name}} <span class="text-subtitle-2 grey--text" v-if="pos.max_vote>1">( Vote {{pos.max_vote}} )</span></v-toolbar-title>
                    <v-radio-group v-model="elect.positions[i].vote" v-if="pos.max_vote<=1">
                        <v-radio
                        v-for="c in pos.candidate"
                        :key="c.id"
                        :label="c.name"
                        :value="c.id"
                        ></v-radio>
                    </v-radio-group>
                    <div v-else class="my-3">
                        <v-checkbox
                        v-for="c in pos.candidate"
                        v-model="elect.positions[i].vote"
                        :key="c.id"
                        :label="c.name"
                        :value="c.id"
                        class="mt-2"
                        hide-details
                        ></v-checkbox>
                    </div>
                </v-card-text>
            </v-card>
        </template>
        <v-card class="mb-3">
            <v-card-text class="text-center error--text">
                Invalid
            </v-card-text>
        </v-card>
        <div class="text-right">
            <v-btn color="secondary" :disabled="submitting" @click="resetPayload" outlined>Reset Form</v-btn>
            <v-btn color="primary" :disabled="submitting" @click="confirmation = true">Submit my vote</v-btn>
        </div>
        <v-dialog persistent v-model="confirmation" max-width="600">
            <v-card>
                <v-card-title>
                    Warning
                </v-card-title>
                <v-card-text class="text-center">
                    Are you sure you want to submit your vote?
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="confirmation = false">
                        Cancel
                    </v-btn>
                    <v-btn color="primary" @click="submit">
                        Confirm & submit
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
    <div v-else class="empty-container text-center">
        <v-img
        class="mx-auto"
        max-width="60%"
        alt="Empty"
        src="/images/system/empty.svg"
        ></v-img><br>
        <div class="text-h2 font-weight-medium w-100">
            Oops
        </div>
        <div class="mt-2">
            {{errMsg}}
        </div>
    </div>
</template>
<script>
import moment, { now } from 'moment'
export default {
    data() {
        const now = new Date();
        const newYear = new Date(now.getFullYear() + 1, 0, 1);
        return {
            confirmation: false,
            valid: true,
            errMsg: '',
            submitting: false,
            elect: {},
            time: null,
        }
    },
    mounted() {
        this.getElection()
    },
    methods: {
        getElection() {
            if(localStorage._passcode) {
                let key = this.$route.params.key
                axios.get(`/student-api/election-api/${key}/election-set`).then(({data}) => {
                    if(data!='error') {
                        data.positions.forEach(elem => {
                            if(elem.max_vote > 1) {
                                elem.vote = []
                            }else {
                                elem.vote = ''
                            }
                            let close = new Date(data.closing)
                            let now = new Date()
                            this.time = close - now
                        });
                        this.elect = data
                        if(data.code != localStorage._passcode) this.valid = false
                    }else {
                        this.valid = false
                        this.errMsg = 'Election key not found...'
                    }
                })
            }else {
                this.valid = false
                this.errMsg ='Your passcode is not valid for this election.'
            }
        },
        resetPayload() {
            this.elect.positions.forEach(elem => {
                if(elem.max_vote > 1) {
                    elem.vote = []
                }else {
                    elem.vote = ''
                }
            });
        },
        submit() {
            this.confirmation = false
            this.submitting = true
            axios.post(`/student-api/vote-api`,this.elect).then(({data}) => {
                
            })
        }
    },
}
</script>