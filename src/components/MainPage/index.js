import React from 'react'
import { Grid } from "@material-ui/core";

import { GEOCODE_API_KEY } from '../../consts';

import { SidePanel } from './SidePanel';
import { Content } from './Content';
import { NotFound } from './NotFound';

import "fontsource-roboto";

export class MainPage extends React.PureComponent {
    state = {
        address: '',
        result: undefined,
        city: undefined,
        error: false, 
        fahreingheit: false,
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
                error: false,
              }); 
            } else {
              throw new Error('Not Found');
            }
        } catch (e) {
          this.setState({
            error: true,
            city: '',
            result: null,
          });
        } 
    }
    
    handleChange = (event) => {
      this.setState({ fahreingheit : event.target.checked });
    };

    render() {
      const { result, city, error, fahreingheit } = this.state;
      
        return (
          <Grid container>
            <Grid item xs={3}>
              <SidePanel
                result={result}
                city={city}
                onSearch={this.handleSearchCity}
                checked={fahreingheit}
                // isSubmitted={isSubmitted}
              />
            </Grid>
            <Grid item xs={9}>
              <Content 
                forecast={result}
                checked={fahreingheit}
                onChange={this.handleChange}
              />
            </Grid>
            {/* {
              result &&
              <WeatherForecat result={result ? result.daily : undefined} />
            } */}
            {
              error && 
              <NotFound />
            }
          </Grid>
        );
    }
}