<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
        <side-bar></side-bar>
    </v-navigation-drawer>

    <Header @toggle="toggle"></Header>

    <v-main>
        <v-container fluid class="pa-0 grey lighten-2" style="min-height:90vh;">
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
        drawer: true
    }),
    methods: {
      toggle() {
        if(this.drawer){
          this.drawer =false
        }else{
          this.drawer = true
        }
      }
    }
}
</script>