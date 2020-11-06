import React, { useState, useEffect } from 'react';
import {Button, Grid, TextField} from "@material-ui/core";
import { Autocomplete } from '@material-ui/lab';

import "./index.css";

import { GEOCODE_API_KEY } from '../../../consts.js';

export const SearchBar = (props) =>  {
    const [address, setAddress] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleSubmit = () => {
        props.onSearch(address)
    };

    useEffect(() => {
        const getSuggestions = async () => {

                try {
                    const request = await fetch(`https://app.geocodeapi.io/api/v1/autocomplete?apikey=${GEOCODE_API_KEY}&text=${address}&size=10`);
                    const result = await request.json();
            
                    return result.features.map((item) => item.properties.label);
            
                } catch (e) {
                    console.error(e);
            }
        };

        const fetchSuggestions = async () => {
            if(address.length >= 3) {
                const suggestions = await getSuggestions(address);
                
                console.log(suggestions);
                if(suggestions) {
                    setSuggestions(suggestions);
                }
            }
        }; fetchSuggestions();
    }, [address]);

    const handleChange = (e) => {
        setAddress(e.target.value)
    }
        
    const handleSuggestionChange = (e, value) => {
        setAddress(value);   
    }

    return (
        <Grid container alignContent="center">
            <Grid item xs={10} alignItems="center">
                <div className='search-text-field'>
                    <Autocomplete 
                        freeSolo
                        fullWidth
                        id="free-solo-2-demo"
                        disableClearable
                        options={suggestions}
                        onChange={handleSuggestionChange}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                fullWidth
                                label="Search city"
                                margin="normal"
                                variant="outlined"
                                onChange={handleChange}
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
                        onClick={handleSubmit}
                    >
                        Search
                    </Button>
                </div>
            </Grid>
        </Grid>
    );
}

