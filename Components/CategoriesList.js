import React from 'react';
import { ScrollView } from 'react-native';
import Category from './Category';

const CategoriesList = ({ loadBusinesses, setCategory }) => {
	return (
		<ScrollView
			scrollEventThrottle={16}
			horizontal={true}
			showsHorizontalScrollIndicator={false}
			style={styled.scroll}
		>
			<Category
				image={require('../images/bakery.png')}
				name={'Bakery'}
				type={'bakery'}
				loadBusinesses={loadBusinesses}
				setCategory={setCategory}
			/>
			<Category
				image={require('../images/butcher.png')}
				name={'Butcher'}
				type={'butcher'}
				loadBusinesses={loadBusinesses}
				setCategory={setCategory}
			/>
			<Category
				image={require('../images/florist.png')}
				name={'Florist'}
				type={'florist'}
				loadBusinesses={loadBusinesses}
				setCategory={setCategory}
			/>
			<Category
				image={require('../images/sweet.png')}
				name={'Sweet Shop'}
				type={'sweet'}
				loadBusinesses={loadBusinesses}
				setCategory={setCategory}
			/>
			<Category
				image={require('../images/fish.png')}
				name={'Fishmonger'}
				type={'fish'}
				loadBusinesses={loadBusinesses}
				setCategory={setCategory}
			/>
			<Category
				image={require('../images/cheese.png')}
				name={'Cheese Shop'}
				type={'cheese'}
				loadBusinesses={loadBusinesses}
				setCategory={setCategory}
			/>
			<Category
				image={require('../images/fruit.png')}
				name={'Fruit & Veg'}
				type={'fruit'}
				loadBusinesses={loadBusinesses}
				setCategory={setCategory}
			/>
			<Category
				image={require('../images/milk.png')}
				name={'Milk'}
				type={'milk'}
				loadBusinesses={loadBusinesses}
				setCategory={setCategory}
			/>
			<Category
				name={'See all categories'}
				type={'other'}
				loadBusinesses={loadBusinesses}
				setCategory={setCategory}
			/>
		</ScrollView>
	);
};
const styled = {
	scroll: { padding: 10 }
};

export default CategoriesList;
