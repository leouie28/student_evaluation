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
                                <v-menu
                                    v-model="date_open_menu"
                                    :close-on-content-click="false"
                                    :nudge-right="40"
                                    transition="scale-transition"
                                    offset-y
                                    min-width="auto"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                    filled
                                    prepend-inner-icon="mdi-calendar"
                                    label="Opening Date"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    v-model="election.date_open"
                                    hide-details="auto"
                                    ></v-text-field>
                                    </template>
                                    <v-date-picker
                                    no-title
                                    v-model="election.date_open"
                                    @input="date_open_menu = false"
                                    ></v-date-picker>
                                </v-menu>
                            </v-col>
                            <v-col md="6" cols="12">
                                <v-menu
                                    ref="open"
                                    v-model="time_open_menu"
                                    :close-on-content-click="false"
                                    :nudge-right="40"
                                    :return-value.sync="election.time_open"
                                    transition="scale-transition"
                                    offset-y
                                    max-width="290px"
                                    min-width="290px"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                    filled
                                    prepend-inner-icon="mdi-clock-outline"
                                    label="Opening Time"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    v-model="election.time_open"
                                    hide-details="auto"
                                    ></v-text-field>
                                    </template>
                                    <v-time-picker
                                    v-if="time_open_menu"
                                    v-model="election.time_open"
                                    full-width
                                    no-title
                                    @click:minute="$refs.open.save(election.time_open)"
                                    ></v-time-picker>
                                </v-menu>
                            </v-col>
                            <v-col md="6" cols="12">
                                <v-menu
                                    v-model="date_close_menu"
                                    :close-on-content-click="false"
                                    :nudge-right="40"
                                    transition="scale-transition"
                                    offset-y
                                    min-width="auto"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                    filled
                                    prepend-inner-icon="mdi-calendar"
                                    label="CLosing Date"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    v-model="election.date_close"
                                    hide-details="auto"
                                    ></v-text-field>
                                    </template>
                                    <v-date-picker
                                    no-title
                                    v-model="election.date_close"
                                    @input="date_close_menu = false"
                                    ></v-date-picker>
                                </v-menu>
                            </v-col>
                            <v-col md="6" cols="12">
                                <v-menu
                                    ref="close"
                                    v-model="time_close_menu"
                                    :close-on-content-click="false"
                                    :nudge-right="40"
                                    :return-value.sync="election.time_close"
                                    transition="scale-transition"
                                    offset-y
                                    max-width="290px"
                                    min-width="290px"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                    filled
                                    prepend-inner-icon="mdi-clock-outline"
                                    label="Closing Time"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    v-model="election.time_close"
                                    hide-details="auto"
                                    ></v-text-field>
                                    </template>
                                    <v-time-picker
                                    v-if="time_close_menu"
                                    v-model="election.time_close"
                                    full-width
                                    no-title
                                    @click:minute="$refs.close.save(election.time_close)"
                                    ></v-time-picker>
                                </v-menu>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col md="6" cols="12">
                        <v-row wrap>
                            <v-col md="12" cols="12">
                                <div class="feat-img mx-auto pa-2" @click="$refs.file_input.click()">
                                    <input type="file" class="hide" ref="file_input" accept=".jpeg,.png,.jpg" @change="onFileChange($event.target.files)">
                                    <div v-if="!election.image" class="d-flex justify-center align-center flex-column" style="height:100%;">
                                        <v-icon size="60">mdi-file-image</v-icon>
                                        <v-toolbar-title>
                                            Feature image or cover photo (landscape)
                                        </v-toolbar-title>
                                        <v-btn elevation="0" @click.stop="$refs.file_input.click()">
                                            Browse file
                                        </v-btn>
                                    </div>
                                    <v-img
                                    v-if="election.image"
                                    alt="Feature image"
                                    position="center center"
                                    max-height="100%"
                                    max-width="100%"
                                    :src="election.image"
                                    ></v-img>
                                    <v-btn v-if="election.image" class="ma-4" absolute top right color="primary">
                                        Change
                                        <v-icon class="ml-2">mdi-pencil</v-icon>
                                    </v-btn>
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
        date_open_menu: false,
        time_open_menu: false,
        date_close_menu: false,
        time_close_menu: false,
        feat_img: null,
    }),
    props: {
        election: {
            type: Object,
            default: () => {}
        }
    },
    methods: {
        async onFileChange(file) {
            let imageFile = file[0];
            let temp = {};
            if (file.length > 0) {
                if (!imageFile.type.match("image.*")) {
                    alert("Please choose an image file")
                } else {
                    let imageURL = URL.createObjectURL(imageFile);
                    this.election.image = await this.createImageBase64(imageFile);
                }
            }
        },
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