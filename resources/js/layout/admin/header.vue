<template>
    <div>
        <v-app-bar app elevate-on-scroll>
            <v-app-bar-nav-icon @click="$emit('toggle')"></v-app-bar-nav-icon>
            <v-toolbar-title class="mt-1">CKC Voting System</v-toolbar-title>
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

        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
        
    </div>
</template>
<script>
export default {
    methods: {
        
    }
}
</script>