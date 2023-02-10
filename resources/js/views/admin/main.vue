<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
        <side-bar @logout="$emit('logout')"></side-bar>
    </v-navigation-drawer>

    <Header @toggle="toggle"></Header>

    <v-main>
        <v-container fluid class="pa-0 grey lighten-2" style="min-height:90vh;">
            <transition name="slide-y-reverse-transition" mode="out-in">
              <router-view></router-view>
            </transition>
        </v-container>
    </v-main>
  </div>
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