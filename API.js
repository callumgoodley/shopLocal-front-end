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

export const getUser = (uid) => {
	return axios
		.get(`https://shoplocal-f199e.firebaseio.com/users.json`)
		.then((users) => {
			const userData = JSON.stringify(users);
			const parsedData = JSON.parse(userData);
			for (let key in parsedData.data) {
				if (parsedData.data[key].UID === uid) {
					return parsedData.data[key];
				}
			}
		})
		.catch((err) => {
			console.log('error: ' + err);
		});
};

export const getBusinesses = () => {
	return axios
		.get('https://shoplocal-f199e.firebaseio.com/business.json')
		.then((businesses) => {
			return businesses;
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
			console.log('success' + res);
		})
		.catch((err) => {
			console.log('in api' + err + err.body);
		});
};

export const makePayment = () => {
	return axios
		.post(
			'https://api.sandbox.paypal.com/v1/oauth2/token',
			{ grant_type: 'client_credentials' },
			{
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					Authorization:
						'QVhMQWkxQ043RjRrU19pUEJHRzJ5RWs3bWRKUDZVMWNleFprZE1YNW5PTEdRbzlXdWVIZkE4NkdiM3hWdWxUWjQ5cm1WVnEyVU5zQXhUaHc6RU1XWkZxTThRSzl5TG1PSVVvN1lFdEY5WDg3WmtqaElEN2IwbzRVVDF0d3g3RTBPV200SWlhTFducmh1Y2t1UDBjVG9XMW96azhuUGh5WWc=' // Your Authorization Value
				}
			}
		)
		.then((response) => {
			console.log(response.data.access_token);

			// 	axios
			// 		.post(
			// 			'https://api.sandbox.paypal.com/v1/payments/payment',
			// 			{ Details }, // you can get data details from https://developer.paypal.com/docs/api/payments/v1/
			// 			{
			// 				headers: {
			// 					'Content-Type': 'application/json',
			// 					Authorization: `Bearer ${response.data.access_token}`
			// 				}
			// 			}
			// 		)
			// 		.then((response) => {
			// 			const { id, links } = response.data;
			// 			const approvalUrl = links.find((data) => data.rel == 'approval_url');

			// 			console.log(id);
			// 			console.log(approvalUrl);
			// 		})
			// 		.catch((err) => {
			// 			console.log('ERROR1 ', { ...err });
			// 		});
		})
		.catch((err) => {
			console.log('ERROR2 ', { ...err });
		});
};
