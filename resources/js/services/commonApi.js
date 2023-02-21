import axios from "axios";

const common = {}

common.get = async (route) => {
    return axios.get(route);
}

export default common;