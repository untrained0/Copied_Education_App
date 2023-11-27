import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';



export default function OptionItem({icon, value}) {
    return (
            <View style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center', marginTop: 5 }}>
                <Ionicons name={icon} size={24} color="black" />
                <Text>{value}</Text>
            </View>
    )
}
