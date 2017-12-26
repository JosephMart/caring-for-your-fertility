import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import './style.css';

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
        }

        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onMapClicked = this.onMapClicked.bind(this);
    }

    onMarkerClick(props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    onMapClicked(props) {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    }

    render() {
        const style = {
            width: '100%',
            height: '100%',
        }
        return (
            <Map google={this.props.google}
                onClick={this.onMapClicked}
                className={'map'}
                style={style}
                initialCenter={this.props.location}>
                <Marker onClick={this.onMarkerClick}
                    title={this.props.title}
                    name={this.props.title}
                    position={this.props.location} />

                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        )
    }
};


export default GoogleApiWrapper({
    apiKey: ('AIzaSyAShZ6EXx3c-dFuEWuK9FT5zw4WQIR-R8U')
})(MapContainer)