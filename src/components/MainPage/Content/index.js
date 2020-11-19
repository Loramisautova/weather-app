import React from 'react';
import { Box, Grid } from "@material-ui/core";

import { WeekForecast } from '../WeekForecast';
import { TodaysHighlights } from '../TodaysHighlights';
import { UnitSwitcher } from '../UnitSwitcher'

import './index.css'

export const Content = ({ forecast, fahreingheit, onChange }) => {
    return (
        forecast 
        ? (
            <Box className="content" p={2}>
                <Grid direction="column" justify="center" spacing={1} container>
                    <Grid  xs={12} item>
                        <UnitSwitcher fahreingheit={checked} onChange={onChange} />
                    </Grid>
                    <Grid  xs={12} item>
                        <WeekForecast fahreingheit={fahreingheit} forecast={forecast.daily} /> 
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