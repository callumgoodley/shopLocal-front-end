import React from 'react';
import { Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ShopCard = (props) => {
	const { business } = props;
	const navigation = useNavigation();
	if (props.business) {
		return (
			<TouchableOpacity
				style={styled.card}
				onPress={() => {
					navigation.navigate('Business', { business: props });
				}}
			>
				<View style={styled.imageView}>
					<Image source={{ uri: business.img }} style={styled.image} />
				</View>
				<View style={styled.text}>
					<Text style={styled.cardTextName}>{business.business_name}</Text>
					<Text style={styled.cardTextType}>{business.type}</Text>
				</View>
				<Button
					title="go to shop"
					onPress={() => {
						navigation.navigate('Business', { business: props });
					}}
				/>
			</TouchableOpacity>
		);
	} else {
		return <Text>Loading...</Text>;
	}
};

const styled = {
	card: {
		flex: 1,
		backgroundColor: '#fff',
		// backgroundColor: '#149c0c',
		// backgroundColor: 'rgba(20, 156, 12, 0.3)',
		borderRadius: 20,
		borderColor: '#149c0c',
		borderWidth: 3,
		height: 180,
		marginTop: 20
	},
	cardTextName: {
		padding: 2,
		fontSize: 18,
		color: '#149c0c'
		// color: '#fff'
	},
	cardTextType: {
		paddingLeft: 4,
		fontSize: 15,
		color: '#149c0c'
		// color: '#fff'
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
		borderTopRightRadius: 17,
		borderTopLeftRadius: 17
	}
};

export default ShopCard;
