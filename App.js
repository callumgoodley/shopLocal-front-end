import 'react-native-gesture-handler';
// navigator.geolocation = require('@react-native-community/geolocation');

import * as React from 'react';
import {View, Text, Button, TextInput, TabBarIOS} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './Screens/HomePage';
import LoginPage from './Screens/LoginPage';
import MyAccountPage from './Screens/MyAccountPage';
import SettingsPage from './Screens/SettingsPage';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'rgba(20, 156, 12, 0.1)'},
        headerTintColor: '#149C0C',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
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
        options={{title: 'My Account'}}
      />
    </MyAccountStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'ios-home';
            } else if (route.name === 'Settings') {
              iconName = 'ios-cog';
            } else if (route.name === 'My Account') {
              iconName = 'ios-contact';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={30} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#149C0C',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="My Account" component={MyAccountStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// export default App;
