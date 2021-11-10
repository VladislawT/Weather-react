import React from 'react';
import { GlobalSvgSelector } from '../../../../assets/images/icons/global/GlobalSvgSelector';
import { Day } from './Days';

import s from './Days.module.scss';


interface Props {
    currentday: Day,
}

export const Card = ({currentday}: Props) => {

    
    const { day,
        day_info,
        icon_id,
        temp_day,
        temp_night,
        info } = currentday;
    return (
        <div className={s.card}>
            <div className={s.day}>{day}</div>
            <div className={s.day__info}>{day_info}</div>
            <div className={s.img}>
                <GlobalSvgSelector id={icon_id}/>
            </div>
            <div className={s.day__temp}>{temp_day}</div>
            <div className={s.night__temp}>{temp_night}</div>
            <div className={s.info}>{info}</div>
        </div>
    )
}
