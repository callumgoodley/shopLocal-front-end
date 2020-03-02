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
            <Text>£ {props.product.price}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            {props.addItem ? (
              <View>
                <Ionicons
                  onPress={() => props.addItem(props.product)}
                  name="ios-add"
                  size={30}
                />
              </View>
            ) : (
              <View>
                <Ionicons
                  onPress={() => props.removeItem(props.product)}
                  name="ios-trash"
                  size={30}
                />
              </View>
            )}
            {/* {props.removeItem && (
              <View>
                <Ionicons
                  onPress={() => props.removeItem(props.product)}
                  name="remove-circle-outline"
                  size={30}
                />
              </View>
            )} */}

            {/* <View style={{padding: 5}}>
              <Text style={{fontSize: 20}}>1</Text>
            </View> */}
            {/* <View>
              <Ionicons
                onPress={() => alert('alert-')}
                name="ios-remove"
                size={30}
              />
            </View> */}
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
