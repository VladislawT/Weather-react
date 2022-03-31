import React from 'react';

import s from './ThisDayInfo.module.scss';
import claud from '../../../../assets/images/claud.png';
import { ThisDayItem } from './ThisDayItem';
import { Weather } from '../../../../store/types/types';


export interface Props {
    weather: Weather,
}

export interface Item {
    icon_id: string,
    name: string,
    value: string,
    units: string,
}

export const ThisDayInfo = ({weather}: Props) => {
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
        {
            icon_id: 'cloud',
            name: 'Облачность',
            value: `${weather.clouds.all}`,
            units: ' %',
        },
    ]
    return (
        <div className={s.this__day_info}>
            <div className={s.this__day_info_items}>
                {
                    items.map((item: Item) => (
                        <ThisDayItem weather={weather} key={item.icon_id} item={item} />
                    ) )
                }
            </div>
            <img src={claud} alt="claud" />
        </div>
    )
}
