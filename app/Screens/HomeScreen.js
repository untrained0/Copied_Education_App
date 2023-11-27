import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './../Components/HomeScreen/Header';
import CourseList from './../Components/HomeScreen/CourseList';
import Colors from '../Utils/Colors';
import { ScrollView } from 'react-native-gesture-handler';


export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={{backgroundColor:Colors.PRIMARY, height:240, padding:20, paddingLeft:10}}>
      <Header />
      </View>
      <View>
        <View style={{marginTop: -90}} >
        <CourseList level={'Beginner'} />
        </View>
        <CourseList level={'Intermediate'} />
      </View>
    </ScrollView>
  )
}
