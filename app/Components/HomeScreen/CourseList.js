import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import { getCourseList } from '../../Services';
import SubHeading from './../SubHeading';
import Colors from '../../Utils/Colors';
import CourseItem from './CourseItem';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';



export default function CourseList({ level }) {

    const [courseList, setCourseList] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        getCourses();
    }, [])

    const getCourses = () => {
        getCourseList(level).then(resp => {
            console.log("RESP", resp);
            setCourseList(resp?.courses);
        })
    }
    return (
        <View style={{ padding: 20 }} >
            <SubHeading text={level + ' Courses'} color={level === 'Beginner' && Colors.WHITE} />
            <FlatList
                data={courseList}
                key={courseList.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('CourseDetail' , {course:item})}>
                   <CourseItem item={item} />
                    </TouchableOpacity>
                )}
            />

        </View>
    )
}
