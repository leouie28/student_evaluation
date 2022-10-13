<template>
    <div class="d-flex justify-center px-10 align-center" style="height:100vh;">
        <v-card rounded="lg" elevation="4" max-width="400" class="mx-auto py-4">
            <v-card-text>
                <div class="text-center mb-8">
                    <v-avatar size="150" class="mx-auto">
                        <v-img
                        alt="School Logo"
                        src="https://picsum.photos/500/300?image=40"
                        ></v-img>
                    </v-avatar>
                </div>
                <v-row>
                    <v-col cols="12" md="12">
                        <v-text-field
                        outlined
                        hide-details="auto"
                        dense
                        v-model="payload.user_id"
                        :rules="rule"
                        color="brown"
                        placeholder="Student Id"
                        required
                        prepend-inner-icon="mdi-account"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12">
                        <v-text-field
                        outlined
                        hide-details="auto"
                        dense
                        v-model="payload.password"
                        :rules="rule"
                        required
                        color="brown"
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
                        block
                        large
                        dark
                        @click="login"
                        color="brown">
                            Login
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
export default {
    data: () => ({
        rule: [
            v => !! v || 'This field is required'
        ],
        payload: {
            user_id: '',
            password: '',
        },
        message: '',
    }),
    methods: {
        login() {
            if(!this.payload.user_id || !this.payload.password){
                alert('Please fillup the importan fields')
            }else{
                axios.post('/web/login', this.payload).then(({data}) => {
                    if(data.user){
                        if(data.role=='admin'){
                            this.$router.push({path: '/admin/status'})
                        }else if(data.role=='student'){
                            this.$router.push({path: '/home'})
                        }
                    }else{
                        this.message = data.message
                    }
                })
            }
        }
    }
}
</script>