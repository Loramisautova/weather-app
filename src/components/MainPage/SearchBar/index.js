import React from 'react';

import {Button, Grid, TextField} from "@material-ui/core";
import { Autocomplete } from '@material-ui/lab';

import "./index.css";

export class SearchBar extends React.PureComponent {
   
    state = {
        address: '',
        suggestions: []
    }
    
    handleSubmit = () => {
        this.props.onSearch(this.state.address);
    };

    getSuggestions = async () => {
        const API_KEY = '4bf4c660-0729-11eb-b357-a938736de318';
        const { address } = this.state;

            try {
                const request = await fetch(`https://app.geocodeapi.io/api/v1/autocomplete?apikey=${API_KEY}&text=${address}&size=10`);
                const result = await request.json();

                return result.features.map((item) => item.properties.label);

            } catch (e) {
                console.error(e);
            }
    }

    async componentDidUpdate (prevProps, prevState) {
        const { address } = this.state;

        if(prevState.address !== address && address.length >= 3) {
            const suggestions = await this.getSuggestions(address);
    
            this.setState({ suggestions });
        }
     }

    handleChange = (e) => {
        this.setState({ address: e.target.value});
    }

    handleSuggestionChange = (e, value) => {
        this.setState({ address: value });
        
    }

    render () {
        const { suggestions } = this.state;

        return (
            <Grid container alignContent="center">
                <Grid container item xs={10} sm={8} alignItems="center">
                    <div className='search-text-field'>
                        <Autocomplete 
                            freeSolo
                            id="free-solo-2-demo"
                            disableClearable
                            options={suggestions}
                            onChange={this.handleSuggestionChange}
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
