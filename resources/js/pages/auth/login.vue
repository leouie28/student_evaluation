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
                      :disabled="loading?true:false"
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
                      :disabled="loading?true:false"
                      placeholder="Password"
                      type="password"
                      prepend-inner-icon="mdi-lock"
                      ></v-text-field>
                  </v-col>
                  <div v-if="message" class="error--text font-weight-medium text-capitalize text-center">
                      {{message}}
                  </div>
                  <v-col cols="12" md="12">
                      <v-btn
                      tile
                      block
                      large
                      dark
                      :disabled="loading?true:false"
                      @click="login"
                      color="cyan">
                          <span v-if="!loading">Login</span>
                          <v-progress-circular
                            v-else
                            indeterminate
                            width="3"
                            color="primary"
                          ></v-progress-circular>
                      </v-btn>
                  </v-col>
              </v-row>
          </v-card-text>
      </v-card>
  </div>
</template>
<script>
import auth from "@/services/authService"
import role from "@/services/roleService"
export default {
  data: () => ({
      rule: [
          v => !! v || 'This field is required'
      ],
      loading: false,
      payload: {
          username: '',
          password: '',
      },
      message: '',
  }),
  methods: {
      async login() {
        if(!this.payload.username || !this.payload.password){
            alert('Please fillup the importan fields')
        }else{

          this.message = ''
          this.loading = true
          let res = await auth.loginApi(this.payload).catch(error => {
            this.message = error?.response?.data.message
            this.loading = false
            return false
          })
          if(res) {
            sessionStorage.setItem('_type', res.data.role.id)
            if(res.data.role.name=='admin') {
                this.$router.push({path: '/admin/dashboard'})
            }
          }
        }
      }
  }
}
</script>