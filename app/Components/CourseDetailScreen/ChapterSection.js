import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';

export default function ChapterSection({ chapterlist }) {
    if (!chapterlist) {
        return <Text>Soham</Text>;
    }

    return (
        <View style={{padding: 10, backgroundColor: Colors.WHITE, borderRadius: 15, marginTop: 10}}>
            <Text style={{fontFamily: 'outfit-medium', fontSize: 20}}>{chapterlist.length === 1?'Chapter':'Chapters'}</Text>
            {chapterlist.map((item, index) => (
                <View style={styles.chapter} >
                    <View key={item.id} style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }} >
                        <Text style={{ fontFamily: 'outfit-medium', fontSize: 27, color: Colors.GRAY }}>{index + 1}</Text>
                        <Text style={{ fontFamily: 'outfit', fontSize: 21, color: Colors.GRAY }}>{item.title}</Text>
                    </View>
                    <Ionicons name="md-lock-closed" size={25} color="gray" />
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    chapter: {
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
    }
})
