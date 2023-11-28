import React from 'react';
import { StyleSheet, Text, ToastAndroid, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function ChapterSection({ chapterlist, userEnrolledCourse }) {

    const navigation = useNavigation();

    const onChapterContent = (chapter) => {
        if (userEnrolledCourse.length === 0) {
            ToastAndroid.show('First Enroll!', ToastAndroid.LONG);
            return;
        } else {
            navigation.navigate('ChapterContent', {content: chapter.content, chapterId: chapter.id, userEnrolledCourseId: userEnrolledCourse[0]?.id});
        }
    }

    // const completedChapterList = userEnrolledCourse.map((item) => {
    //     const { completedChapter } = item;
    //     const { chapterId } = completedChapter[0];
    //     return {
    //       id: item.id,
    //       courseId: item.courseId,
    //       completedChapter: item.completedChapter
    //       // {
    //       //   heading: item.heading,
    //       //   description: item.description, // Convert description to an object with "markdown" key
    //       //   output: item.output,
    //       // },
    //     };
    //   });

    //   console.log(completedChapterList);

    // console.log(userEnrolledCourse[0]?.completedChapter[0]?.chapterId);
    console.log(userEnrolledCourse);

    // const checkIfChapterComplete = (chapterId) => {
    //     if (chapterlist.length <= 0) {
    //         return false;
    //     } else {
    //         const resp = completedChapterList
    //         .find(item => item.chapterId == chapterId)
    //     }
    // }

    if (!chapterlist) {
        return <Text>Soham</Text>;
    }

    // console.log(userEnrolledCourse[0].completedChapter[0]);
   



    return (
        <View style={{ padding: 10, backgroundColor: Colors.WHITE, borderRadius: 15, marginTop: 10 }}>
            <Text style={{ fontFamily: 'outfit-medium', fontSize: 20 }}>{chapterlist.length === 1 ? 'Chapter' : 'Chapters'}</Text>
            {chapterlist.map((item, index) => (
                <TouchableOpacity onPress={() => onChapterContent(item)} style={{}} >
                    {/* <Text>{item.content}</Text> */}
                    <View key={item.id} style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }} >
                        <Text style={{ fontFamily: 'outfit-medium', fontSize: 27, color: userEnrolledCourse.length === 0?Colors.GRAY:Colors.BLACK }}>{index + 1}</Text>
                        <Text style={{ fontFamily: 'outfit', fontSize: 21, color: userEnrolledCourse.length === 0?Colors.GRAY:Colors.BLACK }}>{item.title}</Text>
                    </View>
                    {userEnrolledCourse.length === 0 ?
                        <Ionicons name="md-lock-closed" size={25} color="gray" />
                        :
                        <Ionicons name="play" size={25} color="black" />
                    }
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    inCompleteChapter: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.GRAY
    },
    completeChapter: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.GREEN,
        backgroundColor: Colors.GREEN
    }
})
