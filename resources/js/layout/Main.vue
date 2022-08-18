<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      color="brown lighten-3"
      class="elevation-2"
    >
        <side-bar></side-bar>
    </v-navigation-drawer>

    <v-app-bar app color="brown darken-1" dark>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <Header></Header>
    </v-app-bar>

    <v-main style="background:#EFEBE9;">
        <v-container fluid class="pa-4">
            <router-view></router-view>
        </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from './sidebar.vue'
import Header from './header.vue'
export default {
    components: {
    SideBar,
    Header
},
    data: () => ({
        drawer: null
    }),
}
</script>