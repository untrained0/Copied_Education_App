import React, { useContext } from 'react';
import { StyleSheet, Text, ToastAndroid, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { CompleteChapterContext } from '../../Context/CompleteChapterContext';

export default function ChapterSection({ chapterlist, userEnrolledCourse }) {

    const navigation = useNavigation();
    const {isChapterComplete, setIsChapterComplete} = useContext(CompleteChapterContext);


    const onChapterContent = (chapter) => {
        if (userEnrolledCourse.length === 0) {
            ToastAndroid.show('First Enroll!', ToastAndroid.LONG);
            return;
        } else {
            setIsChapterComplete(false);
            navigation.navigate('ChapterContent', {content: chapter.content, chapterId: chapter.id, userEnrolledCourseId: userEnrolledCourse[0]?.id});
        }
    }

    console.log('chapter id', userEnrolledCourse[0]?.completedChapter[0]?.chapterId);
    console.log(userEnrolledCourse);
    console.log('length', userEnrolledCourse[0]?.completedChapter?.length);

    const checkIfChapterComplete = (chapterId) => {
        if (userEnrolledCourse[0]?.completedChapter?.length <= 0) {
            return false;
        } else {
            const resp = userEnrolledCourse[0]?.completedChapter
            .find(item => item.chapterId == chapterId)

            return resp;
        }
    }

    if (!chapterlist) {
        return <Text>Soham</Text>;
    }

    return (
        <View style={{ padding: 10, backgroundColor: Colors.WHITE, borderRadius: 15, marginTop: 10 }}>
            <Text style={{ fontFamily: 'outfit-medium', fontSize: 20 }}>{chapterlist.length === 1 ? 'Chapter' : 'Chapters'}</Text>
            {chapterlist.map((item, index) => (
                <TouchableOpacity onPress={() => onChapterContent(item)} style={[checkIfChapterComplete(item.id)?styles.completeChapter:styles.inCompleteChapter]} >
                    {/* <Text>{item.content}</Text> */}
                    <View key={item.id} style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }} >
                    <Text style={{ fontFamily: 'outfit-medium', fontSize: 27, color: userEnrolledCourse.length === 0?Colors.GRAY:Colors.BLACK }}>{ checkIfChapterComplete(item.id) ? <Ionicons name="checkmark-circle" size={25} color="green" /> : `${index + 1}` }</Text>
                        <Text style={{ fontFamily: 'outfit', fontSize: 21, color: userEnrolledCourse.length === 0?Colors.GRAY:Colors.BLACK }}>{item.title}</Text>
                    </View>
                    {userEnrolledCourse.length === 0 ?
                      <Ionicons name="md-lock-closed" size={25} color="gray" />
                        :
                        checkIfChapterComplete(item.id)? <Ionicons name="play" size={25} color="green" /> : <Ionicons name="play" size={25} color="black" /> 
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
        backgroundColor: Colors.LIGHT_GREEN
    }
})
