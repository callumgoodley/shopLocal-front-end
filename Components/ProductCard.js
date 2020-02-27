import React from 'react';
import {Text, View, Image} from 'react-native';
import {
  Card,
  CardItem,
  Left,
  Right,
  Thumbnail,
  Title,
  Subtitle,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProductCard = props => {
  // const img = 'https://baconmockup.com/640/360';
  // const product = props.products[0];
  return (
    <Card>
      <CardItem>
        <Left>
          <Thumbnail
            // square
            // large
            source={{uri: props.product.img}}
            style={{width: 110, height: 80, borderRadius: 10}}
          />
          <View style={styled.productTitle}>
            <Title>{props.product.product}</Title>
            <Subtitle>{props.product.description}</Subtitle>
          </View>
        </Left>
        <Right>
          <View>
            <Text>£ {props.product.price}0</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Ionicons name="ios-add" size={20} />
            <Text style={{fontSize: 15}}>1</Text>
            <Ionicons name="ios-remove" size={20} />
          </View>
        </Right>
      </CardItem>
    </Card>
  );
};

const styled = {
  productTitle: {alignItems: 'flex-start', top: -20, marginLeft: 10},
};

export default ProductCard;
