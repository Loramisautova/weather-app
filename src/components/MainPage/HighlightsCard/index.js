import React from 'react'; 
import { Typography, Box } from "@material-ui/core";
import { format, fromUnixTime } from "date-fns";

import "./index.css";

export const HighlightsCard = ({highlights}) => {
    const {
        // sunset, 
        // sunrise, 
        humidity,
        uvi,
        wind_speed,
        visibility,
    } = highlights;

    const sunsetStr = format(fromUnixTime(highlights.sunset), "HH:mm");
    const sunriseStr = format(fromUnixTime(highlights.sunrise), "HH:mm");

    return (
        <Box component="div" display = "flex" flexDirection = "column">
            <Box component="div" display = "flex" flexDirection = "row" xs={12}>
                <Box className= "highlight-card" display = "flex" flexDirection = "column" m={1}>
                    <Typography gutterBottom variant="subtitle1" color="textSecondary">
                            Sunrise
                    </Typography>
                    <Typography component="div">
                        <Box fontWeight="fontWeightBold" m={1}>
                            {sunriseStr} AM
                        </Box>
                    </Typography>
                </Box>
                <Box className= "highlight-card" display = "flex" flexDirection = "column" m={1}>
                    <Typography gutterBottom variant="subtitle1" color="textSecondary">
                            Wind Status
                    </Typography>
                    <Typography component="div">
                        <Box fontWeight="fontWeightBold" m={1}>
                            {wind_speed} m/s
                        </Box>
                    </Typography>
                </Box>
                <Box className= "highlight-card" display = "flex" flexDirection = "column" m={1}>
                    <Typography gutterBottom variant="subtitle1" color="textSecondary">
                            UV Index
                    </Typography>
                    <Typography component="div">
                        <Box fontWeight="fontWeightBold" m={1}>
                            {uvi}
                        </Box>
                    </Typography>
                </Box>
            </Box>
            <Box component="div" display = "flex" flexDirection = "row" xs={12}>
                <Box className= "highlight-card" display = "flex" flexDirection = "column" m={1}>
                    <Typography gutterBottom variant="subtitle1" color="textSecondary">
                            Sunset
                    </Typography>
                    <Typography component="div">
                        <Box fontWeight="fontWeightBold" m={1}>
                            {sunsetStr} PM 
                        </Box>
                    </Typography>
                </Box>
                <Box className= "highlight-card" display = "flex" flexDirection = "column" m={1}>
                    <Typography gutterBottom variant="subtitle1" color="textSecondary">
                            Visibility
                    </Typography>
                    <Typography component="div">
                        <Box fontWeight="fontWeightBold" m={1}>
                            {visibility/1000} km
                        </Box>
                    </Typography>
                </Box>
                <Box className= "highlight-card" display = "flex" flexDirection = "column" m={1}>
                    <Typography gutterBottom variant="subtitle1" color="textSecondary">
                                Humidity
                    </Typography>
                    <Typography component="div">
                        <Box fontWeight="fontWeightBold" m={1}>
                            {humidity}&deg;
                        </Box>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}