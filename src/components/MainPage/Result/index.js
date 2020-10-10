import React from 'react';

import { Grid } from "@material-ui/core";

import "./index.css";

export class Result extends React.PureComponent {

    renderContent (result) {
        switch (result.cod) { 
            case 200: { 
                return (<> 
                        <Grid container item xs={3}> {result.name}, {result.sys.country} </Grid> 
                        <Grid item xs={3}> {Math.round(result.main.temp)}&#176; </Grid> 
                    </>
                );
            }           
            case "404": { 
                return (
                    <Grid item xs={6}> Address Not Found </Grid>
                );
            }  
            default: 
                return null; 
        };
    }

    render() {
        const { result } = this.props;
        return (
            <div className='visibility-panel'>
                <Grid container justify='space-between'>
                   {Boolean(result) && this.renderContent(result)}
                </Grid>
            </div>
        )
    }
}