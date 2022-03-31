import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { GlobalSvgSelector } from '../../../assets/images/icons/global/GlobalSvgSelector';
import { Theme } from '../../../context/ThemeContext';
import { useTheme } from '../../../hooks/useTheme';
import s from './Header.module.scss';


interface Props {

}

export const Header = (props: Props) => {
    const theme = useTheme();

    const options = [
        { value: 'city-1', label: 'Екатеринбург' },
        { value: 'city-2', label: 'Москва' },
        { value: 'city-3', label: 'Суздаль' },
        { value: 'city-4', label: 'Владимер' },
        { value: 'city-5', label: 'Санкт-Петербург' },
    ];


    const colourStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: theme.theme === Theme.DARK ? '#4F4F4F' : 'rgba(73,147,255,0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndez: 100,
        }),
        singleValue: (styles: any) => ({
            ...styles,
            color: theme.theme === Theme.DARK ? '#FFF' : '#000',
        }),
        menu: (styles: any) => ({
            ...styles,
            backgroundColor: theme.theme === Theme.DARK ? '#4F4F4F' : 'rgba(73,147,255,0.3)',
            color: theme.theme === Theme.DARK ? '#FFF' : '#000',
            zIndex: 20,
        })
    };

    function cangeTheme() {
        theme.cangeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)

    };

    

    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}><GlobalSvgSelector id="header-logo" /></div>
                <div className={s.title}>weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change__theme} onClick={cangeTheme}>
                    <GlobalSvgSelector id="change_theme" />
                </div>
                <Select defaultValue={options[0]}  styles={colourStyles} options={options} />
            </div>
        </header>
    )
}
