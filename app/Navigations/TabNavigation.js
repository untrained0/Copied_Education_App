import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import LeaderBoardScreen from '../Screens/LeaderBoardScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import SigninScreen from '../Screens/SigninScreen';
import {Ionicons} from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import HomeScreenNavigation from './HomeScreenNavigation';



const Tab = createBottomTabNavigator();


const screenOptions = {
  // tabBarShowLabel:false,
  headerShown:false,
  tabBarStyle:{
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff"
  }
}


export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeScreenNavigation} 
      options={{
        tabBarIcon: ({color, size}) => (
          <Ionicons name="home" size={size} color={color} />
        )
      }}
      />
      <Tab.Screen name="LeaderBoard" component={LeaderBoardScreen} 
      options={{
        tabBarIcon: ({color, size}) => (
          <Ionicons name="home" size={size} color={color} />
        )
      }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen}
      options={{
        tabBarIcon: ({color, size}) => (
          <Ionicons name="home" size={size} color={color} />
        )
      }} />
      <Tab.Screen name="Signin" component={SigninScreen} 
      options={{
        tabBarIcon: ({color, size}) => (
          <Ionicons name="home" size={size} color={color} />
        )
      }}
      />

    </Tab.Navigator>
  )
}
