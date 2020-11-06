import React from 'react';
import { Grid } from "@material-ui/core";

import "./index.css";

export const Result = (props) => {
    const { result } = props;

    const renderContent = (res) => {
        const { cod, name, sys, main } = res;

        console.log(cod, name, sys, main);
        
        switch (cod) { 
            case 200: { 
                return (<> 
                        <Grid container item xs={3}> {name}, {sys.country} </Grid> 
                        <Grid item xs={3}> {Math.round(main.temp)}&#176; </Grid> 
                    </>
                );
            }
            case "404": { 
                return (
                    <Grid item xs={6}>Address Not Found </Grid>
                );
            }  
            default: 
                return null; 
        };
    }

    return (
        <div className='visibility-panel'>
            <Grid container justify='space-between'>
                {Boolean(result) && renderContent(result)}
            </Grid>
        </div>
    );
}