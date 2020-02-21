import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './Screens/HomePage';
import LoginPage from './Screens/LoginPage';
import SignUpPage from './Screens/SignUpPage';

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="LoginPage">
				<Stack.Screen name="LoginPage" component={LoginPage} options={{ title: '' }} />
				<Stack.Screen name="SignUpPage" component={SignUpPage} options={{ title: '' }} />
				{/* <Stack.Screen name="Home" component={HomePage} /> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
