<template>
    <div>
        <v-app-bar
        app
        flat
        class="header-student"
        elevation="4">
            <div class="d-flex justify-space-between align-center w-100">
                <span @click="$router.push({path: '/home'}).catch(() => {})" style="cursor:pointer;">
                    <v-avatar size="32" class="mr-1">
                        <!-- <v-icon>mdi-account-circle</v-icon> -->
                        <v-img
                        src="/images/system/logo.png"
                        ></v-img>
                    </v-avatar>
                    CKC Voting System
                </span>
                <v-menu offset-y bottom left min-width="180">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        elevation="0"
                        large rounded
                        v-bind="attrs"
                        class="px-1 mr-1 user"
                        v-on="on">
                            <v-avatar
                            size="32">
                            <v-icon>mdi-account-school</v-icon>
                            </v-avatar>
                            <v-icon class="ml-n2">mdi-chevron-down</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item @click="$router.push({path: '/account'}).catch(() => {})">
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
        <v-main class="m-body">
            <v-container fluid class="pa-2 mx-auto student-main" style="min-height:90vh;">
                <transition name="slide-y-reverse-transition" mode="out-in">
                    <router-view class="py-2"></router-view>
                </transition>
            </v-container>
        </v-main>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<style scoped>
.m-body {
    background: #EFEBE9;
}
.student-main {
    max-width: 600px !important;
}

@media screen and (max-width: 600px) {
    .header-student {
        padding-right: 5px;
        padding-left: 10px;
    }
    .user {
        min-width: unset !important;
    }
    .v-toolbar >>> .v-toolbar__content {
        padding-right: 0 !important;
        padding-left: 0 !important;
    }
}
</style>