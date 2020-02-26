import React from 'react';
import { ScrollView } from 'react-native';
import ShopCard from './ShopCard';

const ListView = ({ shops }) => {
	return (
		<ScrollView style={{ padding: 20 }}>
			{shops.map((shop) => {
				return <ShopCard key={shop.id} category={shop.type} name={shop.name} img={shop.img} />;
			})}
		</ScrollView>
	);
};

export default ListView;
