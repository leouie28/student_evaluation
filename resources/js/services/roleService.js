import http from "./httpConfig"
const role = {}

role.all = async () => {
  http.plain.get('')
}

role.check = (data) => {
  console.log(data, 'test')
}

export default role;