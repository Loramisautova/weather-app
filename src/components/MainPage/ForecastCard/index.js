import React from 'react';
import { Typography, Box } from "@material-ui/core";
import { format, fromUnixTime } from "date-fns";

export const ForecastCard = (props) => {
    const { day } = props;
    const date = format(fromUnixTime(day.dt), "eee");

    return (
        <Box display = "flex" flexDirection = "column">
            <Typography component="div">
                <Box fontWeight="fontWeightBold" m={1}>
                    {date}
                </Box>
            </Typography>
            <Typography component="div">
                    <Box fontWeight="fontWeightMedium" m={1}>
                        {Math.round(day.temp.min)}&deg; {Math.round(day.temp.max)}&deg;
                    </Box>
            </Typography>
        </Box>
    );
}