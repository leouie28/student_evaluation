<template>
    <div class="pa-2">
        <div class="d-flex justify-space-between align-center w-full">
            <div>
                <h4>Table Name</h4>
            </div>
            <div class="d-flex justify-center align-center flex-row">
                <div>
                    <v-text-field
                    flat
                    dense
                    placeholder="Search ..."
                    hide-details=""
                    append-icon="mdi-magnify"
                    ></v-text-field>
                </div>
                <v-btn>Reload</v-btn>
                <v-btn>Create New</v-btn>
            </div>
        </div>
        <div class="d-flex">
            <div style="width: 100%">
                <v-row dense>
                    <v-col cols="2">
                        <v-select
                        label="Gender"
                        solo
                        dense
                        hide-details=""
                        ></v-select>
                    </v-col>
                    <v-col cols="2">
                        <v-select
                        label="Department"
                        solo
                        dense
                        hide-details=""
                        ></v-select>
                    </v-col>
                    <v-col cols="2">
                        <v-select
                        label="Grade Year"
                        solo
                        dense
                        hide-details=""
                        ></v-select>
                    </v-col>
                    <v-col cols="2">
                        <v-btn>Filter</v-btn>
                    </v-col>
                </v-row>
            </div>
        </div>
    </div>
</template>