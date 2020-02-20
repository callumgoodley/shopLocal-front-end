import React from 'react';
import {ScrollView} from 'react-native';
import ShopCard from './ShopCard';

const ListView = () => {
  return (
    <ScrollView style={{padding: 20}}>
      <ShopCard />
      <ShopCard />
      <ShopCard />
    </ScrollView>
  );
};

export default ListView;
