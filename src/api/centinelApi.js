import axios from "axios";

const centinelApi = axios.create({
    baseURL: 'http://localhost:9000/api',
});

centinelApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token'),
    }

    return config;

})


export default centinelApi;