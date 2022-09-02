<template>
    <div class="elevation-4 d-flex">
        <v-navigation-drawer
        color="grey"
        dark
        class="accent-4 pt-3"
        width="200" 
        height="80vh" 
        permanent>
            <v-list dense nav>
                <template v-for="menu in menus">
                    <v-list-item
                    :key="menu.text"
                    link
                    >
                    <v-list-item-icon>
                        <v-icon>mdi-{{menu.icon}}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{menu.text}}</v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list>
        </v-navigation-drawer>
        <div class="route pa-4">
            <v-stepper v-model="e1" elevation="0">
                <v-stepper-header>
                <v-stepper-step
                    complete
                    editable
                    step="1"
                >
                    Name of step 1
                </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step
                    :complete="e1 > 2"
                    step="2"
                >
                    Name of step 2
                </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step step="3">
                    Name of step 3
                </v-stepper-step>
                </v-stepper-header>

                <v-stepper-items>
                <v-stepper-content step="1">
                    <v-card
                    class="mb-12"
                    color="grey lighten-1"
                    height="200px"
                    ></v-card>

                    <v-btn
                    color="primary"
                    @click="e1 = 2"
                    >
                    Continue
                    </v-btn>

                    <v-btn text>
                    Cancel
                    </v-btn>
                </v-stepper-content>

                <v-stepper-content step="2">
                    <v-card
                    class="mb-12"
                    color="grey lighten-1"
                    height="200px"
                    ></v-card>

                    <v-btn
                    color="primary"
                    @click="e1 = 3"
                    >
                    Continue
                    </v-btn>

                    <v-btn text>
                    Cancel
                    </v-btn>
                </v-stepper-content>

                <v-stepper-content step="3">
                    <v-card
                    class="mb-12"
                    color="grey lighten-1"
                    height="200px"
                    ></v-card>

                    <v-btn
                    color="primary"
                    @click="e1 = 1"
                    >
                    Continue
                    </v-btn>

                    <v-btn text>
                    Cancel
                    </v-btn>
                </v-stepper-content>
                </v-stepper-items>
            </v-stepper>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            e1: 1,
            menus: [
                {text: 'Details', icon: 'information-outline', link: ''},
                {text: 'Status', icon: 'chart-bar-stacked', link: ''},
                {text: 'Votes', icon: 'tray-full', link: ''},
            ]
        }
    },
}
</script>
<style scoped>
.route{
    width: calc(100% - 200px);
}
</style>