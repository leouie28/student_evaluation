<template>
  <v-app id="inspire">
    <div v-if="!fetching">
      <Admin v-if="auth==1"></Admin>
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
import { http, auth, Login, Admin } from "./index"
export default {
    components: {
        Admin,
        // Student,
        Login,
    },
    data: () => ({
        fetching: true,
        auth: false,
        specialRoute: false,
    }),
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
        checkAuth() {

          this.fetching = false

            // let auth = await http.auth();
            // console.log(auth)
        //   http.api.get('admin/user/user/test').then(response => {
        //     console.log(response, '200')
        //   }).catch(err => {
        //     console.log(err, 'error')
        //   })

        // let user = await auth.login(creds).catch(error => {
        //   console.log(error.response.data.message)
        // })
        // console.log(user)

        // let res = null
        // try {
        //     res = await http.api.get('user/user/test')
        // } catch (error) {
        //     console.log(error.message)
        // }
        // console.log(res)
        console.log('una')
            // console.log(this.checkRoute())
            // axios.get(`/web/check-auth`).then(({data})=>{
            //     this.auth = data
            //     console.log(data,'auth')
            // }).finally(()=>{
            //     setTimeout(() => {
            //         this.fetching = false
            //     },500)
            // })
        },
        getMiddleware(path) {
            let middleware = path.split("/")
            return middleware[0]
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
<style lang="css">
    @import url('../../css/app.css');
</style>