import axios, { Axios, AxiosResponse } from "axios";
import { Weather } from "../store/types/types";

export class WeatherService {
    static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>>{
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ae8ef33cf69920f61a1b3a09838a350b`);
    }
}
