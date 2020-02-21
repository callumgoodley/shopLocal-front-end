navigator.geolocation = require('@react-native-community/geolocation');

import React from 'react';
import {View, Text} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import ShopCard from './ShopCard';

Geolocation.setRNConfiguration({
  skipPermissionRequests: true,
  authorizationLevel: 'whenInUse',
});

class MapComponent extends React.Component {
  state = {
    err: null,
    latitude: 1,
    longitude: 1,
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
        {this.props.shops.map(shop => {
          return (
            <Marker
              key={shop.id}
              coordinate={{
                latitude: shop.lat,
                longitude: shop.lng,
              }}>
              <Callout>
                <View style={styled.shopCardView}>
                  <ShopCard
                    category={shop.type}
                    name={shop.name}
                    img={shop.img}
                  />
                </View>
              </Callout>
            </Marker>
          );
        })}
      </MapView>
    );
  }
}

const styled = {mapView: {flex: 1}, shopCardView: {width: 250}};

export default MapComponent;
