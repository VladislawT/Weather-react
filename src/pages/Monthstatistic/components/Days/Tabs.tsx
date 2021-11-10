import React from 'react';

import s from './Days.module.scss';
import { Tab } from './Tab';

interface Props {
    
}

export interface  Tabs{
    value: string
}

export const Tabs = (props: Props) => {

    const tabs: Tabs[] = [
        {
          value: 'На неделю',
        },
        {
          value: 'На 10 дней',
        },
        {
          value: 'На месяц',
        },
      ];

    return (
        <div className={s.tabs}>
            <div className={s.tabs__wrapper}>
                {
                    tabs.map((tab:Tabs) => (
                        <Tab key={tab.value} tab={tab}/>
                    ))
                }
            </div>
            <div className={s.cansel}>Отменить</div>
        </div>
    )
}
