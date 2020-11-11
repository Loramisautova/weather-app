import React from 'react';

import { getImageFromIcon } from './utils';

import "./index.css";

export const WeatherIcon = (props) => {
    const { icon, size } = props;
    const iconImage = getImageFromIcon(icon);

    return (
        <>
            <img className={`weather-icon__icon_${size}`} src={iconImage} />
        </>
    );
}