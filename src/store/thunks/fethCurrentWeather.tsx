import { WeatherService } from "../../sevices/WeatherService";
import { currentWeatherSlice } from "../slices/currentWeatherSlice";
import { AppDispatch } from "../store";

export const fetchCurrentWeather = (payload: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(currentWeatherSlice.actions.fetchCurrentWeather())
        const res = await WeatherService.getCurrentWeather(payload);
        
        if (res.status === 200) {
            dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSucces(res));
        } else {
            dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError(res));
        }
    } catch (error) {
        console.log('Error');
        
    }

}