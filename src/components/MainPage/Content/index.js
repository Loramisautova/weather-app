import React from 'react';
import { Box } from "@material-ui/core";

import { WeekForecast } from '../WeekForecat';

export const Content = (props) => {

    const { forecast } = props;

    return (
        <Box display="flex" justifyContent="center" p={1}>
            {
                forecast &&
                <WeekForecast forecast={forecast.daily} />
            }
        </Box>
    );
}