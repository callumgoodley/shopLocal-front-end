import React from 'react';

import {View, Button} from 'react-native';
import CategoriesList from '../Components/CategoriesList';
import MapComponent from '../Components/MapComponent';
import ListView from '../Components/ListView';

class HomePage extends React.Component {
  state = {
    err: null,
    toggleView: false,
    filterCategory: '',
  };

  render() {
    const {toggleView, filterCategory} = this.state;
    const view = toggleView ? 'Map' : 'List';
    console.log(filterCategory, 'filter');
    return (
      <View style={styled.homeView}>
        <View style={styled.categories}>
          <CategoriesList setCategory={this.setCategory} />
        </View>
        {!toggleView ? (
          <View style={styled.shops}>
            <MapComponent />
          </View>
        ) : (
          <View style={styled.shops}>
            <ListView />
          </View>
        )}
        <View style={styled.buttonView}>
          <Button
            title={`Show ${view} View`}
            onPress={() =>
              this.setState(currentState => {
                return {toggleView: !currentState.toggleView};
              })
            }
          />
        </View>
      </View>
    );
  }

  setCategory = type => {
    this.setState({filterCategory: type});
  };
}

const styled = {
  buttonView: {
    position: 'absolute',
    top: '20%',
    alignSelf: 'flex-start',
  },
  shops: {
    flex: 4,
  },
  categories: {flex: 1, backgroundColor: 'rgba(20, 156, 12, 0.1)'},
  homeView: {
    flex: 1,
    flexDirection: 'column',
  },
};

export default HomePage;
