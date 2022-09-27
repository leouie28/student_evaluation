<template>
    <div>
        <v-app-bar
        app
        flat
        elevation="2">
            <!-- <div class="text-center mx-auto"> -->
            <div class="d-flex justify-space-between align-center w-100">
                <span>
                    <v-avatar>
                        <v-icon>mdi-account-circle</v-icon>
                    </v-avatar>
                    CKC Voting System
                </span>
                <v-menu offset-y bottom left>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        elevation="0"
                        large rounded
                        v-bind="attrs"
                        v-on="on">
                            <v-avatar
                            size="32">
                            <v-icon>mdi-account-school</v-icon>
                            </v-avatar>
                            <!-- <span class="ml-2">My Name</span> -->
                            <v-icon class="ml-n2">mdi-chevron-down</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-account</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>Account</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item @click="$emit('logout')">
                            <v-list-item-icon>
                                <v-icon>mdi-logout-variant</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>Logout</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
        </v-app-bar>
        <v-main>
            <v-container fluid class="pa-2 grey lighten-5" style="min-height:90vh;">
                <transition name="slide-y-reverse-transition" mode="out-in">
                    <router-view></router-view>
                </transition>
            </v-container>
        </v-main>
    </div>
</template>