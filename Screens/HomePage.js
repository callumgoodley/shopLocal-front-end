/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, StyleSheet, ScrollView} from 'react-native';
import CategoriesList from '../Components/CategoriesList';
import MapView from 'react-native-maps';

function HomePage({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <View style={{flex: 1, backgroundColor: 'rgba(20, 156, 12, 0.1)'}}>
        <CategoriesList />
      </View>
      <MapView
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        style={{
          flex: 4,
        }}
      />
    </View>
  );
}

export default HomePage;
