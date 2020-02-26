import React from 'react';

import { View, Text, Button } from 'react-native';

function SettingsPage({ navigation }) {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Settings screen</Text>
			<Button title="Go to My Account" onPress={() => navigation.navigate('Business')} />
		</View>
	);
}

export default SettingsPage;
