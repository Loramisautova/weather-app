import React from 'react';
import { Typography, Box } from "@material-ui/core";
import { format, fromUnixTime } from "date-fns";

import { WeatherIcon } from '../../WeatherIcon';
import { SIZES } from '../../../consts';

import './index.css';

export const ForecastCard = (props) => {
    const { day } = props;
    const date = format(fromUnixTime(day.dt), "eee");
    const icon = Array.isArray(day.weather) && Boolean(day.weather.length) && day.weather[0].icon;

    return (
        <Box className="forecast-card" display = "flex" flexDirection = "column">
            <Typography component="div">
                <Box fontWeight="fontWeightBold" m={1}>
                    {date}
                </Box>
            </Typography>
            {
                icon &&
                <WeatherIcon icon={icon} size={SIZES.MD} />
            }
            <Typography component="div">
                    <Box fontWeight="fontWeightMedium" m={1}>
                        {Math.round(day.temp.min)}&deg; {Math.round(day.temp.max)}&deg;
                    </Box>
            </Typography>
        </Box>
    );
}