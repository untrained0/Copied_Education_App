import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, ToastAndroid, View } from 'react-native';
import Content from '../Components/ChapterContent/Content';
import { useNavigation, useRoute } from '@react-navigation/native';
import { makeChapterComplete } from '../Services';
import { CompleteChapterContext } from '../Context/CompleteChapterContext';
import { ScrollView } from 'react-native-gesture-handler';

export default function ChapterContentScreen() {

  const navigation = useNavigation();
    const params = useRoute().params
const {isChapterComplete, setIsChapterComplete} = useContext(CompleteChapterContext);

    useEffect(() => {
      console.log('chapterId', params.chapterId);
      console.log('recordId', params.userEnrolledCourseId);
    },[params])


    const onChapterFinish = () => {
      makeChapterComplete(params.chapterId, params.userEnrolledCourseId).then(resp => {

if (resp) {
  ToastAndroid.show('Chapter Completed!', ToastAndroid.LONG);
  setIsChapterComplete(true);
  navigation.goBack();

}

      })
    }

    if (!params.content) {
        return <Text>No content data available</Text>;
      }
      
      return (
        <ScrollView>
          <Content content={params.content} onChapterComplete={() =>onChapterFinish()}/>
        </ScrollView>
      );
}