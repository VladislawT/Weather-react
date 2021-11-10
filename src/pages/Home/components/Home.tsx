import React, { useEffect } from 'react';
import { useCastomSelector, useCustomDispatch } from '../../../hooks/store';
import { fetchCurrentWeather } from '../../../store/thunks/fethCurrentWeather';
import { Days } from '../../Monthstatistic/components/Days/Days';

import { ThisDay } from '../../Monthstatistic/components/ThisDay/ThisDay';
import { ThisDayInfo } from '../../Monthstatistic/components/ThisDayInfo/ThisDayInfo';
import s from './Home.module.scss';


interface Props {
    
}

export const Home = (props: Props) => {

 const dispatch = useCustomDispatch();

 const {weather} = useCastomSelector((state) => state.currentWeatherSliceReducer);

 useEffect(() => {
    dispatch(fetchCurrentWeather('ekaterinburg')); 
 }, []);

 
    return (
        <div className={s.home}>
            <div className={s.wrapper}>
                <ThisDay weather={weather}/>
                <ThisDayInfo weather={weather} />
            </div>
            <Days/>
        </div>
    )
}

export default Home;