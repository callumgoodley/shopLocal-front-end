import 'react-native-gesture-handler';

import * as React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './Screens/HomePage';
import LoginPage from './Screens/LoginPage';
import MyAccountPage from './Screens/MyAccountPage';
import SettingsPage from './Screens/SettingsPage';
// import {Ionicons} from 'react-native-vector-icons/Ionicons ';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         {/* <Stack.Screen name="Login" component={LoginPage} /> */}
//         <Stack.Screen name="Home" component={HomePage} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomePage} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsPage} />
    </SettingsStack.Navigator>
  );
}

const MyAccountStack = createStackNavigator();

function MyAccountStackScreen() {
  return (
    <MyAccountStack.Navigator>
      <MyAccountStack.Screen
        name="My Account"
        component={MyAccountPage}
        options={{title: 'Hi'}}
      />
    </MyAccountStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="My Account" component={MyAccountStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// export default App;
