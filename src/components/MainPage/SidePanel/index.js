import React from 'react';
import { Grid } from "@material-ui/core";

import { SearchBar } from '../SearchBar/index';
import { TodayForecast } from '../TodayForecast/index';
import { CityPanel } from '../CityPanel/index';

import "./index.css";

export const SidePanel = ({ onSearch, result, city, checked }) => {
    return (
            <Grid className="side-panel-box" container>
                <Grid item xs={12}>
                    <SearchBar onSearch={onSearch} />
                </Grid>
                <Grid item xs={12}>
                    {
                        result && 
                        <TodayForecast result={result.current} fahreingheit={checked} />
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
