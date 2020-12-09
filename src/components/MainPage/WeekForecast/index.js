import React, { useMemo } from 'react';
import { Box } from "@material-ui/core";

import { ForecastCard } from '../ForecastCard';

export const WeekForecast = (props) => {
  const { forecast, fahreingheit, selectedDay } = props;

  const selectedIndex = useMemo(
    () => {
      if (selectedDay) {
        return forecast.findIndex(day => day.dt === selectedDay.dt);
      }

      return 0;
    }, 
    [selectedDay],
  );

  return (
    <Box display = "flex" flexDirection = "row" justifyContent="space-evenly" p={3}>
      {
        forecast &&
          forecast.map((day, index) =>
            <ForecastCard
              day={day}
              key={day.dt}
              fahreingheit={fahreingheit}
              selectedIndex={selectedIndex === index}
              onSelect={() => props.onSelect(day)}
          />
        )
      }
    </Box>
  );
}