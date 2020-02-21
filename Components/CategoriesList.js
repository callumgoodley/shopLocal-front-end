import React from 'react';
import {ScrollView} from 'react-native';
import Category from './Category';

const CategoriesList = ({setCategory}) => {
  return (
    <ScrollView
      scrollEventThrottle={16}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styled.scroll}>
      <Category
        image={require('../images/bakery.png')}
        name={'Bakery'}
        type={'bakery'}
        setCategory={setCategory}
      />
      <Category
        image={require('../images/butcher.png')}
        name={'Butcher'}
        type={'butcher'}
        setCategory={setCategory}
      />
      <Category
        image={require('../images/florist.png')}
        name={'Florist'}
        type={'florist'}
        setCategory={setCategory}
      />
      <Category
        image={require('../images/sweet.png')}
        name={'Sweet Shop'}
        type={'sweet'}
        setCategory={setCategory}
      />
      <Category
        image={require('../images/fish.png')}
        name={'Fishmonger'}
        type={'fish'}
        setCategory={setCategory}
      />
      <Category
        image={require('../images/cheese.png')}
        name={'Cheese Shop'}
        type={'cheese'}
        setCategory={setCategory}
      />
      <Category
        image={require('../images/fruit.png')}
        name={'Fruit & Veg'}
        type={'fruit'}
        setCategory={setCategory}
      />
      <Category
        image={require('../images/milk.png')}
        name={'Milk'}
        type={'milk'}
        setCategory={setCategory}
      />
      <Category
        name={'See all categories'}
        type={'other'}
        setCategory={setCategory}
      />
    </ScrollView>
  );
};
const styled = {
  scroll: {padding: 10},
};

export default CategoriesList;
