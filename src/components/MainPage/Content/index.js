import React, { useState} from 'react';
import { Box, Grid } from "@material-ui/core";

import { WeekForecast } from '../WeekForecast';
import { TodaysHighlights } from '../TodaysHighlights';
import { UnitSwitcher } from '../UnitSwitcher';
import { HighlightsHeader } from '../HighlightsHeader';


import './index.css'

export const Content = ({ forecast, checked, onChange }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    
    const handleSelectedDay = (index) => {
        setSelectedIndex(index)
        console.log(index)
    };

    let weekDay;
    if (forecast && forecast.daily) {
        weekDay = forecast.daily[selectedIndex];
    };

    return (
        forecast 
        ? (
            <Box className="content" p={2}>
                <Grid direction="column" justify="center" spacing={1} container>
                    <Grid  xs={12} item>
                        <UnitSwitcher fahreingheit={checked} onChange={onChange} />
                    </Grid>
                    <Grid  xs={12} item>
                        <WeekForecast fahreingheit={checked} forecast={forecast.daily} selectedIndex={selectedIndex} onSelect={handleSelectedDay} /> 
                    </Grid>
                    <Grid item xs={12}>
                        <HighlightsHeader highlights={weekDay} />
                    </Grid>
                    <Grid item xs={12}>
                        <TodaysHighlights highlights={weekDay} />
                    </Grid>
                </Grid>
            </Box>
        )
        : null
    );
}