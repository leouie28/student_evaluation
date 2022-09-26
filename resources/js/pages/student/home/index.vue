<template>
    <div>
        <v-card class="mb-2">
            <v-card-text>
                <v-toolbar-title class="d-flex justify-space-between align-center">
                    <div>
                        Announcement
                        <v-icon class="ml-1">mdi-bullhorn-outline</v-icon>
                    </div>
                    <v-btn icon color="primary">
                        <v-icon>mdi-refresh</v-icon>
                    </v-btn>
                </v-toolbar-title>
                <div class="pl-4">
                    <div><a href="#">#ELECTION ANNOUNCEMENT</a></div>
                    <div><a href="#">#Announcement one</a></div>
                </div>
            </v-card-text>
        </v-card>
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
                <v-card
                elevation="0"
                class="mx-auto my-3 elec-card"
                max-width="374">
                    <v-img
                    height="150"
                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    ></v-img>
                    <v-card-title>SSG Election 2022</v-card-title>
                    <v-card-text>
                        <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
                        <div class="text-left">
                            <div>
                                <span class="primary--text">
                                    <v-icon small color="primary">mdi-calendar</v-icon>
                                    Opening: 02-10-2022 10:00am
                                </span>
                            </div>
                            <span>
                                <span class="red--text">
                                    <v-icon small color="red">mdi-calendar</v-icon>
                                    Closing: 02-10-2022 10:00am
                                </span>
                            </span>
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                        disabled
                        block
                        color="success"
                        outlined>
                            Vote Now
                            <v-icon class="ml-1">mdi-checkbox-outline</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-card-text>
        </v-card>
    </div>
</template>