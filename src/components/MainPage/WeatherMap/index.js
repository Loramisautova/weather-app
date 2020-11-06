import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

export class WeatherMap extends React.PureComponent {
    state = {
        zoom: 7,
    };

    render() {
        const { coord } = this.props;
        
        return (
            <div> 
                <Map 
                    style={{ height: "100vh" }} 
                    center={[coord.lat, coord.lon]} 
                    zoom={this.state.zoom}
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                        <Marker position={[coord.lat, coord.lon]}>
                            <Popup>
                                <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
                            </Popup>
                    </Marker>
                 </Map>
            </div>
        )
    }
}