import React from 'react';
import { Text } from 'react-native';

class BusinessPage extends React.Component {
	render() {
		console.log(props);
		return <Text>Business page: {props}</Text>;
	}
}
export default BusinessPage;
