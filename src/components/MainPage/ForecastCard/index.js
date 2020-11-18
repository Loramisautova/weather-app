import React from 'react';
import { Typography, Box } from "@material-ui/core";
import { format, fromUnixTime } from "date-fns";

import { WeatherIcon } from '../../WeatherIcon';
import { SIZES } from '../../../consts';

import { Temp } from '../Temp';

import './index.css';

export const ForecastCard = ({ day, fahreingheit }) => {
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
            <Box display="flex" m={1}> 
                <Box fontWeight="fontWeightMedium" mr={1}>
                    <Temp value={day.temp.min} fahreingheit={fahreingheit} />
                </Box>
                <Box fontWeight="fontWeightMedium">
                    <Temp value={day.temp.max} fahreingheit={fahreingheit} />
                </Box>
            </Box> 
        </Box>
    );
}