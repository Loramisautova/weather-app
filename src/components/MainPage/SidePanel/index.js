import React from 'react';

import { SearchBar } from '../SearchBar/index';
import { TodayForecast } from '../TodayForecast/index';
import { CityPanel } from '../CityPanel/index';

import "./index.css";
import { Grid } from "@material-ui/core";

export const SidePanel = ({onSearch, result, city }) => {
    
    return (
            <Grid container>
                <Grid item xs={12}>
                    <SearchBar onSearch={onSearch} />
                </Grid>
                <Grid item xs={12}>
                    {
                        result && 
                        <TodayForecast result={result.current} />
                    }
                </Grid>
                <Grid item xs={12}>
                    {   
                        city && 
                        <CityPanel city={city.text} />
                    }
                </Grid>
            </Grid>
    );
}
