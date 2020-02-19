import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';
import firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyBKC1vkb7AQ-PhpblnLroF7f-ltSdN81n4',
	authDomain: 'shoplocal-f199e.firebaseapp.com/',
	dataBaseURL: 'https://shoplocal-f199e.firebaseio.com/'
};

const firebaseRef = firebase.initializeApp(config);

export const fbAuth = () => {
	LoginManager.logInWithPermissions([ 'public_profile', 'email' ]).then(
		function(result) {
			if (result.isCancelled) {
				console.log('Login cancelled');
			} else {
				AccessToken.getCurrentAccessToken().then(
					(accessTokenData) => {
						const credential = firebase.auth.FacebookAuthProvider.credential(accessTokenData.accessToken);
						firebase.auth().signInWithCredential(credential).then(
							(result) => {
								//Promise successful
							},
							(error) => {
								console.log(error);
							}
						);
					},
					(error) => {
						console.log(error);
					}
				);
			}
		},
		function(error) {
			console.log('An error occurred');
		}
	);
};
