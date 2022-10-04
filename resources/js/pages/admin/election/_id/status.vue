<template>
    <div class="pa-2">
        <v-card elevation="2" class="pa-2">
            <v-card-text>
                <custom-bar :elect="elect"></custom-bar>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
import CustomBar from '@/components/chart/cus-bar.vue'
export default {
    components: {
        CustomBar,
    },
    data: () => ({
        elect: {},
    }),
    created() {
        this.getResult()
    },
    methods: {
        getResult() {
            let id = this.$route.params.id
            axios.get(`/admin-api/election/${id}/result`).then(({data}) => {
                this.elect = data
            })
        }
    },
};
</script>