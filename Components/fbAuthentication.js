// import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';
// import firebase from 'firebase';

// fbAuth = () => {
// 	LoginManager.logInWithPermissions([ 'public_profile', 'email' ]).then(
// 		function(result) {
// 			if (result.isCancelled) {
// 				console.log('Login cancelled');
// 			} else {
// 				AccessToken.getCurrentAccessToken().then(
// 					(accessTokenData) => {
// 						const credential = firebase.auth.FacebookAuthProvider.credential(accessTokenData.accessToken);
// 						firebase.auth().signInWithCredential(credential).then(
// 							(result) => {
// 								//Promise successful
// 							},
// 							(error) => {
// 								console.log(error);
// 							}
// 						);
// 					},
// 					(error) => {
// 						console.log(error);
// 					}
// 				);
// 			}
// 		},
// 		function(error) {
// 			console.log('An error occurred');
// 		}
// 	);
// };
