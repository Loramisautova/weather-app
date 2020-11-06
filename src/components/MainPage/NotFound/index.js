import React from 'react';
import {Typography, Box } from "@material-ui/core";

export const NotFound = () => {
    
    return (
        <Typography component="div">
            <Box fontWeight="fontWeightBold" m={1}>
                The specified city could not be found. Please try again.
            </Box>
        </Typography>
    )
}