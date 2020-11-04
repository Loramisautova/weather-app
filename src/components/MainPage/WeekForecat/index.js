import React from 'react';

import { ForecastCard } from '../ForecastCard';

import { Box } from "@material-ui/core";

export const WeekForecast = (props) => {

  const { forecast } = props;

  const weekDays = forecast.slice(1);

  return (
    <Box display = "flex" flexDirection = "row">
        {
          forecast &&
            weekDays.map((day) =>
                <ForecastCard
                    key={day.dt}
                    day={day}
                />
            )
        }
    </Box>
  );
}

