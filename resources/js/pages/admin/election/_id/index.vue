<template>
    <div class="elevation-4 pt-1 d-flex">
        <v-navigation-drawer
        color="brown lighten-2"
        dark
        class="accent-4"
        width="180" 
        height="90vh" 
        permanent>
            <v-list dense nav>
                <v-list-item>
                    <v-btn block>
                        <v-icon class="mr-2">mdi-backspace</v-icon>
                        Return
                    </v-btn>
                </v-list-item>
                <v-divider class="py-1 my-1"></v-divider>
                <template v-for="menu in menus">
                    <v-list-item
                    :key="menu.text"
                    link
                    @click="$router.push({name: menu.link}).catch(() => {})"
                    :class="childNavAct == menu.link ? 'act' : ''"
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
        <div class="route">
            <transition name="slide-y-reverse-transition" mode="out-in">
                <router-view :key="$route.path"></router-view>
            </transition>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            e1: 1,
            menus: [
                {text: 'Status', icon: 'chart-bar-stacked', link: 'admin-election-status'},
                {text: 'Details', icon: 'information-outline', link: 'admin-election-details'},
                {text: 'Votes', icon: 'tray-full', link: 'admin-election-votes'},
            ]
        }
    },
    computed: {
        childNavAct() {
            let url = this.$route.name
            return url
        }
    }
}
</script>
<style scoped>
.route{
    width: calc(100% - 180px);
    max-height: 90vh !important;
    overflow: auto;
}
.act{
    background: #6D4C41 !important;
}
</style>