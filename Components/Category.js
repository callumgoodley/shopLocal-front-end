import React from 'react';
import {View, Text, Image} from 'react-native';

const Category = ({image, name}) => {
  return (
    <View style={styled.categoryBox}>
      {image && (
        <View style={styled.imageView}>
          <Image source={image} style={styled.image} />
        </View>
      )}

      <View style={!image ? styled.seeMoreText : styled.categoryText}>
        <Text style={styled.text}>{name}</Text>
      </View>
    </View>
  );
};

const styled = {
  text: {fontSize: 18, color: '#fff', fontWeight: '600'},
  categoryText: {
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
  categoryBox: {
    width: 120,
    borderColor: '#149C0C',
    borderWidth: 1,
    margin: 5,
    borderRadius: 20,
  },
  image: {
    flex: 1,
    width: null,
    resizeMode: 'contain',
    margin: 5,
  },
  imageView: {flex: 3},
};

export default Category;
