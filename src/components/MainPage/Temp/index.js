import React from 'react';


export const Temp = ({ value, fahreingheit }) => {
    
    const convertToFahrenheit = (value) => {
        return (value - 273.15) * 9/5 + 32;
      };
      
    const convertToCelsius = (value) => {
        return (value - 273.15);
      };

    return (
        <div>
            {Math.round(
                fahreingheit === false
                ? convertToCelsius(value)
                : convertToFahrenheit(value)
            )}&deg;
        </div>
    );
}

  