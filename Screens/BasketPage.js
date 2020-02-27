import React from 'react';
import {Text, ScrollView, View, Button} from 'react-native';
import ProductCard from '../Components/ProductCard';
// import {Button} from 'native-base';

class BasketPage extends React.Component {
  state = {
    totalPrice: 0,
  };
  render() {
    const products = this.props.route.params.products;
    console.log('products', products);
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 5}}>
          <ScrollView style={{flex: 1}}>
            {products.map(product => {
              return <ProductCard product={product} key={product.id} />;
            })}
          </ScrollView>
        </View>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 30}}>Total: {this.state.totalPrice}</Text>
          <Button
            title={'PayPal'}
            onPress={() => this.props.navigation.navigate('Paypal')}
          />
        </View>
      </View>
    );
  }
}

export default BasketPage;
