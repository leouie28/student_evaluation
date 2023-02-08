import axios from "axios";

const http = {}
const BASE_URL = "http://127.0.0.1:8000/"
const type = "Hfy66EjT9vGtKI6qOPqf";

http.api = axios.create({
  baseURL: BASE_URL + type,
  timeout: 6000,
  headers: {
    "Accept": "application/json"
  }
})


http.auth = async () => {
  await http.api.get('admin/check-auth')
};

export default http;