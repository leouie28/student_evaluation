<template>
  <v-app id="inspire">
    <div v-if="!fetching">
      <Student v-if="auth==4"></Student>
      <Teacher v-else-if="auth==3"></Teacher>
      <Admin v-else-if="auth==1"></Admin>
      <Login v-else></Login>
    </div>
    <v-overlay :value="fetching">
      <v-progress-circular
        color="primary"
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
  </v-app>
</template>
<script>
import { http, auth, Login, Admin, Teacher, Student } from "./index"
export default {
    components: {
        Admin,
        Teacher,
        Student,
        Login,
    },
    data: () => ({
        fetching: true,
        auth: false,
        specialRoute: false,
    }),
    created() {
      
    },
    methods: {
      checkRole() {
        //role: admin = 1, coordinator = 2, teacher = 3, student = 4
        let type = sessionStorage.getItem('_type')
        if(type) {
            this.auth = type
            this.fetching = false
        }else {
            let middleware = this.getMiddleware(this.$route.path)
            this.checkAuth(middleware)
        }
      },
      checkAuth(val) {
        console.log(val)
        this.fetching = false
      },
      getMiddleware(path) {
          let middleware = path.split("/")
          return middleware[1]
      },
      checkRoute() {
          let route = this.$route
          if(route.name=='student-election') {
              return true
          }
      },
      logout() {
          axios.get(`/web/logout`).then(({data})=>{
              this.auth = false
              localStorage.role = 0
          }).finally(()=>{
              this.$router.push({name:'login'})
          })
      }
    },
    watch: {
      // auth(val) {
      //     if(val){
      //         localStorage.role = val
      //     }
      // },
      $route (to, from){
          this.checkRole()
      },
    }
}
</script>