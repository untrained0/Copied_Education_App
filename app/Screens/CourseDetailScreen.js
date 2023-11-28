import React, { useEffect, useState } from 'react';
import { Text, ToastAndroid, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import DetailSection from '../Components/CourseDetailScreen/DetailSection';
import ChapterSection from '../Components/CourseDetailScreen/ChapterSection';
import { useUser } from '@clerk/clerk-expo';
import { enrollCourse, getUserEnrolledCourse } from './../Services';


export default function CourseDetailScreen() {
  const navigation = useNavigation();
  const params = useRoute().params;
  const { user } = useUser();

  const [userEnrolledCourse, setUserEnrolledCourse] = useState([])

  useEffect(() => {
    // console.log(params.course.id);
    // console.log(params.course.chapter);
    if (user && params.course) {
      GetUserEnrolledCourse();
    }
  }, [params.course, user]);

  const GetUserEnrolledCourse = () => {
    getUserEnrolledCourse(params.course.id, user.primaryEmailAddress.emailAddress).then(resp => {
      console.log("--", resp.userEnrolledCourses);
      setUserEnrolledCourse(resp.userEnrolledCourses);

    })
  }

  const UserEnrollCourse = () => {
    enrollCourse(params.course.id, user.primaryEmailAddress.emailAddress).then(resp => {
      console.log("New Course Enrolled!");
      if (resp) {
        ToastAndroid.show('Course Enrolled successfully!', ToastAndroid.LONG);
        GetUserEnrolledCourse();
      }
    })

  }

  if (!params.course || !params.course.chapter || !params.course.chapter.length) {
    return <Text>No course data available</Text>;
  }

  // Create a new array of chapter objects
  const chapterList = params.course.chapter.map((item) => {
    const { content } = item;
    // const { heading, description, output } = content[0];
    return {
      id: item.id,
      title: item.title,
      content: item.content
      // {
      //   heading: item.heading,
      //   description: item.description, // Convert description to an object with "markdown" key
      //   output: item.output,
      // },
    };
  });

  // console.log(chapterList);


  return (
    <ScrollView style={{ padding: 20 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-circle" size={40} color="black" />
      </TouchableOpacity>
      <DetailSection course={params.course} enrollCourse={() => UserEnrollCourse()} userEnrolledCourse={userEnrolledCourse} />
      <ChapterSection chapterlist={chapterList} userEnrolledCourse={userEnrolledCourse} />

    </ScrollView>
  );
}
