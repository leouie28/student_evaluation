import http from "./httpConfig"

const auth = {}

auth.loginApi = (creds) => {
  try {
    return http.plain.post('/login', creds)
  } catch (error) {
    return error
  }
}

auth.check = async () => {
  http.api.get('')
}

export default auth;