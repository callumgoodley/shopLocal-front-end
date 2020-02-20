navigator.geolocation = require('@react-native-community/geolocation');

import React from 'react';
import {View, Text} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

Geolocation.setRNConfiguration({
  skipPermissionRequests: true,
  authorizationLevel: 'whenInUse',
});

class MapComponent extends React.Component {
  state = {
    err: null,
    latitude: 1,
    longitude: 1,
    locations: [
      {name: '1', lat: 53.4733341, lng: -2.2404379},
      {name: '2', lat: 53.4742369, lng: -2.2405659},
      {name: '3', lat: 53.4743035, lng: -2.2348444},
      {name: '4', lat: 53.4741018, lng: -2.2367348},
      {name: '5', lat: 53.4689331, lng: -2.2383827},
      {name: '6', lat: 53.474953, lng: -2.2411171},
      {name: '7', lat: 53.4717176, lng: -2.2426765},
      {name: '8', lat: 53.4706653, lng: -2.2360268},
    ],
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      err => this.setState({err: err.message}),
      // {enableHighAccuracy: true, timeout: 20000, maximumAge: 2000},
    );
  }

  render() {
    return (
      <MapView
        region={{
          latitude: this.state.latitude,
          longitude: this.state.longitude,
          latitudeDelta: 0.009,
          longitudeDelta: 0.01,
        }}
        style={styled.mapView}
        showsUserLocation={true}
        showsMyLocationButton={true}
        followsUserLocation={true}>
        {this.state.locations.map(location => {
          return (
            <Marker
              key={location.name}
              coordinate={{
                latitude: location.lat,
                longitude: location.lng,
              }}
              title={location.name}
            />
          );
        })}
      </MapView>
    );
  }
}

const styled = {mapView: {flex: 1}};

export default MapComponent;
