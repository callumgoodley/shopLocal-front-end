import firebase from 'firebase';

export const config = {
	apiKey: 'AIzaSyBKC1vkb7AQ-PhpblnLroF7f-ltSdN81n4',
	authDomain: 'shoplocal-f199e.firebaseapp.com/',
	dataBaseURL: 'https://shoplocal-f199e.firebaseio.com/'
};

export const firebaseRef = firebase.initializeApp(config);
