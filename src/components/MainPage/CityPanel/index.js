import React from 'react';
import {Typography, Box } from "@material-ui/core";

import "./index.css";

export const CityPanel = (props) => {
    const { city } = props;

    return (
        <Box className="city-box" display="flex" alignItems="center" justifyContent="center">
            <Typography component="div" variant="h6" gutterBottom>
                <Box fontWeight="fontWeightBold" textAlign="center">
                    {city}
                </Box>
            </Typography>
        </Box>
    );   
}