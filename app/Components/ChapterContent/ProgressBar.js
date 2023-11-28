import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../../Utils/Colors';

export default function ProgressBar({ contentLength, contentIndex}) {
  const arraySize = Array.from({ length: contentLength }, (_, index) => index + 1);
  const width = 100 / contentLength; // Calculate equal width for each segment

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, padding:15 }}>
      {arraySize.map((item, index) => {
        return (
          <View key={item} style={{ backgroundColor: `${index <= contentIndex ? Colors.PRIMARY : Colors.GRAY}`, width: width + "%", height: 10, borderRadius: 10, margin: 5, flex:1}}>
            {/* Child element content */}
          </View>
        );
      })}
    </View>
  );
    }