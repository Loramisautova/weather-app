import React, { useEffect, useMemo, useState} from 'react';
import { Box, Grid } from "@material-ui/core";

import { WeekForecast } from '../WeekForecast';
import { TodaysHighlights } from '../TodaysHighlights';
import { UnitSwitcher } from '../UnitSwitcher';
import { HighlightsHeader } from '../HighlightsHeader';


import './index.css'

export const Content = ({ forecast, checked, onChange }) => {
    const [selectedDay, setSelectedDay] = useState();
    const [forecastData, setForecastData] = useState();

    useEffect(
        () => {
            if (forecast && Array.isArray(forecast.daily)) {
                const data = forecast.daily.slice(1);

                setForecastData(data);
                setSelectedDay(data[0]);
            }
        },
        [forecast],
    );

    const handleSelectedDay = (day) => {
        setSelectedDay(day);
    };

    return (
        forecastData 
            ? (
                <Box className="content" p={2}>
                    <Grid direction="column" justify="center" spacing={1} container>
                        <Grid  xs={12} item>
                            <UnitSwitcher fahreingheit={checked} onChange={onChange} />
                        </Grid>
                        <Grid  xs={12} item>
                            <WeekForecast fahreingheit={checked} forecast={forecastData} selectedDay={selectedDay} onSelect={handleSelectedDay} /> 
                        </Grid>
                        <Grid item xs={12}>
                            <HighlightsHeader highlights={selectedDay} />
                        </Grid>
                        <Grid item xs={12}>
                            <TodaysHighlights highlights={selectedDay} />
                        </Grid>
                    </Grid>
                </Box>
            )
            : null
    );
}