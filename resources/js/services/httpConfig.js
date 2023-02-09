import axios from "axios";

const http = {}
const BASE_URL = window.location.origin
const TYPE = "GcMLkfd8kHZn1QHSfD3R";

http.plain = axios.create({
  headers: {
    "Accept": "application/json",
  }
})

http.api = axios.create({
  baseURL: `${BASE_URL}/${TYPE}`,
  timeout: 6000,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
})


http.auth = async () => {
  await http.api.get('admin/check-auth')
};

export default http;