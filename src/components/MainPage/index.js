import React from 'react'

import { Grid } from "@material-ui/core";

import { SidePanel } from './SidePanel';
import { Content } from './Content';
// import { WeatherForecast } from '../WeatherForecat/index';

import "fontsource-roboto";

import { GEOCODE_API_KEY } from '../../consts.js';

export class MainPage extends React.PureComponent {
    state = {
        address: '',
        result: undefined,
        isSubmitted: false,
        city: undefined,
    }

    renderNotFound = () => <div> Not Found </div>

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
              throw new Error('Not Found');
            }
        } catch (e) {
          this.setState({
            isSubmitted: true,
            city: '',
            result: null,
          });
        } 
    }
    

    render() {
      const { result, city, isSubmitted } = this.state;
      
        return (
            <div className='visibility-panel'>
              <Grid container>
                <Grid item xs={3}>
                  <SidePanel
                    result={result}
                    city={city}
                    onSearch={this.handleSearchCity}
                    isSubmitted={isSubmitted}
                  />
                </Grid>
                <Grid item xs={9}>
                  <Content 
                    forecast={result}
                  />
                </Grid>
                  {/* {
                    result &&
                    <WeatherForecat result={result ? result.daily : undefined} />
                  } */}
                </Grid>
            </div>
        )
    }
}
