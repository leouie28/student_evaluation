<template>
    <div>
        <v-card outlined class="mb-4">
            <v-card-text>
                <template v-for="(position, index) in positions">
                    <v-row :key="index">
                        <v-col md="9" cols="12">
                            <v-text-field
                            filled
                            label="Position name"
                            placeholder="Ex. President"
                            v-model="positions[index].name"
                            hide-details="auto"
                            ></v-text-field>
                        </v-col>
                        <v-col md="3" cols="12">
                            <v-text-field
                            filled
                            min="1"
                            type="number"
                            v-model="positions[index].max_vote"
                            label="Maximum votes"
                            hide-details="auto"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </template>
                <v-row class="mb-1">
                    <div class="text-center">
                        <v-btn large outlined @click="addSlot">
                            Add Position
                            <v-icon class="ml-2">mdi-plus</v-icon>
                        </v-btn>
                    </div>
                </v-row>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
export default {
    data: () => ({
        
    }),
    props: {
        positions: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        addSlot() {
            this.positions.push({name:'', max_vote: 1, candidate: [{name: '', partylist: '', image: ''}]})
        }
    }
}
</script>
<style scoped>

</style>