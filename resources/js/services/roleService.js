import http from "./httpConfig"
const role = {}

// role.all = async () => {
//   http.plain.get('')
// }

role.check = (data) => {
  if(data.role.name=='admin') {
    router.push({path: '/admin/dashboard'})
  }
  console.log(data, 'test')
}

export default role;