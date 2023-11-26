import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import { getCourseList } from '../../Services';
import SubHeading from './../SubHeading';
import Colors from '../../Utils/Colors';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export default function HomeScreen({ level }) {

    const [courseList, setCourseList] = useState([])

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
                    <View style={{ padding: 10, backgroundColor: Colors.WHITE, marginRight: 10, marginTop: 10, borderRadius: 15 }} >
                        <Image source={{ uri: item?.banner?.url }} style={{ width: 210, height: 120, borderRadius: 15 }} />
                        <View style={{ padding: 7 }} >
                            <Text style={{ fontFamily: 'outfit-medium', fontSize: 17 }} >
                                {item.name}
                            </Text>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                                <View style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center', marginTop: 5 }}>
                                    <Feather name="book-open" size={24} color="black" />
                                    <Text>{item?.chapter?.length} {item?.chapter?.length === 1 ? 'Chapter' : 'Chapters'}</Text>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center', marginTop: 5 }}>
                                    <Ionicons name="md-time-outline" size={24} color="black" />
                                    <Text>{item?.time}</Text>
                                </View>
                            </View>
                            <Text style={{ marginTop: 5, color: Colors.PRIMARY, fontFamily: 'outfit-medium' }} >₹ {item?.price === 0 ? 'Free' : item.price}</Text>
                        </View>

                    </View>
                )}
            />

        </View>
    )
}
