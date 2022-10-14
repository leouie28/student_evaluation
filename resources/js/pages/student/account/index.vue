<template>
    <div>
        <v-card>
            <v-card-text>
                <v-toolbar-title class="d-flex justify-space-between align-center">
                    <div>
                        Account
                        <!-- <v-icon class="ml-1">mdi-cloud-print-outline</v-icon> -->
                    </div>
                    <v-btn icon color="primary">
                        <v-icon>mdi-dots-vertical-circle-outline</v-icon>
                    </v-btn>
                </v-toolbar-title>
                <div>
                    <v-row class="mt-1">
                        <v-col cols="12">
                            <v-text-field
                            label="Student Id"
                            disabled
                            v-model="profile.student_id"
                            filled
                            dense
                            hide-details="auto"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                            label="Name"
                            v-model="profile.name"
                            readonly
                            filled
                            dense
                            hide-details="auto"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </div>
            </v-card-text>
        </v-card>
        <v-card class="mt-4">
            <v-card-text>
                <v-toolbar-title class="d-flex justify-space-between align-center">
                    <div>
                        Your recent activity
                        <!-- <v-icon class="ml-1">mdi-cloud-print-outline</v-icon> -->
                    </div>
                    <!-- <v-btn icon color="primary">
                        <v-icon>mdi-dots-vertical-circle-outline</v-icon>
                    </v-btn> -->
                </v-toolbar-title>
                <div>
                    <v-timeline align-top dense>
                        <v-timeline-item
                        small
                        v-for="act in activities"
                        :key="act.id"
                        color="brown">
                            <span class="">2022/02/10 Voted to Ssg Election</span><br>
                            <v-divider></v-divider>
                        </v-timeline-item>
                    </v-timeline>
                </div>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: true,
            profile: {},
            activities: []
        }
    },
    created() {
        this.getProfile()
    },
    methods: {
        getProfile() {
            axios.get(`/student-api/profile`).then(({data}) => {
                this.profile = data.account
                this.activities = data.activity
            })
        }
    }
}
</script>