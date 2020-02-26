navigator.geolocation = require('@react-native-community/geolocation');

import React from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import ShopCard from './ShopCard';

Geolocation.setRNConfiguration({
	skipPermissionRequests: true,
	authorizationLevel: 'whenInUse'
});

class MapComponent extends React.Component {
	state = {
		err: null,
		latitude: 1,
		longitude: 1
	};

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				this.setState({
					latitude: position.coords.latitude,
					longitude: position.coords.longitude
				});
			},
			(err) => this.setState({ err: err.message })
			// {enableHighAccuracy: true, timeout: 20000, maximumAge: 2000},
		);
	}

	makeBusinessesArr = (data) => {
		const arr = [];
		const keys = Object.keys(data);
		for (let i = 0; i < keys.length; i++) {
			let key = keys[i];
			arr.push(data[key]);
			data[key].GoogleID = key;
		}
		return arr;
	};

	render() {
		if (this.props.shops) {
			const businessArr = this.makeBusinessesArr(this.props.shops.data);

			return (
				<MapView
					region={{
						latitude: this.state.latitude,
						longitude: this.state.longitude,
						latitudeDelta: 0.009,
						longitudeDelta: 0.01
					}}
					style={styled.mapView}
					showsUserLocation={true}
					showsMyLocationButton={true}
					followsUserLocation={true}
				>
					{businessArr.map((business) => {
						return (
							<Marker
								key={business.business_id}
								coordinate={{
									latitude: business.lat,
									longitude: business.lng
								}}
							>
								<Callout>
									<View style={styled.shopCardView}>
										<ShopCard business={business} />
									</View>
								</Callout>
							</Marker>
						);
					})}
				</MapView>
			);
		} else {
			return (
				<MapView
					region={{
						latitude: this.state.latitude,
						longitude: this.state.longitude,
						latitudeDelta: 0.009,
						longitudeDelta: 0.01
					}}
					style={styled.mapView}
					showsUserLocation={true}
					showsMyLocationButton={true}
					followsUserLocation={true}
				/>
			);
		}
	}
}

const styled = { mapView: { flex: 1 }, shopCardView: { width: 250 } };

export default MapComponent;
