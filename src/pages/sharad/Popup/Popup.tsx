import React, { useEffect } from 'react';
import { GlobalSvgSelector } from '../../../assets/images/icons/global/GlobalSvgSelector';
import { useCastomSelector, useCustomDispatch } from '../../../hooks/store';
import { fetchCurrentWeather } from '../../../store/thunks/fethCurrentWeather';
import { Item } from '../../Monthstatistic/components/ThisDayInfo/ThisDayInfo';
import { ThisDayItem } from '../../Monthstatistic/components/ThisDayInfo/ThisDayItem';
import s from './Popup.module.scss';


interface Props {

}

export const Popup = (item: Props) => {

    const dispatch = useCustomDispatch();

    const { weather } = useCastomSelector((state) => state.currentWeatherSliceReducer);

    useEffect(() => {
        dispatch(fetchCurrentWeather('ekaterinburg'));
    }, []);

    console.log(weather);
    
    const items: Item[] = [
        {
            icon_id: 'temp',
            name: 'Температура',
            value: `${weather.main.temp}`,
            units: '°',
        },
        {
            icon_id: 'pressure',
            name: 'Давление',
            value: `${weather.main.pressure}`,
            units: ' мм рт. ст.'
        },
        {
            icon_id: 'precipitation',
            name: 'Влажность',
            value: `${weather.main.humidity}`,
            units: '%',
        },
        {
            icon_id: 'wind',
            name: 'Ветер',
            value: `${weather.wind.speed}`,
            units: ' м/с',
        },
    ]

    return (
        <div>
            <div className={s.blur}></div>
            <div className={s.popup}>
                <div className={s.day}>
                    <div className={s.this__day}>
                        <div className={s.top__block}>
                            <div className={s.top__block_wrapper}>
                                <div className={s.this__temp}>20°</div>
                                <div className={s.this__day_name}>today</div>
                            </div>
                            <GlobalSvgSelector id='sun' />
                        </div>
                        <div className={s.bottom__block}>
                            <div className={s.this__time}>Время: <span>21:30</span></div>
                            <div className={s.this__city}>Город: <span>Москва</span></div>
                        </div>
                    </div>
                </div>
                <div className={s.this__day_info_items}>
                    {
                        items.map((item: Item) => (
                            <ThisDayItem weather={weather} key={item.icon_id} item={item} />
                        ))
                    }
                </div>
                <div className={s.close}>
                    <GlobalSvgSelector id="change_theme" />
                </div>
            </div>
        </div>

    )
}
