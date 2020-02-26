import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import BusinessPage from './BusinessPage';
// import BasketPage from './BasketPage';

export default class BusinessTabs extends Component {
	render() {
		console.log('IN TABS >> ', this.props.route.params.business);
		const { business } = this.props.route.params;
		return (
			<Container>
				<Header hasTabs />
				<Tabs>
					<Tab heading="Info">
						<BusinessPage business={business} />
					</Tab>
					<Tab heading="Shop">
						<Text>SHOP HERE... </Text>
					</Tab>
				</Tabs>
			</Container>
		);
	}
}
