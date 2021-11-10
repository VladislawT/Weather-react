import React from 'react'
import { Tabs } from './Tabs';
import s from './Days.module.scss';

interface Props {
    tab: Tabs,
}


export const Tab = ({tab}: Props) => {
    const {value} = tab;
    return (
        <div className={s.tab + ' ' + s.active} key={value}>
            {value}
        </div>
    )
}
