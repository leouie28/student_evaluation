import axios from "axios";

const http = {}

http.api = axios.create({
  baseURL: `http://localhost:8082`,
  timeout: 6000,
  headers: {
    "Accept": "application/json"
  }
})

http.auth = () => {
  return false
};

export default http;