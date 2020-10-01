import React from 'react';
import "./index.css";

import { Grid } from "@material-ui/core";

export class Result extends React.PureComponent {

    render() {
        const { result } = this.props;
        return (
            <div className='visibility-panel'>
                <Grid container justify='space-between'>
                    {Boolean(result) && 
                        <>
                            <Grid container item xs={3}> {result.name}, {result.sys.country} </Grid>
                            <Grid item xs={3}> {Math.round(result.main.temp)}&#176; </Grid>
                        </>
                    }
                </Grid>
            </div>
        )
    }
}