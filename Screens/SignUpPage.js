import React from 'react';
import { TouchableOpacity, TextInput, Text, StyleSheet, View } from 'react-native';
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';
import firebase from 'firebase';
import { config, firebaseRef } from '../Components/firebaseConfig';
import { postUser } from '../API';

class signUpPage extends React.Component {
	state = {
		isAuthenticated: false,
		typedEmail: '',
		typedPassword: '',
		confirmedPassword: '',
		fullName: '',
		tel: '',
		address: '',
		postcode: '',
		payPal: '',
		user: null
	};
	unsubscriber = null;

	addUser = () => {
		const { typedEmail, fullName, tel, address, postcode, payPal, user } = this.state;
		postUser(user.user.uid, typedEmail, fullName, tel, address, postcode, payPal);
	};

	onSignUp = () => {
		const { typedEmail, typedPassword, confirmedPassword } = this.state;
		if (typedPassword === confirmedPassword)
			firebase
				.auth()
				.createUserWithEmailAndPassword(typedEmail, typedPassword)
				.then((signedUpUser) => {
					alert('account created');
					this.setState({ user: signedUpUser });
				})
				.then(() => {
					this.addUser();
				})
				.catch((err) => {
					console.log('theres been an error' + err);
				});
		else alert('passwords do not match');
	};

	componentDidMount() {
		this.unsubscriber = firebase.auth().onAuthStateChanged((changedUser) => {
			console.dir('changed user: ' + changedUser.email);
			this.setState({ user: changedUser });
			console.log('state user: ' + this.state.user.email);
		});
	}

	componentWillUnmount() {
		if (this.unsubscriber) {
			this.unsubscriber();
		}
	}

	render() {
		return (
			<View style={styles.login}>
				<Text style={styles.header}>shopLocal.</Text>
				<TextInput
					style={styles.textinput}
					placeholder="full name"
					onChangeText={(text) => {
						this.setState({ fullName: text });
					}}
				/>
				<TextInput
					style={styles.textinput}
					placeholder="telephone"
					onChangeText={(text) => {
						this.setState({ tel: text });
					}}
				/>
				<TextInput
					style={styles.textinput}
					placeholder="address"
					onChangeText={(text) => {
						this.setState({ address: text });
					}}
				/>
				<TextInput
					style={styles.textinput}
					placeholder="postcode"
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
					placeholder="payPal email"
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
				<TouchableOpacity>
					<Text style={styles.signUp}>Go back to login.</Text>
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

export default signUpPage;
