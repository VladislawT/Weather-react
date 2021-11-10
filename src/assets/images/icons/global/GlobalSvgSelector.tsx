import React from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudQueueRoundedIcon from '@mui/icons-material/CloudQueueRounded';
import OpacityIcon from '@mui/icons-material/Opacity';
import CloudIcon from '@mui/icons-material/Cloud';

interface Props {
    id: string,

}

export const GlobalSvgSelector = ({ id }: Props) => {
    switch (id) {
        case 'header-logo':
            return (
                <WbSunnyIcon fontSize="large" />
            );
        case 'change_theme':
            return (
                <CloudQueueRoundedIcon fontSize="small" />
            );
        case 'sun':
            return (
                <WbSunnyIcon fontSize="large" />
            );
        case 'small_rain_sun':
            return (
                <OpacityIcon fontSize="large" />
            );
        case 'mainly_cloudy':
            return (
                <CloudIcon fontSize="large" />
            );
        default:
            return null;
    }
}
