import React from 'react'

import { Grid } from "@material-ui/core";

import { SearchBar } from './SearchBar/index';
import { Result } from './Result/index';
import { WeatherMap } from './WeatherMap/index';

import { data } from '../../consts'

export class MainPage extends React.PureComponent {
    state = {
        address: '',
        result: undefined 
    }

    handleSearchCity = async (address) => {
        this.setState({ result: data });
      // const API_KEY = '7fa5f0fb6c1c76373c9c715e63ef8768';
      //   }) {
      //     try {
      //       const request = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${address}&appid=${API_KEY}&units=metric`);
      //       const result = await request.json();
      //       console.log(result)
  
      //       this.setState({
      //         result
      //       });
      //   } catch (e) {
      //     console.error(e);
      //   }
      // }
    }

    render() {
      const { result } = this.state;
      
        return (
            <div className='visibility-panel'>
              <Grid container justify="center">
                <Grid item xs={6}>
                  <SearchBar
                    onSearch={this.handleSearchCity}
                  />
                  <Result 
                    result={result}
                  />
                  {
                    result &&
                    <WeatherMap coord={result.coord}/>
                  }
                </Grid>
              </Grid>
            </div>
        )
    }
}
