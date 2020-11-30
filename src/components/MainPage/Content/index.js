import React, { useState} from 'react';
import { Box, Grid } from "@material-ui/core";

import { WeekForecast } from '../WeekForecast';
import { TodaysHighlights } from '../TodaysHighlights';
import { UnitSwitcher } from '../UnitSwitcher';
import { HighlightsHeader } from '../HighlightsHeader';


import './index.css'

export const Content = ({ forecast, checked, onChange }) => {
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedIndex, setSelectedIndex] = useState('0')

    const handleSelectedDay = (day) => {
        setSelectedDay(day)
        handleSelectedIndex(day)
    };

    console.log(selectedDay);

    const handleSelectedIndex = (selectedDay) => {
        let index
        if (forecast && forecast.daily) {
            index = forecast.daily.findIndex(i => i.dt === selectedDay.dt);
            setSelectedIndex(index !== -1 ? index : 0)
            console.log(index)
        };
    } 

    console.log(selectedIndex);

    return (
        forecast 
        ? (
            <Box className="content" p={2}>
                <Grid direction="column" justify="center" spacing={1} container>
                    <Grid  xs={12} item>
                        <UnitSwitcher fahreingheit={checked} onChange={onChange} />
                    </Grid>
                    <Grid  xs={12} item>
                        <WeekForecast fahreingheit={checked} forecast={forecast.daily} selectedId={selectedDay.dt} selectedDay={handleSelectedDay} /> 
                    </Grid>
                    <Grid item xs={12}>
                        <HighlightsHeader highlights={forecast.daily[selectedIndex]} />
                    </Grid>
                    <Grid item xs={12}>
                        <TodaysHighlights highlights={forecast.daily[selectedIndex]} />
                    </Grid>
                </Grid>
            </Box>
        )
        : null
    );
}