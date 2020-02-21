import React from 'react';
import {Text, View, Image} from 'react-native';

const ShopCard = ({category, name, img}) => {
  return (
    <View style={styled.card}>
      <View style={styled.imageView}>
        <Image
          source={{uri: img}}
          // source={require('../images/bakeryPic.jpg')}
          style={styled.image}
        />
      </View>
      <View style={styled.text}>
        <Text>{name}</Text>
        <Text>{category}</Text>
      </View>
    </View>
  );
};

const styled = {
  card: {
    flex: 1,
    backgroundColor: 'rgba(20, 156, 12, 0.3)',
    borderRadius: 20,
    height: 200,
    marginTop: 20,
  },
  text: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  imageView: {flex: 1},
  image: {
    flex: 1,
    width: null,
    resizeMode: 'cover',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
};

export default ShopCard;
