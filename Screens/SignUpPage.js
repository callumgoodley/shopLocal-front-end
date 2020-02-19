import React from 'react';
import { TouchableOpacity, TextInput, Text, StyleSheet, View } from 'react-native';
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';
import firebase from 'firebase';
import { fbAuth } from '../Components/fbAuthentication';

class signUpPage extends React.Component {
	state = {
		Login: 'guest'
	};

	render() {
		return (
			<View style={styles.login}>
				<Text style={styles.header}>shopLocal.</Text>
				<TextInput style={styles.textinput} placeholder="full name" placeholderTextColor="'#36485f'" />
				<TextInput style={styles.textinput} placeholder="telephone" placeholderTextColor="'#36485f'" />
				<TextInput style={styles.textinput} placeholder="address" placeholderTextColor="'#36485f'" />
				<TextInput style={styles.textinput} placeholder="post code" placeholderTextColor="'#36485f'" />
				<TextInput style={styles.textinput} placeholder="email address" placeholderTextColor="'#36485f'" />
				<TextInput style={styles.textinput} placeholder="password" placeholderTextColor="'#36485f'" />
				<TextInput style={styles.textinput} placeholder="paypal email" placeholderTextColor="'#36485f'" />
				<TouchableOpacity style={styles.button}>
					<Text style={styles.whiteText}>Sign up.</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={fbAuth} style={styles.fbButton}>
					<Text style={styles.whiteText}>Sign up with Facebook.</Text>
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
