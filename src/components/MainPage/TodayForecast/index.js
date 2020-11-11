import React from 'react';
import {Typography, Box, Divider, SvgIcon } from "@material-ui/core";
import { format, fromUnixTime } from "date-fns";

import "./index.css";

export const TodayForecast = (props) => {
    const { result } = props;

    const resultDateStr = format(fromUnixTime(result.dt), "eeee, HH:mm");
    const weatherDescription = result.weather.map(i => i.description)

<<<<<<< Updated upstream
        return (
            <> 
                <Box display = "flex" flexDirection = "column">
                    <Typography variant="h2" gutterBottom>
                        {Math.round(result.temp)}&deg;
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
=======
    return (
        <> 
            <Box display = "flex" flexDirection = "column">
                {/* Большая иконка */}
                <Typography variant="h2" gutterBottom>
                    {Math.round(result.temp - 273.15)}&deg;
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
>>>>>>> Stashed changes
}