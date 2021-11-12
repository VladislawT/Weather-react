import React from 'react'
import { IndicatorSvgSelector } from '../../../../assets/images/icons/indicators/IndicatorSvgSelector';
import { Weather } from '../../../../store/types/types';
import { Item } from './ThisDayInfo';
import s from './ThisDayInfo.module.scss'

interface Props {
    item: Item,
    weather:Weather,
}

export const ThisDayItem = ({item, weather }: Props) => {
    const { icon_id, name, value, units } = item;
    
    return (
        <div className={s.item}>
            <div className={s.indicator}>
                <IndicatorSvgSelector id={icon_id}/>
            </div>
            <div className={s.indicator__name}>{name}</div>
            <div className={s.indicator__value}>{Math.floor(+value)}{units}</div>
        </div>
    )
}
