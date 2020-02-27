import React from 'react';
import {Text, ScrollView, View, Button} from 'react-native';
import ProductCard from '../Components/ProductCard';
// import {Button} from 'native-base';

class BasketPage extends React.Component {
  state = {
    BuisnessData: {
      address: 'Goodison Road',
      business_id: '1',
      business_name: 'Carlo Fantastico',
      email: 'doncarlo@gmail.com',
      img:
        'https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      lat: 53.4823,
      lng: -2.23569,
      owner_name: 'Mr Ancelotti',
      'pending orders': [],
      postcode: 'M1 1',
      'previous orders': [],
      products:
        '{{img: https://picsum.photos/100, product: Brown Bread Loaf, price: 2.20}, {img: https://picsum.photos/100, product: White Bread Loaf, price:2.20},{img: https://picsum.photos/100, product: Croissant, price: 1.50}, {img: https://picsum.photos/100, product: Sausage Roll, price: 1.00}, {img: https://picsum.photos/100, product: White Bap, price: 0.80}, {img: https://picsum.photos/100, product: Brown Bap, price: 0.80}, {img: https://picsum.photos/100, product: Choc Chip Cookie, price: 1.00}}',
      productsArr: [
        {
          id: 1,
          img:
            'https://lh3.googleusercontent.com/proxy/rVZIYKwisRTE5s3D8AzXlAuZVfSMo9Lo1Wi3ZmfNBQ6CJVKgxFp9TA0Rd2Y28YrtyNw7uGXiRWXZuU2RuZB0gU9FAUh_ebPTqWRM0jc3jEF_V-NEpgU9uaRppNT-Xw3kiOqr3gpShd73Lrnebg',
          product: 'Brown Bread Loaf',
          price: 2.2,
          description: '',
        },
        {
          id: 2,
          img:
            'https://www.browneyedbaker.com/wp-content/uploads/2016/05/white-bread-51-SM.jpg',
          product: 'White Bread Loaf',
          price: 2.2,
          description: '',
        },
        {
          id: 3,
          img:
            'https://france-amerique.com/wp-content/uploads/2017/10/croissant-french-e1509026890362.jpg',
          product: 'Croissant',
          price: 1.5,
          description: '',
        },
        {
          id: 4,
          img:
            'https://cms.splendidtable.org/sites/default/files/styles/w2000/public/Savory-Sausage-Rolls_c_Emli-Bendixen-LEDE.jpg?itok=hMP-biYM',
          product: 'Sausage Roll',
          price: 1.0,
          description: '',
        },
        {
          id: 5,
          img:
            'https://loveincorporated.blob.core.windows.net/contentimages/gallery/45912e49-eb9d-4792-9464-d5fbc13c5cc2-tea_cake.jpg',
          product: 'White Bap',
          price: 0.8,
          description: '',
        },
        {
          id: 6,
          img:
            'https://lh3.googleusercontent.com/proxy/XYQwNPGzcdO2xVdmcBclJTGMXcR1vZzHHWM_9FTl3V0bhG3-XkzPtAy2dpM6tG_vV7zt08yivlRhRcmZWMaOh9kaJgkQ6u9z5i_i2aBRl4cUmTyiyNynINoq6vzVwYwrlmxaXT35',
          product: 'Brown Bap',
          price: 0.8,
          description: '',
        },
        {
          id: 7,
          img:
            'https://www.handletheheat.com/wp-content/uploads/2018/02/BAKERY-STYLE-CHOCOLATE-CHIP-COOKIES-9.jpg',
          product: 'Choc Chip Cookie',
          price: 1.0,
          description: '',
        },
      ],
      story:
        'The finest bakery in the UK managed by the most magnifico manager in the world. Carlo Fantastico is an award-winning family-run business, based on the blue side, baking a fabulous range of amazing cakes and treats such as macarons, meringues and doughnuts. We offer Cakes for every occasion, Jar Cakes, Macaroons, Gourmet Brownies, Cupcakes, Afternoon Tea packages and the Champions League of baked cookies',
      telephone: '+81-696-811-8989',
      type: 'bakery',
    },
    totalPrice: 0,
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 5}}>
          <ScrollView style={{flex: 1}}>
            {/* <ProductCard products={this.state.BuisnessData.productsArr} /> */}
            {this.state.BuisnessData.productsArr.map(product => {
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
