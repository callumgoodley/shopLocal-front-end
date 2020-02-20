import React from 'react';

import {View, StyleSheet, ScrollView, Button, Alert} from 'react-native';
import CategoriesList from '../Components/CategoriesList';
import MapComponent from '../Components/Map';

class HomePage extends React.Component {
  state = {
    err: null,
  };

  render() {
    return (
      <View style={styled.homeView}>
        <View style={styled.categories}>
          <CategoriesList />
        </View>

        <View style={styled.mapView}>
          <MapComponent />
        </View>

        <View style={styled.buttonView}>
          <Button
            title="Show List View"
            onPress={() => Alert.alert('Simple Button pressed')}
          />
        </View>
      </View>
    );
  }
}

const styled = {
  buttonView: {
    position: 'absolute',
    top: '20%',
    alignSelf: 'flex-start',
  },
  mapView: {
    flex: 4,
  },
  categories: {flex: 1, backgroundColor: 'rgba(20, 156, 12, 0.1)'},
  homeView: {
    flex: 1,
    flexDirection: 'column',
  },
};

export default HomePage;
