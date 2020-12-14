import React, { useState} from 'react';
import { Grid, Box } from "@material-ui/core";

import { WeekForecast } from '../WeekForecast';
import { TodaysHighlights } from '../TodaysHighlights';
import { UnitSwitcher } from '../UnitSwitcher';
import { HighlightHeader } from '../HighlightHeader';

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
            <Grid className="content" direction="row" justify="center" container>
                <Grid item xs={12}>
                    <UnitSwitcher fahreingheit={checked} onChange={onChange} />
                </Grid>
                <Grid item xs={12}>
                    <WeekForecast fahreingheit={checked} forecast={forecast.daily} selectedIndex={selectedIndex} onSelect={handleSelectedDay} /> 
                </Grid>
                <Grid item xs={12}>
                    <HighlightHeader highlights={weekDay} />
                </Grid>
                <Grid item xs={12}>
                    <TodaysHighlights highlights={weekDay} />
                </Grid>
            </Grid>
        )
        : null
    );
}