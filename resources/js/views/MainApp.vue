<template>
    <v-app id="inspire">
        <!-- <Student @logout="logout" v-else-if="auth==2"></Student>
        <Admin @logout="logout" v-else-if="auth==1"></Admin> -->
      
      <Login></Login>

      <v-overlay :value="false">
        <v-progress-circular
          color="primary"
          indeterminate
          size="64"
        ></v-progress-circular>
      </v-overlay>
    </v-app>
</template>
<script>
import Evaluation from "../components/evaluation/form"
import Login from '../pages/auth/login.vue'
import Student from './student/main.vue'
import Admin from './admin/main.vue'
import http from "../services/httpConfig.js"
import auth from "../services/authService"
export default {
    components: {
        Admin,
        Student,
        Login,
        Evaluation,
    },
    data: () => ({
        fetching: true,
        auth: false,
        specialRoute: false,
    }),
    methods: {
        async checkAuth() {
            // let auth = await http.auth();
            // console.log(auth)
        //   http.api.get('admin/user/user/test').then(response => {
        //     console.log(response, '200')
        //   }).catch(err => {
        //     console.log(err, 'error')
        //   })
        let creds = {
          username: 'admin',
          password: '123'
        }

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
        // $route (to, from){
        //     this.checkAuth()
        // },
    }
}
</script>
<style lang="css">
    @import url('../../css/app.css');
</style>