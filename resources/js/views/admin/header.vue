<template>
    <div>
        <v-app-bar app elevate-on-scroll>
            <v-app-bar-nav-icon @click="$emit('toggle')"></v-app-bar-nav-icon>
            <!-- <v-toolbar-title class="mt-1">CKC Voting System</v-toolbar-title> -->
            <!-- <div>
                <v-text-field
                style="width: 400px;"
                placeholder="Search ..."
                filled
                clearable
                append-icon="mdi-magnify"
                hide-details=""
                dense
                ></v-text-field>
            </div> -->
            <v-spacer></v-spacer>
            <!-- <v-btn text icon>
                <v-icon>mdi-bell</v-icon>
            </v-btn> -->
            <v-btn text class="mr-4">
                <v-avatar size="32">
                    <v-icon>mdi-account-circle</v-icon>
                </v-avatar>
                Admin
            </v-btn>
        </v-app-bar>
        
        <v-dialog persistent max-width="550" v-model="dialog1">
            <v-card>
                <v-card-title>
                    <span>Admin Account</span>
                    <v-spacer></v-spacer>
                    <v-btn>Edit <v-icon>mdi-pencil</v-icon></v-btn>
                </v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col cols="12" md="12">
                            <v-text-field
                            filled
                            label="Username"
                            hide-details="auto"
                            disabled
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="12">
                            <v-text-field
                            filled
                            label="Old Password"
                            hide-details="auto"
                            readonly
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="12">
                            <v-text-field
                            filled
                            label="New Password"
                            hide-details="auto"
                            readonly
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-dialog>

        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
        
    </div>
</template>
<script>
export default {
    data: () => ({
        dialog1: false,
    }),
    methods: {
        
    }
}
</script>