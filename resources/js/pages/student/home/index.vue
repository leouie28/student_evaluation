<template>
    <div>
        <v-card class="mb-2">
            <v-card-text>
                <v-toolbar-title class="d-flex justify-space-between align-center">
                    <div>
                        Announcement
                        <v-icon class="ml-1">mdi-bullhorn-outline</v-icon>
                    </div>
                    <v-btn icon color="primary">
                        <v-icon>mdi-refresh</v-icon>
                    </v-btn>
                </v-toolbar-title>
                <div class="pl-4">
                    <div v-if="!loading">
                        <div><a href="#">#ELECTION ANNOUNCEMENT</a></div>
                        <div><a href="#">#Announcement one</a></div>
                    </div>
                    <div v-else>
                        <v-skeleton-loader
                        class="mx-auto"
                        max-width="374"
                        type="list-item-three-line"
                        ></v-skeleton-loader>
                    </div>
                </div>
            </v-card-text>
        </v-card>
        <v-card>
            <v-card-text>
                <v-toolbar-title class="d-flex justify-space-between align-center">
                    <div>
                        Election
                        <v-icon class="ml-1">mdi-cloud-print-outline</v-icon>
                    </div>
                    <v-btn icon color="primary">
                        <v-icon>mdi-refresh</v-icon>
                    </v-btn>
                </v-toolbar-title>
                <election v-if="!loading"></election>
                <div v-else>
                    <v-skeleton-loader
                    v-for="n in 5"
                    :key="n"
                    class="mx-auto"
                    max-width="374"
                    type="image, article"
                    ></v-skeleton-loader>
                </div>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
import Election from '../election/index.vue'
export default {
    components: {
        Election,
    },
    data() {
        return {
            loading: true,
        }
    },
    created() {
        setTimeout(() => {
            this.loading = false
        },2000)
    }
}
</script>