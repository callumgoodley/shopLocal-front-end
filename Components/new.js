import React from 'react';
import {View, Text, Image} from 'react-native';

const NewComp = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Image source={require('../images/bakery.png')} />
      </View>
      <View style={{flex: 1}}>
        <Text>hello</Text>
      </View>
    </View>
  );
};

export default NewComp;
