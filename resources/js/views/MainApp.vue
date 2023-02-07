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
        checkAuth() {
            console.log(this.checkRoute())
            axios.get(`/web/check-auth`).then(({data})=>{
                this.auth = data
                console.log(data,'auth')
            }).finally(()=>{
                setTimeout(() => {
                    this.fetching = false
                },500)
            })
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