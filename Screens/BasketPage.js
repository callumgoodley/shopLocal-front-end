import React from 'react';
import {Text, ScrollView, View, Button, Modal} from 'react-native';
import ProductCard from '../Components/ProductCard';
import {WebView} from 'react-native-webview';
import Paypal from './Paypal';

class BasketPage extends React.Component {
  state = {
    totalPrice: 0,
    paypalModalVisible: false,
    itemToRemove: '',
  };

  _paypalToggleModal = () => {
    this.setState({paypalModalVisible: !this.state.isModalVisible});
  };
  handleResponse = data => {
    if (data.title === 'success') {
      this.setState({paypalModalVisible: !this.state.paypalModalVisible}, () =>
        alert('Status is success'),
      );
    } else if (data.title === 'cancel') {
      this.setState({paypalModalVisible: !this.state.paypalModalVisible}, () =>
        alert('Status is cancel'),
      );
    } else {
      return;
    }
  };

  render() {
    const products = this.props.route.params.products;
    console.log('products', products);
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 5}}>
          <ScrollView style={{flex: 1}}>
            {products.map(product => {
              return (
                <ProductCard
                  product={product}
                  key={product.id}
                  removeItem={this.props.route.params.removeItem}
                />
              );
            })}
          </ScrollView>
        </View>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 30}}>Total: £{this.state.totalPrice}</Text>
          <Paypal />
        </View>
      </View>
    );
  }

  componentDidMount() {
    const products = this.props.route.params.products;
    products.forEach(product => {
      this.setState(currentState => {
        return {totalPrice: currentState.totalPrice + product.price};
      });
    });
  }
}

export default BasketPage;
