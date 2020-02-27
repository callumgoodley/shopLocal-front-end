import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class Category extends React.Component {
	state = {
		loadFiltered: false
	};

	render() {
		const { image, name, type, loadBusinesses, setCategory } = this.props;

		return (
			<TouchableOpacity
				onPress={() => {
					setCategory(type);
				}}
				style={styled.categoryBox}
			>
				{image && (
					<View style={styled.imageView}>
						<Image source={image} style={styled.image} />
					</View>
				)}
				<View style={!image ? styled.seeMoreText : styled.categoryText}>
					<Text style={styled.text}>{name}</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.userReducer.loggedInUser,
		businesses: state.reducer.businesses
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		add: (user) => dispatch(login(user)),
		add: (businesses) => dispatch(loadBusinesses(businesses))
	};
};

const styled = {
	text: { fontSize: 18, color: '#fff', fontWeight: '600' },
	categoryText: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#149C0C',
		borderBottomEndRadius: 20,
		borderBottomStartRadius: 20
	},
	seeMoreText: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#149C0C',
		borderRadius: 20
	},
	categoryBox: {
		width: 120,
		borderColor: '#149C0C',
		borderWidth: 1,
		margin: 5,
		borderRadius: 20
	},
	image: {
		flex: 1,
		width: null,
		resizeMode: 'contain',
		margin: 5
	},
	imageView: { flex: 3 }
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
