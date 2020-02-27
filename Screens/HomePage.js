import React from 'react';

import { View, TouchableOpacity, Text } from 'react-native';
import CategoriesList from '../Components/CategoriesList';
import MapComponent from '../Components/MapComponent';
import ListView from '../Components/ListView';
import { getBusinesses } from '../API';
import { connect } from 'react-redux';
import { loadBusinesses } from '../actions/businesses';

class HomePage extends React.Component {
	state = {
		err: null,
		toggleView: false,
		filterCategory: '',
		locations: [
			{
				id: 1,
				name: '1',
				lat: 53.4733341,
				lng: -2.2404379,
				type: 'bakery',
				img: 'https://www.wedgesbakery.co.uk/wp-content/uploads/2019/09/hh-bread-display3000-2048x982.jpg'
			},
			{
				id: 2,
				name: "Leon's fruit & veg ",
				lat: 53.4742369,
				lng: -2.2405659,
				type: 'fruit',
				img: 'https://secure.i.telegraph.co.uk/multimedia/archive/03357/fresh_3357984b.jpg'
			},
			{
				id: 3,
				name: 'Cheeeese',
				lat: 53.4743035,
				lng: -2.2348444,
				type: 'cheese',
				img:
					'https://images.the500hiddensecrets.com/2019-08/the_hague-shop-ed_boele_kaasspeciaalzaak.jpg?auto=format&fit=max&h=1080&ixlib=php-1.1.0&q=65&w=1920&s=3e7889e5037c39c6dc83dbefeba62a4e'
			},
			{
				id: 4,
				name: 'Fish',
				lat: 53.4741018,
				lng: -2.2367348,
				type: 'fish',
				img: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/PikePlaceMarket2006.jpg'
			},
			{
				id: 5,
				name: 'flower shop',
				lat: 53.4689331,
				lng: -2.2383827,
				type: 'florist',
				img:
					'https://images.squarespace-cdn.com/content/v1/534ae1c4e4b06a4afe156300/1524043445496-3VSAWU69DE0VRGD7MJWU/ke17ZwdGBToddI8pDm48kArFGHoGGtoTORmsGAkha9Z7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USomXO-e0dPXwYUHPpPfKQk9MLK2S876RCqBWCrp0JP0TTiNUjIeprcY_9gXQ3Hf-Q/IMG_1302.JPG?format=2500w'
			},
			{
				id: 6,
				name: 'MLK8',
				lat: 53.474953,
				lng: -2.2411171,
				type: 'milk',
				img:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Milk_float_-_Liverpool_%28modified_background%29.jpg/1200px-Milk_float_-_Liverpool_%28modified_background%29.jpg'
			},
			{
				id: 7,
				name: 'sweet',
				lat: 53.4717176,
				lng: -2.2426765,
				type: 'sweet',
				img:
					'https://images-a.jpimedia.uk/imagefetch/f_auto,ar_3:2,q_auto:low,c_fill/if_h_lte_200,c_mfit,h_201/https://www.longridgenews.co.uk/webimage/1.9689763.1554303162!/image/image.jpg'
			},
			{
				id: 8,
				name: 'butchers',
				lat: 53.4706653,
				lng: -2.2360268,
				type: 'butcher',
				img: 'https://meatmanagement.com/wp-content/uploads/2017/05/Patrick-Strainge-Butchers-in-Whitney.jpg'
			},
			{
				id: 9,
				name: 'cakes',
				lat: 53.470583,
				lng: -2.248035,
				type: 'other',
				img: 'https://b.zmtcdn.com/data/pictures/9/18334489/8a1f35219cbf8b10e645e1d3fa9d470b_featured_v2.jpg'
			}
		]
	};

	render() {
		const { toggleView, locations } = this.state;
		const view = toggleView ? 'Map' : 'List';
		return (
			<View style={styled.homeView}>
				<View style={styled.categories}>
					<CategoriesList setCategory={this.setCategory} loadBusinesses={this.loadBusinesses} />
				</View>
				{!toggleView ? (
					<View style={styled.shops}>
						<MapComponent allProps={this.props} />
					</View>
				) : (
					<View style={styled.shops}>
						<ListView shops={locations} />
					</View>
				)}
				{/* <View style={styled.buttonView}> */}
				<TouchableOpacity
					style={styled.buttonView}
					// title={`Show ${view} View`}
					onPress={() =>
						this.setState((currentState) => {
							return { toggleView: !currentState.toggleView };
						})}
				>
					<Text
						style={{
							color: '#fff',
							fontWeight: '700'
						}}
					>{`Show ${view} View`}</Text>
				</TouchableOpacity>
				{/* </View> */}
			</View>
		);
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.filterCategory !== this.state.filterCategory) {
			this.loadBusinesses(this.state.filterCategory).then((businesses) => {
				this.props.add(businesses);
			});
		}
	}

	componentDidMount() {
		this.loadBusinesses().then((businesses) => {
			this.props.add(businesses);
		});
	}

	loadBusinesses = (type) => {
		return getBusinesses(type);
	};

	setCategory = (type) => {
		this.setState({ filterCategory: type });
	};
}
const mapStateToProps = (state) => {
	return {
		user: state.reducer.loggedInUser,
		businesses: state.reducer.businesses
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		add: (user) => dispatch(login(user)),
		add: (businesses) => dispatch(loadBusinesses(businesses))
	};
};

const styled = {
	buttonView: {
		position: 'absolute',
		top: '20%',
		alignSelf: 'flex-start',
		backgroundColor: '#149C0C',
		padding: 10,
		borderRadius: 20,
		marginLeft: 10,
		marginTop: 10
	},
	shops: {
		flex: 4
	},

	categories: { flex: 1, backgroundColor: 'rgba(20, 156, 12, 0.1)' },
	homeView: {
		flex: 1,
		flexDirection: 'column'
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
