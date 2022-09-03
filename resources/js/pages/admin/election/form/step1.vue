<template>
    <div>
        <v-card outlined class="mb-4">
            <v-card-text>
                <v-row>
                    <v-col md="6" cols="12">
                        <v-row wrap>
                            <v-col md="12" cols="12">
                                <v-text-field
                                filled
                                label="Name of the election"
                                placeholder="Ex. SSG Election"
                                v-model="election.name"
                                hide-details="auto"
                                ></v-text-field>
                            </v-col>
                            <v-col md="12" cols="12">
                                <v-textarea
                                filled
                                label="Description (optional)"
                                v-model="election.description"
                                hide-details="auto"
                                ></v-textarea>
                            </v-col>
                            <v-col md="6" cols="12">
                                <v-text-field
                                filled
                                prepend-inner-icon="mdi-calendar"
                                label="Opening Date"
                                v-model="election.date_open"
                                hide-details="auto"
                                ></v-text-field>
                            </v-col>
                            <v-col md="6" cols="12">
                                <v-text-field
                                filled
                                prepend-inner-icon="mdi-clock-outline"
                                label="Opening Time"
                                v-model="election.time_open"
                                hide-details="auto"
                                ></v-text-field>
                            </v-col>
                            <v-col md="6" cols="12">
                                <v-text-field
                                filled
                                prepend-inner-icon="mdi-calendar"
                                label="Closing Date"
                                v-model="election.date_close"
                                hide-details="auto"
                                ></v-text-field>
                            </v-col>
                            <v-col md="6" cols="12">
                                <v-text-field
                                filled
                                prepend-inner-icon="mdi-clock-outline"
                                label="Closing Time"
                                v-model="election.time_close"
                                hide-details="auto"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col md="6" cols="12">
                        <v-row wrap>
                            <v-col md="12" cols="12">
                                <div class="feat-img mx-auto">
                                    <div class="d-flex justify-center align-center flex-column" style="height:100%;">
                                        <v-icon size="60">mdi-file-image</v-icon>
                                        <v-toolbar-title>
                                            Feature image or cover photo (landscape)
                                        </v-toolbar-title>
                                        <v-btn elevation="0">
                                            Browse file
                                        </v-btn>
                                    </div>
                                </div>
                            </v-col>
                            <v-col md="12" cols="12">
                                <v-text-field
                                filled
                                placeholder="Ex. 2022-2023"
                                label="School year"
                                v-model="election.school_year"
                                hide-details="auto"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-col>
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
        election: {
            type: Object,
            default: () => {}
        }
    }
}
</script>
<style scoped>
.feat-img{
    width: 100%;
    height: 250px;
    border: 2px dashed grey;
}
</style>