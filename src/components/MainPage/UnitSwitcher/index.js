import React from 'react';
import { Switch, Box } from "@material-ui/core";

export const UnitSwitcher = ({onChange, fahreingheit}) => {
    return (
        <Box display = "flex" flexDirection = "row" justifyContent="flex-end" pr={5}>
            <Switch
                checked={fahreingheit}
                onChange={onChange}
                color="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
        </Box>
    );
}