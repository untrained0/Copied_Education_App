import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../Utils/Colors';


export default function HomeScreen({text, color = Colors.BLACK}) {
  return (
    <View>
            <Text style={{
                fontFamily:'outfit-bold',
                fontSize:24,
                color: color
            }}>
                {text}
            </Text>
        </View>
  )
}