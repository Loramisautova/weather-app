import React from 'react';
import "./index.css";

import {Button, Grid, TextField} from "@material-ui/core";
import { Autocomplete } from '@material-ui/lab';

export class SearchBar extends React.PureComponent {
   
    state = {
        address: '',
        suggestions: []
    }
    handleSubmit = () => {
        this.props.onSearch(this.state.address);
    };

    handleChange = (e) => {
        this.setState({ address: e.target.value
        }, async () => {
            const API_KEY = '4bf4c660-0729-11eb-b357-a938736de318';
            const { address } = this.state;

            if ( address.length >= 3 ) {
                try {
                    const request = await fetch(`https://app.geocodeapi.io/api/v1/autocomplete?apikey=${API_KEY}&text=${address}&size=10`);
                    const result = await request.json();
                    console.log(result)
    
                    const suggestions = result.features.map((item) => item.properties.label);   
    
                    this.setState({
                        suggestions
                    });
    
                } catch (e) {
                    console.error(e);
                }
            }
        });
    }

    render () {
        const {suggestions} = this.state;
        return (
            <Grid container alignItems="center">
                <Grid container item xs={10} alignItems="center">
                    <div className='search-text-field'>
                        <Autocomplete 
                            freeSolo
                            id="free-solo-2-demo"
                            disableClearable
                            options={suggestions}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Search city"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    InputProps={{ ...params.InputProps, type: 'search' }}
                                />
                            )}
                        />
                    </div>
                </Grid>
                <Grid container item xs={2} alignItems="center">
                    <div className='search-btn'>
                        <Button 
                            variant="contained"
                            size="large"
                            color="primary"
                            onClick={this.handleSubmit}
                        >
                            Search
                        </Button>
                    </div>
                </Grid>
            </Grid>
        );
    }
}
