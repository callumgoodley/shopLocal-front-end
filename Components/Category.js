import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

class Category extends React.Component {
  render() {
    const {image, name} = this.props;
    return (
      <View style={styled.catBox}>
        {image && (
          <View style={{flex: 3}}>
            <Image source={image} style={styled.image} />
          </View>
        )}

        <View style={!image ? styled.seeMoreText : styled.catsText}>
          <Text style={styled.text}>{name}</Text>
        </View>
      </View>
    );
  }
}

const styled = {
  text: {fontSize: 18, color: '#fff', fontWeight: '600'},
  catsText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#149C0C',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  seeMoreText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#149C0C',
    borderRadius: 20,
  },
  catBox: {
    width: 120,
    borderColor: '#149C0C',
    borderWidth: 1,
    margin: 5,
    borderRadius: 20,
  },
  image: {
    flex: 1,
    width: null,
    // height: null,
    resizeMode: 'contain',
    margin: 5,
  },
};

export default Category;
