import axios from "axios";
import Services from "./Services";

const API = axios.create({
    baseURL: Services.base_url,
    transformRequest: [(data) => JSON.stringify(data)],
    headers: {
        // 'Authorization' : _token,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

export default API;
