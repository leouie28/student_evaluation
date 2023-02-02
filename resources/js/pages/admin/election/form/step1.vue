<template>
    <div>
        <v-card outlined class="mb-4">
            <v-card-text>
                <v-row>
                    <v-col md="12" cols="12" v-if="updating">
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
                    </v-col>
                    <v-col md="6" cols="12">
                        <v-row wrap>
                            <v-col md="12" cols="12">
                                <v-text-field
                                :filled="readonly?false:true"
                                :readonly="readonly"
                                label="Name of the election"
                                placeholder="Ex. SSG Election"
                                v-model="election.name"
                                hide-details="auto"
                                ></v-text-field>
                            </v-col>
                            <v-col md="12" cols="12">
                                <v-textarea
                                :filled="readonly?false:true"
                                :readonly="readonly"
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
                                    :filled="readonly?false:true"
                                    prepend-inner-icon="mdi-calendar"
                                    label="Opening Date"
                                    readonly
                                    v-bind="!readonly ? attrs : ''"
                                    v-on="!readonly ? on : ''"
                                    v-model="election.date_open"
                                    hide-details="auto"
                                    ></v-text-field>
                                    </template>
                                    <v-date-picker
                                    no-title
                                    :min="moment().format('YYYY-MM-DD')"
                                    :max="election.date_close"
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
                                    :filled="readonly?false:true"
                                    prepend-inner-icon="mdi-clock-outline"
                                    label="Opening Time"
                                    readonly
                                    v-bind="!readonly ? attrs : ''"
                                    v-on="!readonly ? on : ''"
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
                                    :filled="readonly?false:true"
                                    prepend-inner-icon="mdi-calendar"
                                    label="CLosing Date"
                                    readonly
                                    v-bind="!readonly ? attrs : ''"
                                    v-on="!readonly ? on : ''"
                                    v-model="election.date_close"
                                    hide-details="auto"
                                    ></v-text-field>
                                    </template>
                                    <v-date-picker
                                    no-title
                                    :min="election.date_open"
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
                                    :filled="readonly?false:true"
                                    prepend-inner-icon="mdi-clock-outline"
                                    label="Closing Time"
                                    readonly
                                    v-bind="!readonly ? attrs : ''"
                                    v-on="!readonly ? on : ''"
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
                                <div class="feat-img mx-auto pa-2" @click="!readonly ? $refs.file_input.click() : false">
                                    <input type="file" class="hide" ref="file_input" accept=".jpeg,.png,.jpg" @change="onFileChange($event.target.files)">
                                    <div v-if="!election.image" class="d-flex justify-center align-center flex-column" style="height:100%;">
                                        <v-icon size="60">mdi-file-image</v-icon>
                                        <v-toolbar-title>
                                            Feature image or cover photo (landscape)
                                        </v-toolbar-title>
                                        <v-btn elevation="0" @click.stop="!readonly ? $refs.file_input.click() : false">
                                            Browse file
                                        </v-btn>
                                    </div>
                                    <v-img
                                    v-if="election.image"
                                    alt="Feature image"
                                    position="center center"
                                    max-height="100%"
                                    max-width="100%"
                                    :src="election.image">
                                        <v-btn small v-if="election.image && !readonly" class="ma-n3" absolute top right color="primary">
                                            Change
                                        <v-icon class="ml-2">mdi-pencil</v-icon>
                                    </v-btn>
                                    </v-img>
                                    
                                </div>
                            </v-col>
                            <v-col md="6" cols="12">
                                <v-text-field
                                :filled="readonly?false:true"
                                placeholder="Ex. 2022-2023"
                                label="School year"
                                :readonly="readonly"
                                v-model="election.school_year"
                                hide-details="auto"
                                ></v-text-field>
                            </v-col>
                            <v-col md="6" cols="12">
                                <v-text-field
                                :filled="readonly?false:true"
                                placeholder="Ex. SSG-ELECTION-2022"
                                label="Election Code (no spacing)"
                                :readonly="readonly"
                                v-model="election.code"
                                @click:append="election.code = generateCode()"
                                append-icon="mdi-reload"
                                hide-details="auto"
                                ></v-text-field>
                            </v-col>
                            <v-col md="12" cols="12" v-if="!updating">
                                <v-alert
                                outlined
                                type="warning"
                                color="brown"
                                prominent
                                border="left">
                                    Note* Election cannot be edited once it open to the voters.
                                </v-alert>
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
        now: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        readonly: false,
        updating: false,
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
    created() {
        if(localStorage._show){
            console.log(localStorage._show)
            if(localStorage._show=="1"){
                this.readonly = true
                this.updating = true
            }
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
        generateCode() {
            let length = 8
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            let counter = 0;
            while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
            }
            return result;
        }
    }
}
</script>
<style scoped>
.feat-img{
    width: 100%;
    /* min-height: ; */
    border: 2px dashed grey;
}
</style>