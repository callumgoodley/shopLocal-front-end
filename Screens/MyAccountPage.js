import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { logout } from '../actions/users';
import { getUser, postUser } from '../API';
import { or } from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native-gesture-handler';

function MyAccountPage({ user }) {
	const { full_name, telephone, address, postcode, email, paypal_email, order_history } = user;
	return (
		<View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
			<Text>Name: {full_name}</Text>
			<Text>E-mail: {email}</Text>
			<Text>Address: {address}</Text>
			<Text>Tel: {telephone}</Text>
			<Text>PostCode: {postcode}</Text>
			<Text>order history {order_history}</Text>
			<Text>paypal email:{paypal_email}</Text>
			<TouchableOpacity>
				<Text>edit my details</Text>
			</TouchableOpacity>
		</View>
	);
}

const mapStateToProps = (state) => {
	// console.log(state);
	return {
		user: state.userReducer.loggedInUser
	};
};

// const mapDispatchToProps = state => {};

export default connect(mapStateToProps)(MyAccountPage);
