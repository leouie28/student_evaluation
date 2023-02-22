<template>
    <div class="pa-2">
        <v-card elevation="0" class="pa-2">
            <v-card-title class="d-flex justify-space-between align-center">
                <span>New Evaluation Indicators</span>
                <v-btn color="secondary" class="text-capitalize">
                    <v-icon class="mr-1">mdi-chevron-left-circle</v-icon>
                    Back
                </v-btn>
            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="5">
                        <span>Year of evaluation</span>
                        <v-text-field
                            dense
                            filled
                            v-model="year"
                            label="Year"
                            placeholder="Ex. 2023"
                            hide-details=""
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <span>Indicators</span>
                        <v-row wrap dense>
                            <template v-for="ind in indicators">
                                <v-col cols="3" :key="ind.order">
                                    <v-sheet elevation="4" class="pa-3" rounded>
                                        <div
                                            class="d-flex justify-space-between align-center"
                                        >
                                            <v-toolbar-title
                                                >Indicator
                                                {{ ind.order }}</v-toolbar-title
                                            >
                                            <v-btn
                                                icon
                                                color="secondary"
                                                @click="remove(ind)"
                                            >
                                                <v-icon>mdi-close</v-icon>
                                            </v-btn>
                                        </div>
                                        <v-textarea
                                            dense
                                            height="100"
                                            full-width
                                            filled
                                            v-model="ind.label"
                                            label="Indicator label"
                                            class="my-4"
                                            hide-details=""
                                        ></v-textarea>
                                        <v-select
                                            dense
                                            full-width
                                            filled
                                            :items="types"
                                            v-model="ind.type"
                                            item-text="text"
                                            item-value="value"
                                            label="Indicator type"
                                            class="my-4"
                                            hide-details=""
                                        ></v-select>
                                    </v-sheet>
                                </v-col>
                            </template>
                            <v-col
                                cols="3"
                                align-self="center"
                                class="py-16 text-center"
                            >
                                <v-btn outlined @click="addIndicator()">
                                    <span class="text-capitalize"
                                        >Add Another Indicator</span
                                    >
                                    <v-icon class="ml-1">mdi-plus</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="secondary">
                    <span class="text-capitalize font-weight-bold">Reset</span>
                </v-btn>
                <v-btn color="warning" @click="save()">
                    <span class="text-capitalize font-weight-bold"
                        >Save Evaluation Indicator</span
                    >
                </v-btn>
            </v-card-actions>
        </v-card>
        <Alert :data="alert_data"></Alert>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data: () => ({
        year: "",
        types: [
            { text: "Radio Button", value: "radio_button" },
            { text: "Text Field", value: "text_field" },
        ],
        indicators: [
            {
                order: 1,
                label: "",
                type: "radio_button",
            },
        ],
    }),
    methods: {
        save() {
            let payload = {
                year: this.year,
                indicators: this.indicators,
            };
            axios.post(`/web-admin/indicator`, payload).then(({ data }) => {
                console.log(data);
            });
        },
        addIndicator() {
            let counter = this.indicators.length;
            this.indicators.push({
                order: counter + 1,
                label: "",
                type: "radio_button",
            });
        },
        remove(ind) {
            this.indicators = this.indicators.filter(
                (val) => val.order != ind.order
            );
            let count = 0;
            this.indicators.forEach((elem) => {
                count++;
                elem.order = count;
            });
        },
    },
};
</script>
