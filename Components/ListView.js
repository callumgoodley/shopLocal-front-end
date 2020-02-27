import React from 'react';
import {ScrollView} from 'react-native';
import ShopCard from './ShopCard';
import {connect} from 'react-redux';

class ListView extends React.Component {
  makeBusinessesArr = data => {
    const arr = [];
    const keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      arr.push(data[key]);
      data[key].GoogleID = key;
    }
    return arr;
  };

  render() {
    const businessArr = this.makeBusinessesArr(this.props.businesses.data);
    return (
      <ScrollView style={{padding: 20}}>
        {businessArr.map(business => {
          return <ShopCard key={business.business_id} business={business} />;
        })}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.reducer.loggedInUser,
    businesses: state.reducer.businesses,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: user => dispatch(login(user)),
    add: businesses => dispatch(loadBusinesses(businesses)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
