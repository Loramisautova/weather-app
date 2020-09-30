import React from 'react';

import { SearchBar } from './SearchBar/index';
import { Result } from './Result/index';


export class MainPage extends React.PureComponent {

    state = {
        value: '',
        temperature: undefined, 
        city: undefined,
        country: undefined,
        wind: undefined,
        humidity: undefined,
        feelsLike: undefined
    }

    handleInputChange = (e) => {
        this.setState({
          value: e.target.value,
        });
      };    

    handleSearchCity = async (e) => {
        e.preventDefault();
        const { value } = this.state;
        const API_KEY = '7fa5f0fb6c1c76373c9c715e63ef8768';

        try {
          const request = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API_KEY}&units=metric`);
          const data = await request.json();
          console.log(data)

          this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            wind: data.wind.speed,
            humidity: data.main.humidity
          });
        } catch (e) {
          console.error(e);
        }
    }

    render() {
        return (
            <div>
                <SearchBar 
                    value={this.state.value}
                    change={this.handleInputChange}
                    submit={this.handleSearchCity}
                />
            {this.state.city && 
                <Result 
                  temp={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  wind={this.state.wind}
                  humidity={this.state.humidity}
                />
            }
            </div>
        )
    }
} 
