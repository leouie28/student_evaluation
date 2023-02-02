<template>
    <div class="pa-2">
        <v-card elevation="2" class="pa-4">
            <v-row wrap class="py-3">
                <v-col md="3" cols="12" v-for="stat in stats" :key="stat.name">
                    <v-card elevation="0" class="rounded-lg pa-3 text-center" @click="$router.push({path: stat.path})" dark :color="stat.color">
                        <div class="d-flex justify-center align-center">
                            <v-icon x-large>{{stat.icon}}</v-icon>
                            <span class="text-h3 ml-2">{{stat.data}}</span>
                        </div>
                        <div>{{stat.name}}</div>
                    </v-card>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <div v-if="elects.length>0">
                <v-card elevation="0">
                    <!-- <v-btn outlined class="mb-2">
                        Select Election Name
                        <v-icon>mdi-menu-down</v-icon>
                    </v-btn> -->
                    <v-row>
                        <v-col cols="5" class="pb-0">
                            <v-select
                            outlined
                            dense
                            v-model="selectedId"
                            :items="elects"
                            item-value="id"
                            item-text="name"
                            hide-details=""
                            placeholder="Select Election"
                            @change="getElection"
                            ></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="8" cols="12">
                            <v-card outlined>
                                <v-card-title class="mb-0 pb-0">Status</v-card-title>
                                <v-divider></v-divider>
                                <v-card-text class="pt-0">
                                    <custom-bar :elect="elect"></custom-bar>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col md="4" cols="12">
                            <v-card outlined>
                                <v-card-title class="mb-0 pb-0">Voted</v-card-title>
                                <v-divider></v-divider>
                                <v-card-text class="pt-0">
                                    <v-timeline align-top v-if="votes.length>0">
                                        <v-timeline-item
                                        class="pb-0"
                                        v-for="vote in votes"
                                        :key="vote.id"
                                        :color="pickColor()"
                                        small>
                                            <span class="pt-1">{{`${moment(vote.created_at).format('MM/DD/YY')} ${vote.voter}`}}</span>
                                        </v-timeline-item>
                                    </v-timeline>
                                    <div class="pa-10" v-else>
                                        <v-img
                                        src="/images/system/admin-empty.svg"
                                        ></v-img>
                                        <br>
                                        <div class="mt-2 text-center">No currently vote record...</div>
                                    </div>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card>
            </div>
            <v-card v-else outlined>
                <div class="pa-10 text-center">
                    <v-img
                    class="mx-auto"
                    width="300"
                    src="/images/system/admin-empty.svg"
                    ></v-img>
                    <br>
                    <div class="mt-2 text-center">No currently vote record...</div>
                </div>
            </v-card>
        </v-card>
    </div>
</template>
<script>
import CustomBar from '@/components/chart/cus-bar.vue'
export default {
    components: {
        CustomBar,
    },
    data() {
        return {
            selectedId: '',
            elects: [],
            votes: [],
            elect: {},
            stats: [
                {name: 'Announcements', color: 'red', icon: 'mdi-bullhorn-outline', data: '0', path: '/admin/status'},
                {name: 'Elections', color: 'brown', icon: 'mdi-printer-outline', data: '0', path: '/admin/election'},
                {name: 'Voters', color: 'secondary', icon: 'mdi-account-group-outline', data: '0', path: '/admin/voter'},
                {name: 'Party Groups', color: 'success', icon: 'mdi-flag-outline', data: '0', path: '/admin/partylist'},
            ],
        }
    },
    created() {
        this.getElectionList()
        this.getStat()
    },
    methods: {
        getElectionList() {
            axios.get(`/admin-api/election?per_page=-1`).then(({data}) => {
                this.elects = data.data
                if(data.data.length>0) {
                    let last = this.elects[this.elects.length -1]
                    console.log(last)
                    this.selectedId = last.id
                    this.getElection()
                }
            })
        },
        getElection() {
            let id = this.selectedId
            axios.get(`/admin-api/election/${id}/result`).then(({data}) => {
                this.elect = data.election
                this.votes = data.votes
            })
        },
        getStat() {
            axios.get(`/admin-api/status`).then(({data}) => {
                this.stats[0].data = data.announcements
                this.stats[1].data = data.elections
                this.stats[2].data = data.voters
                this.stats[3].data = data.partygroups
            })
        },
        pickColor() {
            return '#'+(Math.random()*0xFFFFFF<<0).toString(16)
            // return color
        },
    }
}
</script>