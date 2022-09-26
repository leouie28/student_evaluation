<template>
    <div>
        <v-card class="mb-2 cus-border-top">
            <v-card-title>SSG Election 2022</v-card-title>
            <v-divider class="my-0"></v-divider>
            <v-card-text>
                You are running Vue in development mode.
                Make sure to turn on production mode when deploying for production.
                See more tips at https://vuejs.org/guide/deployment.html
            </v-card-text>
        </v-card>
        <v-card class="mb-2">
            <v-card-text>
                <v-toolbar-title>President</v-toolbar-title>
                <v-radio-group>
                <v-radio
                v-for="n in 2"
                :key="n"
                :label="`Radio ${n}`"
                :value="n"
                ></v-radio>
                </v-radio-group>
            </v-card-text>
        </v-card>
        <v-card class="mb-2">
            <v-card-text>
                <v-toolbar-title>Vice President</v-toolbar-title>
                <v-radio-group>
                <v-radio
                v-for="n in 2"
                :key="n"
                :label="`Radio ${n}`"
                :value="n"
                ></v-radio>
                </v-radio-group>
            </v-card-text>
        </v-card>
        <div class="text-right">
            <v-btn color="secondary" outlined>Reset Form</v-btn>
            <v-btn color="primary">Submit my vote</v-btn>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        console.log('test123')
    }
}
</script>