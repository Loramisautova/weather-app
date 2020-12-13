import React from 'react';
import { Box } from "@material-ui/core";

import { ForecastCard } from '../ForecastCard';

export const WeekForecast = (props) => {
  const { forecast, fahreingheit, selectedIndex } = props;

  return (
    <Box display = "flex" flexDirection = "row" justifyContent="space-between">
      {
        forecast &&
          forecast.map((day, index) =>
            <ForecastCard
              day={day}
              key={day.dt}
              fahreingheit={fahreingheit}
              selectedIndex={selectedIndex === index}
              onSelect={() => props.onSelect(index)}
          />
        )
      }
    </Box>
  );
}