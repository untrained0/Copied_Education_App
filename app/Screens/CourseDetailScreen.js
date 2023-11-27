import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import DetailSection from '../Components/CourseDetailScreen/DetailSection';
import ChapterSection from '../Components/CourseDetailScreen/ChapterSection';

export default function CourseDetailScreen() {
  const navigation = useNavigation();
  const params = useRoute().params;

  useEffect(() => {
    console.log(params.course.id);
    console.log(params.course.chapter);
  }, [params.course]);

  if (!params.course || !params.course.chapter || !params.course.chapter.length) {
    return <Text>No course data available</Text>;
  }

    // Create a new array of chapter objects
    const chapterList = params.course.chapter.map((item) => {
        return {
          id: item.id,
          title: item.title,
        };
      });
    

  return (
    <ScrollView style={{ padding: 20 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-circle" size={40} color="black" />
      </TouchableOpacity>
      <DetailSection course={params.course} />
      <ChapterSection chapterlist={chapterList} />

    </ScrollView>
  );
}
