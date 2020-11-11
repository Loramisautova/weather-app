import React from 'react';
import {Typography, Box } from "@material-ui/core";

import "./index.css";

export const CityPanel = (props) => {
    const { city } = props;

    return (<> 
            <Typography className="city-title" component="div" variant="h2" gutterBottom>
                <Box textAlign="center" fontWeight="fontWeightBold" m={1}>
                    {city}
                </Box>
            </Typography>
        </>
    );   
}