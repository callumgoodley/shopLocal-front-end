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
    locations: [
      {
        id: 1,
        name: '1',
        lat: 53.4733341,
        lng: -2.2404379,
        type: 'bakery',
        img: '',
      },
      {
        id: 2,
        name: '2',
        lat: 53.4742369,
        lng: -2.2405659,
        type: 'fruit',
        img: '',
      },
      {
        id: 3,
        name: '3',
        lat: 53.4743035,
        lng: -2.2348444,
        type: 'cheese',
        img: '',
      },
      {
        id: 4,
        name: '4',
        lat: 53.4741018,
        lng: -2.2367348,
        type: 'fish',
        img: '',
      },
      {
        id: 5,
        name: '5',
        lat: 53.4689331,
        lng: -2.2383827,
        type: 'florist',
        img: '',
      },
      {
        id: 6,
        name: '6',
        lat: 53.474953,
        lng: -2.2411171,
        type: 'milk',
        img: '',
      },
      {
        id: 7,
        name: '7',
        lat: 53.4717176,
        lng: -2.2426765,
        type: 'sweet',
        img: '',
      },
      {
        id: 8,
        name: '8',
        lat: 53.4706653,
        lng: -2.2360268,
        type: 'butcher',
        img: '',
      },
      {
        id: 9,
        name: '9',
        lat: 53.470583,
        lng: -2.248035,
        type: 'other',
        img: '',
      },
    ],
  };

  render() {
    const {toggleView, filterCategory, locations} = this.state;
    const view = toggleView ? 'Map' : 'List';
    console.log(filterCategory, 'filter');
    return (
      <View style={styled.homeView}>
        <View style={styled.categories}>
          <CategoriesList setCategory={this.setCategory} />
        </View>
        {!toggleView ? (
          <View style={styled.shops}>
            <MapComponent shops={locations} />
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filterCategory !== this.state.filterCategory) {
      // axios get where topic
      return this.setState(currentState => {
        return {
          locations: currentState.locations.filter(
            shop => shop.type === this.state.filterCategory,
          ),
        };
      });
    }
  }

  componentDidMount() {
    //axios get all businesses
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
