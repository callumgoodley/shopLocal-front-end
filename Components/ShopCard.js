import React from 'react';
import { Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ShopCard = (props) => {
	const { img, name, category } = props;
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			style={styled.card}
			onPress={() => {
				navigation.navigate('Business');
			}}
		>
			<View style={styled.imageView}>
				<Image source={{ uri: img }} style={styled.image} />
			</View>
			<View style={styled.text}>
				<Text>{name}</Text>
				<Text>{category}</Text>
			</View>
			<Button
				title="go to shop"
				onPress={() => {
					navigation.navigate('Business');
				}}
			/>
		</TouchableOpacity>
	);
};

const styled = {
	card: {
		flex: 1,
		backgroundColor: 'rgba(20, 156, 12, 0.3)',
		borderRadius: 20,
		height: 200,
		marginTop: 20
	},
	text: {
		flex: 1,
		justifyContent: 'flex-start'
	},
	imageView: { flex: 1 },
	image: {
		flex: 1,
		width: null,
		resizeMode: 'cover',
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20
	}
};

export default ShopCard;
