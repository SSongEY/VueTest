import axios from 'axios';

axios.defaults.withCredentials = true; // enable axios post cookies.
const HOST = process.env.NODE_ENV === 'production' ? '' : `http://localhost:8080`;
const header = {
    headers: {'Content-Type': 'application/json;charset=UTF-8'}
};

export default {
    login(data) {
        return axios.post(`${HOST}/login/process`, data);
    }
};
