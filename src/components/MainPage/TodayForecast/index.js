import React from 'react';
import {Typography, Box, Divider } from "@material-ui/core";
import { format, fromUnixTime } from "date-fns";

import { WeatherIcon } from '../../WeatherIcon';
import { SIZES } from '../../../consts';

import { Temp } from '../Temp';

import "./index.css";

export const TodayForecast = (props) => {
    const { result, fahreingheit } = props;

    const resultDateStr = format(fromUnixTime(result.dt), "eeee, HH:mm");
    let weatherDescription;
    let icon;
    if (result.weather && Boolean(result.weather.length)) {
        weatherDescription = result.weather.map(i => i.description);
        icon = result.weather[0].icon;
    }
    
    return (
            <>
            <Box className="today-forecast" display = "flex" flexDirection = "column" alignItems="center" justifyContent="center">
                <Box item mt={2}>
                    {
                    icon &&
                    <WeatherIcon icon={icon} size={SIZES.LG} />
                    }
                </Box>
                <Box item mt={2}>
                    <Typography variant="h2" display="inline" gutterBottom>
                        <Temp value={result.temp} fahreingheit={fahreingheit} />
                    </Typography>
                </Box>
                <Box item>
                    <Typography component="div">
                        <Box fontWeight="fontWeightBold" mt={2}>
                            {resultDateStr}
                        </Box>
                    </Typography>
                </Box>
                </Box>
                <Divider variant="middle" />
                <Box display = "flex" alignItems="center" justifyContent="center" item>
                    <Typography component="div" className="description-title">
                        <Box fontWeight="fontWeightMedium" m={2}>
                            {weatherDescription}
                        </Box>
                    </Typography>
                </Box>
            </>
    );
}