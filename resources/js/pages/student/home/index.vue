<template>
    <div>
        <announces></announces>
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
                    max-width="600"
                    type="image, article"
                    ></v-skeleton-loader>
                </div>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
import Announces from '../announcement/index.vue'
import Election from '../election/index.vue'
export default {
    components: {
        Election,
        Announces,
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