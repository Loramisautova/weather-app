import React from 'react';

import { SearchBar } from '../SearchBar/index';
import { TodayForecast } from '../TodayForecast/index';
import { CityPanel } from '../CityPanel/index';

import "./index.css";

import { Grid } from "@material-ui/core";

export const SidePanel = ({onSearch, result, city, isSubmitted }) => {

    console.log("isSubmitted",isSubmitted);
    console.log("result",result);

    const renderNotFound = () => <div> Not Found </div>
    
    return (
        <div className='side-panel'>
            <Grid container>
                <Grid item xs={12}>
                    <SearchBar
                        onSearch={onSearch}
                    />
                </Grid>
                <Grid item xs={12}>
                    {
                        isSubmitted && result
                        ? <TodayForecast result={result.current} />
                        : isSubmitted && !result 
                        ? renderNotFound()
                        : null
                    }
                </Grid>
                <Grid item xs={12}>
                    {   
                        isSubmitted && city
                        ? <CityPanel city={city.text} />
                        : isSubmitted && !city 
                        ? renderNotFound()
                        : null
                    }
                </Grid>
            </Grid>
        </div>
    );
}
