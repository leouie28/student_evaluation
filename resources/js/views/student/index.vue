<template>
    <div>
        <v-app-bar app color="black" dark flat>
            <v-container class="py-0 fill-height">
                <v-spacer></v-spacer>
                <div class="d-flex justify-center align-center">
                    <v-btn rounded elevation="0">
                        <span
                            class="text-capitalize font-weight-medium mr-1 amber--text font-nunito"
                            >Student Name</span
                        >
                        <v-avatar size="32">
                            <v-icon>mdi-account-school</v-icon>
                        </v-avatar>
                    </v-btn>
                    <v-btn text plain class="text-capitalize">Logout</v-btn>
                    <!-- <v-btn elevation="0" large>
            <v-icon>mdi mdi-logout-variant</v-icon>
          </v-btn> -->
                </div>
            </v-container>
        </v-app-bar>

        <v-main class="grey lighten-3">
            <v-container>
                <v-breadcrumbs :items="items" large>
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
                <v-sheet
                    rounded="lg"
                    height="80vh"
                    class="d-flex justify-center align-center w-full"
                >
                    <span class="text-h1">Sample Data</span>
                </v-sheet>
            </v-container>
        </v-main>
    </div>
</template>
<script>
export default {
    data: () => ({
        items: [
            {
                text: "Year",
                disabled: false,
                href: "breadcrumbs_dashboard",
            },
            {
                text: "Month",
                disabled: false,
                href: "breadcrumbs_dashboard",
            },
            {
                text: "Subject Name",
                disabled: true,
                href: "breadcrumbs_link_1",
            },
        ],
    }),
    created() {
        axios.get("/check-auth").then(({ data }) => {
            console.log(data);
        });
    },
    methods: {},
};
</script>
