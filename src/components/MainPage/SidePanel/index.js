import React from 'react';
import { Box, Grid } from "@material-ui/core";

import { SearchBar } from '../SearchBar/index';
import { TodayForecast } from '../TodayForecast/index';
import { CityPanel } from '../CityPanel/index';


export const SidePanel = ({onSearch, result, city }) => {
    
    return (
        <Box p={2}>
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
        </Box>
    );
}
