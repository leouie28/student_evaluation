<template>
    <div>
        <v-card class="mb-4">
            <v-card-text>
                <v-toolbar-title class="d-flex justify-space-between align-center">
                    <div>
                        Announcement
                        <v-icon class="ml-1">mdi-bullhorn-outline</v-icon>
                    </div>
                    <v-btn icon color="primary" @click="refresh">
                        <v-icon>mdi-refresh</v-icon>
                    </v-btn>
                </v-toolbar-title>
                <div class="pl-4">
                    <div v-if="!loading">
                        <template v-for="announce in announces">
                            <div class="mb-2" style="font-size:21px;" :key="announce.id"><a href="#">#{{announce.title}}</a></div>
                        </template>
                    </div>
                    <div v-else>
                        <v-skeleton-loader
                        class="mx-auto"
                        max-width="600"
                        type="list-item-three-line"
                        ></v-skeleton-loader>
                    </div>
                </div>
            </v-card-text>
            <v-card-actions class="pt-0 mt-0" v-if="announces.length>=4">
                <v-btn x-small class="mx-auto" color="grey darken-3" outlined>
                    Show More
                    <v-icon small>mdi-chevron-down-circle-outline</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
export default {
    data: () => ({
        announces: [],
        loading: true,
    }),
    mounted() {
        this.getAnnounces()
    },
    methods: {
        refresh() {
            this.loading = true
            this.getAnnounces()
        },
        getAnnounces() {
            axios.get(`/student-api/announces/get-latest`).then(({data}) => {
                this.announces = data
                setTimeout(() => {
                    this.loading = false
                },2000)
            })
        }
    }
}
</script>