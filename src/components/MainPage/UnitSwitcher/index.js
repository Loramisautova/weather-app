import React from 'react';
import { Typography, Grid, Switch, Box } from "@material-ui/core";

export const UnitSwitcher = ({onChange, fahreingheit}) => {
    return (
        <Box display = "flex" justifyContent="flex-end" pr={2}>
            <Typography component="div">
                <Grid component="label" container alignItems="center" spacing={1}>
                    <Grid item>℃</Grid>
                        <Switch
                            checked={fahreingheit}
                            onChange={onChange}
                            color="primary"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    <Grid item>℉</Grid>
                </Grid>
        </Typography>
        </Box>
    );
}