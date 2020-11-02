import React from 'react';

import { SearchBar } from '../SearchBar/index';
import { TodayForecast } from '../TodayForecast/index';
import { CityPanel } from '../CityPanel/index';

import "./index.css";

import { Grid } from "@material-ui/core";

export const SidePanel = ({onSearch, result, city}) => {

    return (
        <div className='side-panel'>
            <Grid container>
                <Grid item xs={12}>
                        <SearchBar
                            onSearch={onSearch}
                        />
                    {
                        result &&
                        <TodayForecast 
                            result={result ? result.current : undefined} />
                    }
                    {
                        city &&
                        <CityPanel
                            city={city ? city.text : undefined} />
                    }
                </Grid>
            </Grid>
        </div>
    );
}