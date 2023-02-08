<template>
    <v-app v-if="!fetching" id="inspire">
      <Evaluation></Evaluation>
        <!-- <Login v-if="!auth"></Login>
        <Student @logout="logout" v-else-if="auth==2"></Student>
        <Admin @logout="logout" v-else-if="auth==1"></Admin> -->
    </v-app>
</template>
<script>
import Evaluation from "../components/evaluation/form"
import Login from '../pages/landing/login.vue'
import Student from './student/main.vue'
import Admin from './admin/main.vue'
import http from "../services/httpConfig.js"
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
        let res = null
        try {
            res = await http.api.get('user/user/test')
        } catch (error) {
            console.log(error.message)
        }
        console.log(res)
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
        auth(val) {
            if(val){
                localStorage.role = val
            }
        },
        $route (to, from){
            this.checkAuth()
        },
    }
}
</script>
<style lang="css">
    @import url('../../css/app.css');
</style>