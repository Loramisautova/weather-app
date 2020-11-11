import React, { useState, useEffect } from 'react';
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Autocomplete } from '@material-ui/lab';

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
        <Autocomplete 
            id="free-solo-2-demo"
            options={suggestions}
            onChange={handleSuggestionChange}
            renderInput={(params) => (
                <TextField
                    {...params}
                    fullWidth
                    label="Search city"
                    margin="normal"
                    onChange={handleChange}
                    variant="outlined"
                    InputProps={{
                        ...params.InputProps,
                        type: 'search',
                        endAdornment: (
                            <InputAdornment>
                            <IconButton onClick={handleSubmit}>
                                <SearchIcon />
                            </IconButton>
                            </InputAdornment>
                        )
                        }}
                />
            )}
            disableClearable
            freeSolo
            fullWidth
        />
    );
}

