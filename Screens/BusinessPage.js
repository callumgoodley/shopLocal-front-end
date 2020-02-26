import React from 'react';
import { Text, View, Image } from 'react-native';

class BusinessPage extends React.Component {
	render() {
		console.log('BP >>', this.props.route.params.business.business);
		const business = this.props.route.params.business.business;
		console.log(business.img);
		return (
			<View>
				<View style={styled.imageView}>
					<Image source={{ uri: business.img }} />
				</View>
				<View>
					<Image source={{ uri: business.img }} />

					<Text style={styled.name}>{business.business_name}</Text>

					<Text style={styled.secondLine}>
						{business.type} {business.address} {business.postcode}
					</Text>

					<Text style={styled.story}>{business.story}</Text>
				</View>
			</View>
		);
	}
}

const styled = {
	name: {
		fontSize: 24,
		padding: 5
	},
	secondLine: {
		fontSize: 16,
		paddingLeft: 5,
		paddingBottom: 5
	},
	story: {
		padding: 5
	},
	imageView: { flex: 1 },
	image: {
		// flex: 1,
		// width: null,
		// resizeMode: 'cover',
		// borderTopRightRadius: 17,
		// borderTopLeftRadius: 17
	}
};

export default BusinessPage;
