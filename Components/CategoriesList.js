import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import Category from './Category';

const CategoriesList = () => {
  return (
    <ScrollView
      scrollEventThrottle={16}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{padding: 10}}>
      <Category image={require('../images/bakery.png')} name={'Bakery'} />
      <Category image={require('../images/butcher.png')} name={'Butcher'} />
      <Category image={require('../images/florist.png')} name={'Florist'} />
      <Category image={require('../images/sweet.png')} name={'Sweet Shop'} />
      <Category image={require('../images/fish.png')} name={'Fishmonger'} />
      <Category image={require('../images/cheese.png')} name={'Cheese Shop'} />
      <Category image={require('../images/fruit.png')} name={'Fruit & Veg'} />
      <Category image={require('../images/milk.png')} name={'Milk'} />
      <Category name={'See all categories'} />
    </ScrollView>
  );
};

export default CategoriesList;
