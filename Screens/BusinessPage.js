import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';

class BusinessPage extends React.Component {
  render() {
    if (this.props.business.business) {
      const {business} = this.props.business;
      // console.log(business.productsArr);
      return (
        <View style={styled.imageView}>
          <View style={styled.imageView}>
            <Image source={{uri: business.img}} style={styled.image} />
          </View>
          <ScrollView style={styled.textBox}>
            <Text style={styled.name}>{business.business_name}</Text>
            <Text style={styled.secondLine}>
              {business.address} {business.postcode}
            </Text>
            <Text style={styled.secondLine}>{business.telephone}</Text>
            <Text style={styled.secondLine}>{business.type}</Text>

            <Text style={styled.story}>{business.story}</Text>
          </ScrollView>
        </View>
      );
    } else {
      const {business} = this.props;
      console.log(business.productsArr);
      return (
        <View style={styled.imageView}>
          <View style={styled.imageView}>
            <Image source={{uri: business.img}} style={styled.image} />
          </View>
          <ScrollView style={styled.textBox}>
            <Text style={styled.name}>{business.business_name}</Text>

            <Text style={styled.secondLine}>
              {business.address} {business.postcode}
            </Text>
            <Text style={styled.secondLine}>{business.telephone}</Text>
            <Text style={styled.secondLine}>{business.type}</Text>

            <Text style={styled.story}>{business.story}</Text>
          </ScrollView>
        </View>
      );
    }
  }
}

const styled = {
  name: {
    textAlign: 'right',
    color: '#149c0c',
    fontSize: 28,
    fontWeight: 'bold',
    padding: 5,
  },
  secondLine: {
    textAlign: 'right',
    color: '#149c0c',
    fontSize: 18,
    padding: 5,
  },
  type: {
    flex: 1,
    textAlign: 'right',
    color: '#149c0c',
    fontSize: 18,
    padding: 5,
  },
  story: {
    flex: 1,
    color: '#149c0c',
    fontSize: 16,
    padding: 5,
  },
  textBox: {
    flex: 1,
    color: '#149c0c',
    fontSize: 16,
    padding: 5,
    borderBottomColor: '#149c0c',
    borderBottomWidth: 1,
    borderTopColor: '#149c0c',
    borderTopWidth: 2,
  },
  contentContainer: {
    paddingVertical: 20,
  },
  imageView: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    resizeMode: 'cover',
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17,
  },
};

export default BusinessPage;
