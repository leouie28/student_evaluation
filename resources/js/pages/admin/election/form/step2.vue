<template>
    <div>
        <v-card outlined class="mb-4">
            <v-card-text>
                <div v-if="updating" class="mb-4">
                    <v-btn small color="success" outlined @click="readonly=false" v-if="readonly">
                        <v-icon small class="mr-1">mdi-square-edit-outline</v-icon>
                        Edit
                    </v-btn>
                    <div v-else>
                        <v-btn small color="success" @click="readonly=true">
                            <v-icon small class="mr-1">mdi-check</v-icon>
                            Save
                        </v-btn>
                        <v-btn small color="error" @click="readonly=true, $emit('cancelEdit')" class="ml-1">
                            <v-icon small class="mr-1">mdi-close</v-icon>
                            Cancel
                        </v-btn>
                    </div>
                </div>
                <template v-for="(position, index) in positions">
                    <v-row :key="index">
                        <v-col md="9" cols="12">
                            <v-text-field
                            :filled="readonly?false:true"
                            :readonly="readonly"
                            :dense="readonly?false:true"
                            label="Position name"
                            placeholder="Ex. President"
                            v-model="positions[index].name"
                            hide-details="auto"
                            ></v-text-field>
                        </v-col>
                        <v-col md="3" cols="12">
                            <v-text-field
                            :filled="readonly?false:true"
                            :readonly="readonly"
                            min="1"
                            :dense="readonly?false:true"
                            type="number"
                            v-model="positions[index].max_vote"
                            label="Maximum votes"
                            hide-details="auto"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </template>
                <v-row class="mb-1" v-if="!readonly">
                    <div class="text-center">
                        <v-btn outlined @click="addSlot">
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
        readonly: false,
        updating: false
    }),
    props: {
        positions: {
            type: Array,
            default: () => []
        }
    },
    created() {
        if(localStorage._show){
            if(localStorage._show=="1"){
                this.readonly = true
                this.updating = true
            }
        }
    },
    methods: {
        addSlot() {
            let count = this.positions.length
            this.positions.push({name:'', max_vote: 1, candidate: [{name: '', partylist: '', image: ''}], sort: count + 1})
        }
    }
}
</script>
<style scoped>

</style>