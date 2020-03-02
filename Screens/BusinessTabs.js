import React, {Component} from 'react';
import {ScrollView, Button} from 'react-native';
import {Container, Header, Tab, Tabs} from 'native-base';
import BusinessPage from './BusinessPage';
import ProductCard from '../Components/ProductCard';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class BusinessTabs extends Component {
  state = {
    products: [],
  };

  addItem = item => {
    alert('added to cart');
    this.setState(currentState => {
      return {products: [...currentState.products, item]};
    });
  };

  removeItem = item => {
    this.setState(currentState => {
      return {
        products: currentState.products.filter(product => {
          return product !== item;
        }),
      };
    });
  };

  componentDidMount() {
    this.props.navigation.setOptions({
      title: this.props.route.params.business.business_name,
    });
  }
  render() {
    console.log(this.state.products);
    const {business} = this.props.route.params;

    return (
      <Container>
        <Header>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('Basket', {
                products: this.state.products,
                removeItem: this.removeItem,
              })
            }>
            <Ionicons name="ios-basket" size={40} color={'#149C0C'} />
          </TouchableOpacity>
        </Header>
        <Tabs>
          <Tab heading="Info">
            <BusinessPage business={business} />
          </Tab>
          <Tab heading="Shop">
            <ScrollView>
              {business.productsArr.map(product => {
                return (
                  <ProductCard
                    product={product}
                    addItem={this.addItem}
                    key={product.id}
                  />
                );
              })}
            </ScrollView>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
