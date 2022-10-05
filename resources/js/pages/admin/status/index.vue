<template>
    <div class="pa-2">
        <v-card elevation="2" class="pa-4">
            <v-row wrap class="py-3">
                <v-col md="3" cols="12" v-for="stat in stats" :key="stat.name">
                    <v-card elevation="0" class="rounded-lg pa-3 text-center" dark :color="stat.color">
                        <div class="d-flex justify-center align-center">
                            <v-icon x-large>{{stat.icon}}</v-icon>
                            <span class="text-h3 ml-2">{{stat.data}}</span>
                        </div>
                        <div>{{stat.name}}</div>
                    </v-card>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <div>
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
                            hide-details=""
                            label="Select Election"
                            ></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="8" cols="12">
                            <v-card outlined>
                                <v-card-title>Status</v-card-title>
                                <v-card-text>
                                    <custom-bar :elect="elect"></custom-bar>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col md="4" cols="12">
                            <v-card outlined>
                                <v-card-title>Votes</v-card-title>
                                <v-card-text>
                                    <v-timeline align-top>
                                        <v-timeline-item
                                        v-for="n in 9"
                                        :key="n"
                                        :color="pickColor()"
                                        small>
                                            <span class="pt-1">02/10/22 User submit vote</span>
                                        </v-timeline-item>
                                    </v-timeline>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card>
            </div>
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
            elect: {},
            stats: [
                {name: 'Announcements', color: 'red', icon: 'mdi-bullhorn-outline', data: ''},
                {name: 'Elections', color: 'brown', icon: 'mdi-printer-outline', data: ''},
                {name: 'Voters', color: 'secondary', icon: 'mdi-account-group-outline', data: ''},
                {name: 'Party Groups', color: 'success', icon: 'mdi-flag-outline', data: ''},
            ],
        }
    },
    created() {
        this.getElection(1)
        this.getStat()
    },
    methods: {
        getElection(id) {
            axios.get(`/admin-api/election/${id}/result`).then(({data}) => {
                this.elect = data
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