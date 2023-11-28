import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import Colors from '../../Utils/Colors';
import Coin from './../../../assets/images/coin.png';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useUser } from '@clerk/clerk-expo';

export default function HomeScreen({ fullname }) {

    // console.log('user', user);
// console.log('isSignedInWithClerk', user?.isSignedInWithClerk);

    const { isLoaded, isSignedIn, user } = useUser();

    return isLoaded && isSignedIn && (
        <View>
            <View style={[{ justifyContent: 'space-between' }, styles.rowStyle]}>

                {!user?.isSignedInWithClerk ? (
                    <View style={styles.rowStyle}>
                        <Image
                            source={{ uri: user?.imageUrl }}
                            style={{ width: 50, height: 50, borderRadius: 99 }}
                        />
                        <View>
                            <Text style={{ color: Colors.WHITE, fontFamily: 'outfit' }}>Welcome,</Text>
                            <Text style={styles.mainText}>{user.fullName}</Text>
                        </View>
                    </View>
                ) : (
                    <View style={styles.rowStyle}>
                        <FontAwesome name="user-circle" size={50} color="black" />
                        <View>
                            <Text style={{ color: Colors.WHITE, fontFamily: 'outfit' }}>
                                Welcome,
                            </Text>
                            <Text style={styles.mainText}>Soham</Text>
                        </View>
                    </View>
                )}

                <View style={styles.rowStyle}>
                    <Image source={Coin} style={{ width: 35, height: 35 }} />
                    <Text style={styles.mainText}>3500</Text>
                </View>
            </View>

            <View style={styles.searchBar}>
                <TextInput placeholder='Search Courses' style={{ fontFamily: 'outfit', fontSize: 18 }} />
                <Ionicons name="search-circle" size={50} color={Colors.PRIMARY} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainText: {
        color: Colors.WHITE,
        fontSize: 20,
        fontFamily: 'outfit',
    },
    rowStyle: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    searchBar: {
        marginTop: 25,
        paddingleft: 5,
        paddingLeft: 20,
        justifyContent: 'space-between',
        backgroundColor: Colors.WHITE,
        borderRadius: 99,
        display: 'flex',
        flexDirection: 'row',
    },
});