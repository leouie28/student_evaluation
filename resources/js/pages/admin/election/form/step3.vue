<template>
    <div>
        <template v-for="(position, index) in positions">
            <v-card outlined class="mb-4" :key="index">
                <v-card-title>["{{position.name}}"]</v-card-title>
                <v-card-text>
                    <template v-for="(candidate, i) in position.candidate">
                        <v-row :key="i">
                            <v-col md="1" cols="12">
                                <v-row wrap>
                                    <v-col md="12" cols="12">
                                        <div class="feat-img mx-auto">
                                            <div class="d-flex justify-center align-center flex-column" style="height:100%;">
                                                <v-icon>mdi-file-image</v-icon>
                                                image
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col md="11" cols="12">
                                <v-row>
                                    <v-col md="7" cols="12">
                                        <v-text-field
                                        filled
                                        label="Candidate Name"
                                        placeholder="Ex. President"
                                        hide-details="auto"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col md="5" cols="12">
                                        <v-text-field
                                        filled
                                        label="Partylist (optional)"
                                        hide-details="auto"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </template>
                    <v-row class="mb-1">
                        <div class="text-center">
                            <v-btn large outlined @click="addSlot(index)">
                                Add {{position.name}} candidate
                                <v-icon class="ml-2">mdi-plus</v-icon>
                            </v-btn>
                        </div>
                    </v-row>
                </v-card-text>
            </v-card>
        </template>
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
        addSlot(i) {
            this.positions[i].candidate.push({name: '', partylist: '', image: ''})
        }
    }
}
</script>
<style scoped>
.feat-img{
    width: 100%;
    height: 56px;
    border: 2px dashed grey;
}
</style>