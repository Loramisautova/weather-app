import React from 'react'; 
import { Typography, Box } from "@material-ui/core";

export const HighlightsCard = ({highlights}) => {

    const {
        sunset, 
        sunrise, 
        humidity,
        uvi,
        wind_speed,
        visibility,
    } = highlights;

    return (
        <>
        <Box display = "flex" flexDirection = "column">
            <Typography gutterBottom variant="subtitle1" color="textSecondary">
                    Sunrise & Sunset
            </Typography>
            <Typography component="div">
                <Box fontWeight="fontWeightBold" m={1}>
                    {sunrise}
                </Box>
            </Typography>
            <Typography component="div">
                <Box fontWeight="fontWeightBold" m={1}>
                    {sunset} 
                </Box>
            </Typography>
        </Box>
        <Box display = "flex" flexDirection = "column">
            <Typography gutterBottom variant="subtitle1" color="textSecondary">
                    Wind Status
            </Typography>
            <Typography component="div">
                <Box fontWeight="fontWeightBold" m={1}>
                    {wind_speed}
                </Box>
            </Typography>
        </Box>
        <Box display = "flex" flexDirection = "column">
            <Typography gutterBottom variant="subtitle1" color="textSecondary">
                    UV Index
            </Typography>
            <Typography component="div">
                <Box fontWeight="fontWeightBold" m={1}>
                    {uvi}
                </Box>
            </Typography>
        </Box>
        <Box display = "flex" flexDirection = "column">
            <Typography gutterBottom variant="subtitle1" color="textSecondary">
                    Humidity
            </Typography>
            <Typography component="div">
                <Box fontWeight="fontWeightBold" m={1}>
                    {humidity}
                </Box>
            </Typography>
        </Box>
        <Box display = "flex" flexDirection = "column">
            <Typography gutterBottom variant="subtitle1" color="textSecondary">
                    Visibility
            </Typography>
            <Typography component="div">
                <Box fontWeight="fontWeightBold" m={1}>
                    {visibility}
                </Box>
            </Typography>
        </Box>
        </>
    );
}