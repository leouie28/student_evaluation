<template>
    <div class="d-flex justify-center px-10 align-center" style="height:100vh;">
        <v-card tile elevation="4" max-width="400" class="mx-auto px-5 py-4">
            <v-card-text>
                <div class="text-center mb-8">
                    <v-avatar color="primary" size="170" class="mx-auto">
                        <v-img
                        alt="School Logo"
                        src="/images/system/logo.png"
                        ></v-img>
                    </v-avatar>
                    <h4 class="mt-3 cyan--text">Student Evaluation</h4>
                </div>
                <v-row>
                    <v-col cols="12" md="12">
                        <v-text-field
                        hide-details="auto"
                        dense
                        v-model="payload.username"
                        :rules="rule"
                        color="cyan"
                        placeholder="User Id"
                        required
                        prepend-inner-icon="mdi-account"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12">
                        <v-text-field
                        v-on:keyup.enter="login"
                        hide-details="auto"
                        dense
                        v-model="payload.password"
                        :rules="rule"
                        required
                        color="cyan"
                        placeholder="Password"
                        type="password"
                        prepend-inner-icon="mdi-lock"
                        ></v-text-field>
                    </v-col>
                    <div v-if="message" class="error--text text-capitalize text-center">
                        {{message}}
                    </div>
                    <v-col cols="12" md="12">
                        <v-btn
                        tile
                        block
                        large
                        dark
                        @click="login"
                        color="cyan">
                            Login
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
import auth from "@/services/authService"
export default {
    data: () => ({
        rule: [
            v => !! v || 'This field is required'
        ],
        payload: {
            username: '',
            password: '',
        },
        message: '',
    }),
    methods: {
        async login() {
            if(!this.payload.user_id || !this.payload.password){
                alert('Please fillup the importan fields')
            }else{

              let res = await auth.loginApi(this.creds).catch(error => {
                console.log({error})
              })

                // axios.post('/web/login', this.payload).then(({data}) => {
                //     if(data.user){
                //         if(data.role=='admin'){
                //             this.$router.push({path: '/admin/status'})
                //         }else if(data.role=='student'){
                //             if(this.$route.name=='student-election') {
                //                 location.reload()
                //             }
                //             this.$router.push({path: '/home'})
                //         }
                //     }else{
                //         this.message = data.message
                //     }
                // })
            }
        }
    }
}
</script>