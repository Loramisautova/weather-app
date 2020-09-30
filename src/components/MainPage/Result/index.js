import React from 'react';

export class Result extends React.PureComponent {

    render() {
        return (
            <div>
                <p> Location: {this.props.city}, {this.props.country} </p>
                <p> Temperature: {Math.round(this.props.temp)}&#176; </p>
                <p> Wind: {this.props.wind}mph </p>
                <p> Humidity: {this.props.humidity}% </p>
            </div>
        )
    }
}