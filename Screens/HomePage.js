import React from 'react';

import {View, TouchableOpacity, Text} from 'react-native';
import CategoriesList from '../Components/CategoriesList';
import MapComponent from '../Components/MapComponent';
import ListView from '../Components/ListView';
import {getBusinesses} from '../API';
import {connect} from 'react-redux';
import {loadBusinesses} from '../actions/businesses';

class HomePage extends React.Component {
  state = {
    err: null,
    toggleView: false,
    filterCategory: '',
  };

  render() {
    const {toggleView, locations} = this.state;
    const view = toggleView ? 'Map' : 'List';
    return (
      <View style={styled.homeView}>
        <View style={styled.categories}>
          <CategoriesList
            setCategory={this.setCategory}
            loadBusinesses={this.loadBusinesses}
          />
        </View>
        {!toggleView ? (
          <View style={styled.shops}>
            <MapComponent allProps={this.props} />
          </View>
        ) : (
          <View style={styled.shops}>
            <ListView shops={locations} />
          </View>
        )}
        {/* <View style={styled.buttonView}> */}
        <TouchableOpacity
          style={styled.buttonView}
          // title={`Show ${view} View`}
          onPress={() =>
            this.setState(currentState => {
              return {toggleView: !currentState.toggleView};
            })
          }>
          <Text
            style={{
              color: '#fff',
              fontWeight: '700',
            }}>{`Show ${view} View`}</Text>
        </TouchableOpacity>
        {/* </View> */}
      </View>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filterCategory !== this.state.filterCategory) {
      this.loadBusinesses(this.state.filterCategory).then(businesses => {
        this.props.add(businesses);
      });
    }
  }

  componentDidMount() {
    this.loadBusinesses().then(businesses => {
      this.props.add(businesses);
    });
  }

  loadBusinesses = type => {
    return getBusinesses(type);
  };

  setCategory = type => {
    this.setState({filterCategory: type});
  };
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.loggedInUser,
    businesses: state.reducer.businesses,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // add: user => dispatch(login(user)),
    add: businesses => dispatch(loadBusinesses(businesses)),
  };
};

const styled = {
  buttonView: {
    position: 'absolute',
    top: '20%',
    alignSelf: 'flex-start',
    backgroundColor: '#149C0C',
    padding: 10,
    borderRadius: 20,
    marginLeft: 10,
    marginTop: 10,
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
