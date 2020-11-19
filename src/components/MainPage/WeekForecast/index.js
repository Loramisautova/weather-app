import React from 'react';
import { Box } from "@material-ui/core";

import { ForecastCard } from '../ForecastCard';

export const WeekForecast = ({ forecast, fahreingheit }) => {
  const weekDays = forecast.slice(1);

  return (
    <Box display = "flex" flexDirection = "row" justifyContent="space-evenly" p={3}>
      {
        forecast &&
          weekDays.map((day) =>
            <ForecastCard
              key={day.dt}
              day={day}
              fahreingheit={fahreingheit}
          />
        )
      }
    </Box>
  );
}

