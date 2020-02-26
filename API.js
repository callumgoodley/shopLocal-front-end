import axios from 'axios';

export const getUsers = () => {
  return axios
    .get('https://shoplocal-f199e.firebaseio.com/users.json')
    .then(users => {
      console.log(users);
    })
    .catch(err => {
      console.log('error: ' + err);
    });
};

export const getUser = uid => {
  return axios
    .get(`https://shoplocal-f199e.firebaseio.com/users.json`)
    .then(users => {
      const userData = JSON.stringify(users);
      const parsedData = JSON.parse(userData);
      for (let key in parsedData.data) {
        if (parsedData.data[key].UID === uid) {
          return {...parsedData.data[key], key};
        }
      }
    })
    .catch(err => {
      console.log('error: ' + err);
    });
};

export const patchUser = ({
  key,
  firstName,
  lastName,
  telephone,
  address,
  postcode,
}) => {
  return axios
    .patch(`https://shoplocal-f199e.firebaseio.com/users/${key}.json`, {
      firstName: firstName,
      lastName: lastName,
      telephone: telephone,
      address: address,
      postcode: postcode,
    })
    .then(res => {
      console.log('success');
    })
    .catch(err => {
      console.log('in api' + err + err.body);
    });
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
      business_id: '',
    })
    .then(res => {
      console.log('success' + res);
    })
    .catch(err => {
      console.log('in api' + err + err.body);
    });
};

export const postUser = (
  uid,
  typedEmail,
  firstName,
  lastName,
  tel,
  address,
  postcode,
  payPal,
) => {
  return axios
    .post('https://shoplocal-f199e.firebaseio.com/users.json', {
      UID: uid,
      firstName: firstName,
      lastName: lastName,
      telephone: tel,
      address: address,
      postcode: postcode,
      email: typedEmail,
      paypal_email: payPal,
      order_history: [],
    })
    .then(res => {
      console.log('success' + res);
    })
    .catch(err => {
      console.log('in api' + err + err.body);
    });
};

// export const postUserImg = (key, img) => {
//   return axios
//     .post(`https://shoplocal-f199e.firebaseio.com/users/${key}.json`, {
//       img: img,
//     })
//     .then(res => {
//       console.log('success' );
//     })
//     .catch(err => {
//       console.log('in api' + err + err.body);
//     });
// };
