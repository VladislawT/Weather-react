import React from 'react';
import { GlobalSvgSelector } from '../../../../assets/images/icons/global/GlobalSvgSelector';
import { Weather } from '../../../../store/types/types';

import s from './ThisDay.module.scss';


interface Props {
    weather: Weather
}

export const ThisDay = ({weather}: Props) => {
    const date = new Date;

    return (
        <div className={s.this__day}>
            <div className={s.top__block}>
                <div className={s.top__block_wrapper}>
                    <div className={s.this__temp}>{Math.floor(weather.main.temp)}°</div>
                    <div className={s.this__day_name}>Сегодня</div>
                </div>
                <GlobalSvgSelector id='sun' />
            </div>
            <div className={s.bottom__block}>
                <div className={s.this__time}>Время: <span>{date.getHours()}<span className={s.this__time_units} >ч</span>  : {date.getMinutes()}<span className={s.this__time_units}>м</span></span></div>
                <div className={s.this__city}>Город: <span>Екатеринбург</span></div>
            </div>
        </div>
    )
}
