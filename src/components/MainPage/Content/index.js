import React from 'react';
import { Box, Grid } from "@material-ui/core";

import { WeekForecast } from '../WeekForecat';
import { TodaysHighlights } from '../TodaysHighlights';

import './index.css'

export const Content = (props) => {
    const { forecast } = props;

    return (
        forecast 
        ? (
            <Box className="content" p={2   }>
                <Grid direction="column" justify="center" spacing={1} container>
                    <Grid  xs={12} item>
                        <WeekForecast forecast={forecast.daily} />  
                    </Grid>
                    <Grid item xs={12}>
                        <TodaysHighlights highlights={forecast.current}/>
                    </Grid>
                </Grid>
            </Box>
        )
        : null
    );
}