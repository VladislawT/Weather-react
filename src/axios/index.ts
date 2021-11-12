import axios from "axios";

const api = axios.create({
    baseURL: 'api.openweathermap.org/data/2.5',
});

api.interceptors.request.use(config => {
    
    config.url = config.url + '&units=metric' + '&appid=ae8ef33cf69920f61a1b3a09838a350b';
    return config;
});

export default api;