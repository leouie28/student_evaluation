<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      class="elevation-2"
    >
        <side-bar></side-bar>
    </v-navigation-drawer>

    <Header></Header>

    <v-main>
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