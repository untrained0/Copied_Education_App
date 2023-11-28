import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import CourseDetailScreen from '../Screens/CourseDetailScreen';
import ChapterContentScreen from '../Screens/ChapterContentScreen';

const Stack = createStackNavigator();

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

export default function HomeScreenNavigation() {
    return (
        <Stack.Navigator screenOptions = {screenOptions}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
            <Stack.Screen name="ChapterContent" component={ChapterContentScreen} />
        </Stack.Navigator>
    )

}

