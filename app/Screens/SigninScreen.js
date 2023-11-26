import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import * as WebBrowser from "expo-web-browser";
import Colors from './../Utils/Colors'
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "./../../hooks/warmUpBrowser";

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
 
    useWarmUpBrowser();
 
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
   
    const onPress = React.useCallback(async () => {
      try {
        const { createdSessionId, signIn, signUp, setActive } =
          await startOAuthFlow();
   
        if (createdSessionId) {
          setActive({ session: createdSessionId });
        } else {
          // Use signIn or signUp for next steps such as MFA
        }
      } catch (err) {
        console.error("OAuth error", err);
      }
    }, []);


    return (
        <View>
            <Image source={require('./../../assets/images/login_react.png')} />
            <View style={styles.container}>
                <Text style={styles.welcomeText}>Welcome to TourQuest</Text>
                {/* <Text style={{ textAlign: 'center', marginTop: 80, fontSize: 20 }}>Login/Signup</Text> */}
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Image source={require('./../../assets/images/google_logo.png')} style={{ width: 24, height: 24, marginRight: 10 }} />
                    <Text style={{ color: Colors.PRIMARY }}>Sign In with Google</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        marginTop: -25,
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    welcomeText: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: Colors.primary,
        padding: 10,
        margin: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
});
