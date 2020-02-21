import axios from 'axios';

export const getUsers = () => {
	return axios
		.get('https://shoplocal-f199e.firebaseio.com/users.json')
		.then((users) => {
			console.log(users);
		})
		.catch((err) => {
			console.log('error: ' + err);
		});
};

export const postUser = (uid, typedEmail, fullName, tel, address, postcode, payPal) => {
	console.log('In post user:' + uid, typedEmail, fullName, tel, address, postcode, payPal);
	// ?auth = fqO17Tc9N9Q8bsRrO843HKCHV8rFnp1FgKHrg3fU
	return axios
		.post('https://shoplocal-f199e.firebaseio.com/users.json', {
			UID: uid,
			full_name: fullName,
			telephone: tel,
			address: address,
			postcode: postcode,
			email: typedEmail,
			paypal_email: payPal,
			order_history: []
		})
		.then((res) => {
			console.log('success' + res);
		})
		.catch((err) => {
			console.log('in api' + err + err.body);
		});
};
