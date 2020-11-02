import React from 'react';

import { Box } from "@material-ui/core";

import { WeatherForecast } from '../WeatherForecat';

export const Content = (props) => {

    const { result } = props;

    return (
        <Box display="flex" justifyContent="center" m={1} p={1}>
            <Box p={1}>
            {
                result &&
                <WeatherForecast result={result ? result.daily : undefined} />
            }
            </Box>
        </Box>
    );
}