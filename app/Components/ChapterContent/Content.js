import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ProgressBar from './ProgressBar';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import ContentItem from './ContentItem';
import Colors from '../../Utils/Colors';
import { useNavigation } from '@react-navigation/native';


export default function Content({ content, onChapterComplete }) {

  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);

  let contentRef;
const OnNextClick = (index) => {
  if (content.length <= index + 1) {
    // navigation.goBack();
    onChapterComplete();
    return;
  }
  setActiveIndex(index + 1);
  contentRef.scrollToIndex({index: index + 1});
}

  return (
    <View style={{}}>
      <ProgressBar contentLength={content?.length} contentIndex={activeIndex} />

      <FlatList
        data={content}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        ref={(ref) => {
          contentRef = ref;
        }}
        renderItem={({ item, index }) => (
          <View>
          <ScrollView style={{ width: Dimensions.get('screen').width, padding: 20, marginBottom: 50 }}>
            <Text style={{ fontFamily: 'outfit-medium', fontSize: 22, marginTop: 15 }}>{item.heading}</Text>
            <ContentItem description={item?.description?.html} output={item?.output?.html} />
            <TouchableOpacity onPress={() => OnNextClick(index)} style={{ marginTop: 10}}>
              <Text style={{ padding: 12, backgroundColor: Colors.PRIMARY, borderRadius: 10, fontSize: 17, fontFamily: "outfit", color: Colors.WHITE, textAlign: 'center' }}>
                {content.length <= index + 1?'Finish':'Next'}
                </Text>
            </TouchableOpacity>
          </ScrollView>
          </View>
        )}
      />
    </View>
  )
}