import axios from 'axios';

export const getUsers = () => {
	return axios.get('https://shoplocal-f199e.firebaseio.com/users.json').then((users) => {}).catch((err) => {
		console.log('error: ' + err);
	});
};

export const getUser = (uid) => {
	return axios
		.get(`https://shoplocal-f199e.firebaseio.com/users.json`)
		.then((users) => {
			const userData = JSON.stringify(users);
			const parsedData = JSON.parse(userData);
			for (let key in parsedData.data) {
				if (parsedData.data[key].UID === uid) {
					return { ...parsedData.data[key], key };
				}
			}
		})
		.catch((err) => {
			console.log('error: ' + err);
		});
};

export const getBusinesses = (type) => {
	return axios
		.get('https://shoplocal-f199e.firebaseio.com/business.json')
		.then((businesses) => {
			const filteredBusinesses = filterBusinesses(type, businesses);
			return filteredBusinesses;
		})
		.catch((err) => 'error occurred: ' + err);
};

export const postBusiness = () => {
	return axios
		.post('https://shoplocal-f199e.firebaseio.com/business.json', {
			business_name: "O'Kon Group",
			owner_name: 'Jobyna Webbe',
			email: 'jwebbet@comsenz.com',
			address: '329 Sunnyside Center',
			telephone: '+86-336-127-4113',
			postcode: 'M2 3AG',
			lat: 53.480765,
			lng: -2.239605,
			type: 'other',
			story:
				'We sell balloons, cards, badges, gift,s cards, wrapping paper, candles anything to do with a party. We pride ourselves with repeat business, we love to see our customers year after year.',
			paypal_email: null,
			business_id: ''
		})
		.then((res) => {
			console.log('success' + res);
		})
		.catch((err) => {
			console.log('in api' + err + err.body);
		});
};

export const postUser = (uid, typedEmail, fullName, tel, address, postcode, payPal) => {
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
			console.log('success', res);
		})
		.catch((err) => {
			console.log('in api', err, err.body);
		});
};

export const filterBusinesses = (type, businesses) => {
	const businessesData = businesses.data;
	if (type) {
		const businessesObj = {};
		for (let key in businessesData) {
			if (businessesData[key].type === type) businessesObj[key] = businessesData[key];
		}
		businesses.data = businessesObj;
		return businesses;
	} else {
		return businesses;
	}
};
