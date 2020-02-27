import React from 'react';

import { connect } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import { logout } from '../actions/users';
import { getUser, postUser, patchUser } from '../API';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-elements';

class MyAccountPage extends React.Component {
	state = {
		key: '',
		UID: '',
		firstName: '',
		lastName: '',
		telephone: '',
		address: '',
		postcode: ''
	};

	render() {
		// console.log(this.state);
		const { firstName, lastName, telephone, address, postcode } = this.props.user;
		console.log('account props ', this.props.user);
		return (
			<View>
				<View style={styled.avatar}>
					<Avatar
						size={100}
						rounded
						title={firstName.charAt(0) + lastName.charAt(0)}
						showEditButton
						onPress={() => console.log('change pic')}
					/>
				</View>
				<View style={styled.inputBox}>
					<Text style={{ fontSize: 10 }}>First Name:</Text>
					<TextInput
						style={styled.inputs}
						onChangeText={(name) => this.handleFirstNameChange(name)}
						value={firstName}
					/>
				</View>
				<View style={styled.inputBox}>
					<Text style={{ fontSize: 10 }}>Last Name:</Text>
					<TextInput
						style={styled.inputs}
						onChangeText={(name) => this.handleLastNameChange(name)}
						value={lastName}
					/>
				</View>
				<View style={styled.inputBox}>
					<Text>Address:</Text>
					<TextInput
						style={styled.inputs}
						onChangeText={(address) => this.handleAddressChange(address)}
						value={address}
					/>
				</View>
				<View style={styled.inputBox}>
					<Text>PostCode:</Text>
					<TextInput
						style={styled.inputs}
						onChangeText={(postcode) => this.handlePostcodeChange(postcode)}
						value={postcode}
					/>
				</View>
				<View style={styled.inputBox}>
					<Text>Tel:</Text>
					<TextInput
						style={styled.inputs}
						onChangeText={(tel) => this.handleTelChange(tel)}
						value={telephone}
					/>
				</View>
				<Button title={'Confirm Changes'} onPress={() => patchUser(this.state)} />
				<Button title={'View Order History'} onPress={() => this.props.navigation.navigate('Order History')} />
			</View>
		);
	}

	handleFirstNameChange = (name) => {
		this.setState({ firstName: name });
	};

	handleLastNameChange = (name) => {
		this.setState({ lastName: name });
	};

	handleTelChange = (input) => {
		this.setState({ telephone: input });
	};

	handleAddressChange = (input) => {
		this.setState({ address: input });
	};

	handlePostcodeChange = (input) => {
		this.setState({ postcode: input });
	};

	componentDidMount() {
		console.log(this.props);
		// 	const { key, UID, firstName, lastName, telephone, address, postcode } = this.props.user;
		// 	this.setState({
		// 		key,
		// 		UID,
		// 		firstName,
		// 		lastName,
		// 		telephone,
		// 		address,
		// 		postcode
		// 	});
		// }
	}
}

const styled = {
	inputBox: {
		padding: 5,
		alignItems: 'center'
	},
	inputs: {
		width: 300,
		borderColor: 'gray',
		borderWidth: 1,
		fontSize: 30,
		padding: 5
	},
	avatar: {
		padding: 30,
		alignItems: 'center'
	}
};

const mapStateToProps = (state) => {
	console.log('IN MAP STATE 2 PROPS ', state);
	return {
		user: state.userReducer.loggedInUser
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		add: (user) => dispatch(login(user))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MyAccountPage);
