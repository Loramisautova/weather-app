import React from 'react';

import {Typography, Box } from "@material-ui/core";

import "./index.css";

export const CityPanel = (props) => {
    const { city } = props;

    if (city !== undefined) {
        return (<> 
                <Typography variant="h2" gutterBottom component="div" className="city-title">
                    <Box textAlign="center" fontWeight="fontWeightBold" m={1}>
                        {city}
                    </Box>
                </Typography>
            </>
        )   
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

