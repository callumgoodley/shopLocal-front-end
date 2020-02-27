import React from 'react';
import { TouchableOpacity, TextInput, Text, StyleSheet, View } from 'react-native';
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';
import firebase from 'firebase';
import { config, firebaseRef } from '../Components/firebaseConfig';
import { postUser, postBusiness } from '../API';

class SignUpPage extends React.Component {
	state = {
		isAuthenticated: false,
		typedEmail: '',
		typedPassword: '',
		confirmedPassword: '',
		firstName: '',
		lastName: '',
		tel: '',
		address: '',
		postcode: '',
		payPal: ''
		// user: null,
	};
	unsubscriber = null;

	addUser = () => {
		const { typedEmail, firstName, lastName, tel, address, postcode, payPal, user } = this.state;
		postUser(user.user.uid, typedEmail, firstName, lastName, tel, address, postcode, payPal);
	};

	onSignUp = () => {
		const { typedEmail, typedPassword, confirmedPassword } = this.state;
		const { navigation } = this.props;
		if (typedPassword === confirmedPassword)
			firebase
				.auth()
				.createUserWithEmailAndPassword(typedEmail, typedPassword)
				.then((signedUpUser) => {
					alert('account created, you can now login');
					this.setState({ user: signedUpUser });
				})
				.then(() => {
					this.addUser();
				})
				.then(() => {
					navigation.navigate('Login');
				})
				.catch((err) => {
					alert(err);
				});
		else alert('passwords do not match');
	};

	addBusiness = () => {
		postBusiness();
	};

	render() {
		return (
			<View style={styles.login}>
				<Text style={styles.header}>shopLocal.</Text>
				<TextInput
					style={styles.textinput}
					placeholder="First name"
					onChangeText={(text) => {
						this.setState({ firstName: text });
					}}
				/>
				<TextInput
					style={styles.textinput}
					placeholder="Last name"
					onChangeText={(text) => {
						this.setState({ lastName: text });
					}}
				/>
				<TextInput
					style={styles.textinput}
					placeholder="Telephone"
					onChangeText={(text) => {
						this.setState({ tel: text });
					}}
				/>
				<TextInput
					style={styles.textinput}
					placeholder="Address"
					onChangeText={(text) => {
						this.setState({ address: text });
					}}
				/>
				<TextInput
					style={styles.textinput}
					placeholder="Postcode"
					onChangeText={(text) => {
						this.setState({ postcode: text });
					}}
				/>
				<TextInput
					style={styles.textinput}
					placeholder="email address"
					onChangeText={(text) => {
						this.setState({ typedEmail: text });
					}}
				/>
				<TextInput
					style={styles.textinput}
					placeholder="payPal Email"
					onChangeText={(text) => {
						this.setState({ payPal: text });
					}}
				/>
				<TextInput
					style={styles.textinput}
					placeholder="password"
					secureTextEntry={true}
					onChangeText={(text) => {
						this.setState({ typedPassword: text });
					}}
				/>
				<TextInput
					style={styles.textinput}
					placeholder="confirm password"
					secureTextEntry={true}
					onChangeText={(text) => {
						this.setState({ confirmedPassword: text });
					}}
				/>
				<TouchableOpacity style={styles.button} onPress={this.onSignUp}>
					<Text style={styles.whiteText}>Sign up.</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	login: {
		backgroundColor: '#fff',
		alignItems: 'center',
		alignSelf: 'stretch',
		justifyContent: 'center',
		padding: 40,
		...StyleSheet.absoluteFillObject
	},
	header: {
		alignSelf: 'stretch',
		fontSize: 35,
		textAlign: 'right',
		color: '#149c0c',
		paddingBottom: 10,
		marginBottom: 30
	},
	signUp: {
		alignSelf: 'stretch',
		fontSize: 20,
		color: '#149c0c',
		marginTop: 30
	},
	textinput: {
		alignSelf: 'stretch',
		height: 40,
		marginBottom: 15,
		color: '#b2c3d9',
		borderBottomColor: '#f8f8f8',
		borderBottomWidth: 1
	},
	button: {
		alignSelf: 'stretch',
		alignItems: 'center',
		padding: 10,
		marginTop: 10,
		backgroundColor: '#149c0c'
	},
	signUpinfo: {
		marginTop: 10
	},
	fbButton: {
		alignSelf: 'stretch',
		alignItems: 'center',
		padding: 10,
		marginTop: 10,
		backgroundColor: '#226ef2'
	},
	whiteText: {
		color: '#fff'
	}
});

export default SignUpPage;
