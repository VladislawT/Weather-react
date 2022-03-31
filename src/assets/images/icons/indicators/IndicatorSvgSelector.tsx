import React from 'react';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import CompressIcon from '@mui/icons-material/Compress';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import AirIcon from '@mui/icons-material/Air';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

interface Props {
  id: string;
}

export const IndicatorSvgSelector = ({ id }: Props) => {
  switch (id) {
    case 'temp':
      return (
        <div><DeviceThermostatIcon /></div>
      )
    case 'pressure':
      return (
        <div><CompressIcon /></div>
      )
    case 'precipitation':
      return (
        <div><InvertColorsIcon /></div>
      )
    case 'wind':
      return (
        <div><AirIcon /></div>
        )
    case 'cloud':
      return (
        <div>
          <CloudQueueIcon/>
        </div>
      ) 
}
return <div></div>
}