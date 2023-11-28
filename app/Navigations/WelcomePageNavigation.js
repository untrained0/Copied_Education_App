import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import SigninScreen from '../Screens/SigninScreen';

const Stack = createStackNavigator();

const screenOptions = {
  // tabBarShowLabel:false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff"
  }
}

export default function WelcomePageNavigation() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="welcome" component={SigninScreen} />
      <Stack.Screen name="after_login" component={HomeScreen} />
    </Stack.Navigator>
  )

}

