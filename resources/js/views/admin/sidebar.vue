<template>
    <div>
      <div style="height:150px" class="text-center">
          <v-img
          class="text-center mx-auto my-4" 
          height="170"
          width="170"
          src="/images/system/logo.png">
          </v-img>
      </div>

      <v-list class="mt-5" dark dense nav>
        <template v-for="nav in navs" no-action>
          <v-list-group
          v-if="nav.items.length > 0"
          :key="nav.title"
          v-model="nav.active"
          :prepend-icon="nav.icon"
          no-action
          >
            <template v-slot:activator>
                <v-list-item-content>
                    <v-list-item-title
                        v-text="nav.title"
                    ></v-list-item-title>
                </v-list-item-content>
            </template>

            <v-list-item
                v-for="child in nav.items"
                :key="child.title"
            >
                <v-list-item-content>
                    <v-list-item-title
                        v-text="child.title"
                    ></v-list-item-title>
                </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else :key="nav.title">
              <v-list-item-icon>
                  <v-icon small>{{ nav.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-title>{{ nav.title }}</v-list-item-title>
          </v-list-item>
      </template>
      </v-list>

      <!-- <v-list class="mt-5" dark>
          <v-list-item-group>
            <v-list-item
            :key="nav.text"
            @click="$router.push({name: nav.url_name}).catch(() => {})"
            :class="getUrl == nav.url_name ? 'active-nav' : '' ">
              <v-list-item-icon
              class="ml-3 mr-4">
                <v-icon>mdi-{{ nav.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ nav.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
      </v-list> -->

      <div>
        <v-footer absolute color="grey darken-3">
            <v-btn
            block
            elevation="2"
            small
            color="brown lighten-4"
            @click="$emit('logout')"
            >
                <v-icon>mdi-logout-variant</v-icon>
                Logout
            </v-btn>
        </v-footer>
      </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        navs: [
            {
                title: 'Dashboard',
                active: false,
                items: [],
                icon: 'mdi-devices',
                path: 'admin-status',
            },
            {
                title: 'Evaluation',
                active: false,
                items: [],
                icon: 'mdi-file-sign',
                path: 'admin-status',
            },
            {
                title: "Group Intity",
                active: true,
                icon: "mdi-group or-small",
                items: [
                  { title: "Department" },
                  { title: "Grade/Class" },
                  { title: "Section" },
                  { title: "Subject" },
                ],
                path: "",
            },
            {
                title: 'Students',
                active: false,
                items: [],
                icon: 'mdi-account-school',
                path: 'admin-status',
            },
            {
                title: "Faculties",
                active: false,
                icon: "mdi-account-group-outline or-small",
                items: [
                  { title: "Admin" },
                  { title: "Coordinator" },
                  { title: "Teacher" },
                ],
                path: "",
            },
        ]
    }),
    methods: {
        
    },
    computed: {
        getUrl() {
            let url = this.$route.fullPath
            let path = url.split('/')
            return path[1]+'-'+path[2]
        }
    }
}
</script>

<style scope>
.active-nav .v-icon, .active .v-list-item__title{
  color: #EFEBE9 !important;
}
.active-nav{
  background: #8D6E63 !important;
  color: #EFEBE9 !important;
}
.v-application--is-ltr .v-list-item__icon {
  margin-right: 10px !important;
}
.v-application .or-small {
  font-size: 16px !important;
}
.v-application--is-ltr .v-list--dense.v-list--nav .v-list-group--no-action>.v-list-group__items>.v-list-item {
  padding-left: 60px !important;
}
</style>