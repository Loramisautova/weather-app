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
            <Box display = "flex" flexDirection = "column">
                <Box item mt={2}>
                    {
                    icon &&
                    <WeatherIcon icon={icon} size={SIZES.LG} />
                    }
                </Box>
                <Box item mt={1}>
                    <Typography variant="h2" display="inline" gutterBottom>
                        <Temp value={result.temp} fahreingheit={fahreingheit} />
                    </Typography>
                </Box>
                <Box item>
                    <Typography component="div">
                        <Box fontWeight="fontWeightBold" m={1}>
                            {resultDateStr}
                        </Box>
                    </Typography>
                </Box>
                <Divider variant="middle" />
                <Box item>
                    <Typography component="div" className="description-title">
                        <Box fontWeight="fontWeightMedium" m={1}>
                            {weatherDescription}
                        </Box>
                    </Typography>
                </Box>
            </Box>
        </>
    );
}