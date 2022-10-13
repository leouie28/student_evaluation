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
      <v-list class="mt-5">
        <v-list-item-group>
          <v-list-item
          v-for="navs in nav"
          :key="navs.text"
          @click="$router.push({name: navs.url_name}).catch(() => {})"
          :class="getUrl == navs.url_name ? 'active-nav' : '' ">
            <v-list-item-icon
            class="ml-3 mr-4">
              <v-icon>mdi-{{ navs.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ navs.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <div>
        <v-footer absolute color="brown">
            <v-btn
            block
            elevation="2"
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
        nav: [
            {
                text: 'Status',
                icon: 'monitor-dashboard',
                url_name: 'admin-status',
            },
            {
                text: 'Announcement',
                icon: 'bullhorn-outline',
                url_name: 'admin-announcement',
            },
            {
                text: 'Election',
                icon: 'printer-outline',
                url_name: 'admin-election',
            },
            // {
            //     text: 'Votes',
            //     icon: 'note-text-outline',
            //     url_name: 'vote',
            // },
            // {
            //     text: 'Candidates',
            //     icon: 'account-group',
            //     url_name: 'candidate',
            // },
            {
                text: 'Voters',
                icon: 'account-group-outline',
                url_name: 'admin-voter',
            },
            {
                text: 'Party Group',
                icon: 'flag-outline',
                url_name: 'admin-partylist',
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
</style>