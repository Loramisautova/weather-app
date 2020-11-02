import React from 'react';

import { format, fromUnixTime } from "date-fns";

import { Typography, Box } from "@material-ui/core";

export const ForecastCard = (props) => {

    const { day } = props;
    const date = format(fromUnixTime(day.dt), "eeee");

    return (
        <Box display = "flex" flexDirection = "column">
            <Typography component="div">
                <Box fontWeight="fontWeightBold" m={1}>
                    {date.substring(0, 3)}
                </Box>
            </Typography>
            <Typography component="div">
                    <Box fontWeight="fontWeightMedium" m={1}>
                        {Math.round(day.temp.min - 273.15)}&deg; {Math.round(day.temp.max - 273.15)}&deg;
                    </Box>
            </Typography>
        </Box>
    );
}