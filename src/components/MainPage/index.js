import React from 'react'

import { Grid } from "@material-ui/core";

import { SearchBar } from './SearchBar/index';
import { TodayForecast } from './TodayForecast/index';
import { CityPanel } from './CityPanel/index';

import "fontsource-roboto";

import { GEOCODE_API_KEY } from '../../consts.js';

export class MainPage extends React.PureComponent {
    state = {
        address: '',
        result: undefined, 
        city: undefined,
    }

    handleSearchCity = async (address) => {
        // this.setState({ result: data });
        // }) 
        const API_KEY = "d5059caf979c114dc0d46bf2dd1b4aa3"
      
          try {
            const geoRequest = await fetch(`https://app.geocodeapi.io/api/v1/search?text=${address}&apikey=${GEOCODE_API_KEY}&size=1`);
            const geoResult = await geoRequest.json();

            console.log(geoResult)

            if (geoResult && geoResult.features && geoResult.features.length > 0 && geoResult.features[0].geometry) {
              const [lon, lat] = geoResult.features[0].geometry.coordinates;
              
              const request = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${API_KEY}`)
              const result = await request.json();
              
              console.log(result)
  
              this.setState({
                result,
                city: geoResult.geocoding.query, 
              });
            } else {
              console.log('Not Found')
            }
        } catch (e) {
          console.error(e);
        } 
    }

    render() {
      const { result, city } = this.state;
      
        return (
            <div className='visibility-panel'>
              <Grid container justify="center">
                <Grid item xs={6}>
                  <SearchBar
                    onSearch={this.handleSearchCity}
                  />
                  {
                    result &&
                    <TodayForecast result={result ? result.current : undefined} />
                  }
                  {
                    city &&
                   <CityPanel city={city ? city.text : undefined} />
                  }
                </Grid>
              </Grid>
            </div>
        )
    }
}
