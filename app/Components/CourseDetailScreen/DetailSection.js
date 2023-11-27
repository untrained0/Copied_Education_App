import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import Colors from '../../Utils/Colors'
import OptionItem from './OptionItem'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function DetailSection({ course }) {

    return (
        <View style={{ padding: 10, backgroundColor: Colors.WHITE, borderRadius: 15 }}>
            <Image source={{ uri: course?.banner?.url }} style={{ width: Dimensions.get('screen').width * 0.84, height: 173, borderRadius: 15 }} />
            <View style={{ padding: 10 }}>
            <View style={{ marginTop: 10 }} >
                <Text style={{ marginTop: 10, fontSize: 22, fontFamily: 'outfit-medium' }}>{course.name}</Text>
                <View >
                    <View style={styles.rowstyle}>
                        <OptionItem icon={'book-outline'} value={course?.chapter?.length + ` ${course?.chapter?.length === 1 ? 'Chapter' : 'Chapters'}`} />
                        <OptionItem icon={'md-time-outline'} value={course?.time} />
                    </View>
                    <View style={styles.rowstyle}>
                        <OptionItem icon={'person-circle-outline'} value={course?.author} />
                        <OptionItem icon={'cellular-outline'} value={course?.level} />
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 10 }}>
                <Text style={{ fontFamily: 'outfit-medium', fontSize: 20 }} >
                    Description
                </Text>
                <Text style={{ fontFamily: 'outfit', color: Colors.GRAY, height: 23 }} >
                    {course?.description?.markdown}
                </Text>
            </View>
            <View style={{padding:10}}>
                <TouchableOpacity style={{ padding: 20, backgroundColor: Colors.PRIMARY, borderRadius: 20 }} >
                    <Text style={{fontFamily:'outfit', textAlign: 'center', fontSize:17, color: Colors.WHITE}} >
                        Enroll Now
                    </Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    rowstyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        marginBottom: 10,
        marginTop: 5
    }
})

