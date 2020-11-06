import React from 'react';
import { Grid } from "@material-ui/core";

import { WeekForecast } from '../WeekForecat';
import { TodaysHighlights } from '../TodaysHighlights';

export const Content = (props) => {

    const { forecast } = props;

    return (
        <Grid container direction="column" justify="center" spacing={3}>
            <Grid item xs={12}>
                {
                forecast &&
                <WeekForecast forecast={forecast.daily} />
                }
            </Grid>
            <Grid item xs={12}>
                {
                    forecast &&
                    <TodaysHighlights highlights={forecast.current}/>
                }
            </Grid>
        </Grid>
    );
}