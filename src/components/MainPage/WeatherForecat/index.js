import React from 'react';

import { ForecastCard } from '../ForecastCard';

import { Box } from "@material-ui/core";

export const WeatherForecast = (props) => {

  const { result } = props;

  const weekDay = result.slice(1);

  return (
    <Box display = "flex" flexDirection = "row">
        {
          result &&
            weekDay.map((day, index) =>
                <ForecastCard
                    key={index}
                    day={day}
                />
            )
        }
    </Box>
  );
}

