import React, {Component} from 'react';
import {Text, ScrollView, Button} from 'react-native';
import {Container, Header, Content, Tab, Tabs} from 'native-base';
import BusinessPage from './BusinessPage';
import ProductCard from '../Components/ProductCard';
// import BasketPage from './BasketPage';

export default class BusinessTabs extends Component {
  state = {
    products: [],
  };

  addItem = item => {
    this.setState(currentState => {
      return {products: [...currentState.products, item]};
    });
  };

  render() {
    console.log(this.state.products);
    const {business} = this.props.route.params;
    // const business1 = this.props;
    // console.log(business.business.productsArr);

    return (
      <Container>
        <Header>
          <Button
            title="Basket"
            onPress={() =>
              this.props.navigation.navigate('Basket', {
                products: this.state.products,
              })
            }
          />
        </Header>
        <Tabs>
          <Tab heading="Info">
            <BusinessPage business={business} />
          </Tab>
          <Tab heading="Shop">
            <ScrollView>
              {business.business.productsArr.map(product => {
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
