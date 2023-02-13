import http from "../services/httpConfig.js"
import auth from "../services/authService"
import Admin from "./admin/main.vue"
import Teacher from "./teacher"
import Student from "./student"
import Login from "../pages/auth/login.vue"

export {
  http,
  auth,
  Admin,
  Teacher,
  Student,
  Login
}