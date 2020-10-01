import React from 'react';

import {Button, TextField, Grid} from "@material-ui/core";

export class SearchBar extends React.PureComponent {
   
    state = {
        address: ''
    }
    handleSubmit = () => {
        this.props.onSearch(this.state.address);
    };

    handleChange = (e) => {
        this.setState({ address: e.target.value });
      };

    render () {
        return (
            <Grid container alignItems="center">
                <Grid container item xs={10} alignItems="center">
                    <TextField
                        type="text" 
                        id="standard-basic"
                        color="primary"
                        label="Enter city" 
                        value={this.state.address}
                        onChange={this.handleChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={2}>
                    <Button 
                        variant="outlined" 
                        size="small" 
                        color="primary"
                        onClick={this.handleSubmit}
                        fullWidth
                    >
                        Search
                    </Button>
                </Grid>
            </Grid>
        );
    }
}