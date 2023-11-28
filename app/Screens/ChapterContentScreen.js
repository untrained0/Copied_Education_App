import React, { useEffect } from 'react';
import { StyleSheet, Text, ToastAndroid, View } from 'react-native';
import Content from '../Components/ChapterContent/Content';
import { useNavigation, useRoute } from '@react-navigation/native';
import { makeChapterComplete } from '../Services';

export default function ChapterContentScreen() {

  const navigation = useNavigation();
    const params = useRoute().params
    console.log("soham");
    // console.log(params.chapterId);

    useEffect(() => {
      console.log('chapterId', params.chapterId);
      console.log('recordId', params.userEnrolledCourseId);
    },[params])


    const onChapterFinish = () => {
      makeChapterComplete(params.chapterId, params.userEnrolledCourseId).then(resp => {
// console.log('---', resp);
// navigation.goBack();
if (resp) {
  ToastAndroid.show('Chapter Completed!', ToastAndroid.LONG);
  navigation.goBack();

}

      })
    }

    if (!params.content) {
        return <Text>No content data available</Text>;
      }
      
      return (
        <View>
          <Content content={params.content} onChapterComplete={() =>onChapterFinish()}/>
        </View>
      );
}