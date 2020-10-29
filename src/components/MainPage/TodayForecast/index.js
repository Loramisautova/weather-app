import React from 'react';

import {Typography, Box, Divider } from "@material-ui/core";

import { format, fromUnixTime } from "date-fns";

import "./index.css";

export const TodayForecast = (props) => {
    const { result } = props;

    const resultDateStr = format(fromUnixTime(result.dt), "eeee, HH:mm");
    const weatherDescription = result.weather.map(i => i.description)
    
    if (result !== undefined) {
        return (<> 
                    <Box display = "flex" flexDirection = "column">
                        <Typography variant="h2" gutterBottom>
                            {result.temp}<span>&#176;</span>
                        </Typography>
                        <Typography component="div">
                            <Box fontWeight="fontWeightBold" m={1}>
                                {resultDateStr}
                            </Box>
                        </Typography>
                        <Divider variant="middle" />
                        <Typography component="div" className="description-title">
                            <Box fontWeight="fontWeightMedium" m={1}>
                                {weatherDescription}
                            </Box>
                        </Typography>
                    </Box>
                </>
            );
    } else {
        return (
            <Typography component="div">
                    <Box fontWeight="fontWeightBold" m={1}>
                        Not Found
                    </Box>
            </Typography>
        );
    }
}