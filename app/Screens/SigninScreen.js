import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, AspectRatio, ScrollView } from 'native-base';
import * as WebBrowser from "expo-web-browser";
import Colors from './../Utils/Colors'
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "./../../hooks/warmUpBrowser";
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { createNewUser } from '../Services';
import { useNavigation } from '@react-navigation/native';


WebBrowser.maybeCompleteAuthSession();

export default function Login() {

  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const navigation = useNavigation();

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


  const CreateNewUser = () => {
    createNewUser('soham15@gmail.com','SOham', 'sohamya').then(resp => {
      console.log("New: ", resp);
      navigation.navigate('after_login', {fullName : "soham"});
    })
  }


  return (
    <NativeBaseProvider config={{}}>
      <ScrollView>
        <Image source={require('./../../assets/images/login_react.png')} />
        <View style={styles.container}>
          <Text style={styles.welcomeText}>Welcome to TourQuest</Text>

          <View style={styles.text2}>
            <Text>Already have account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")} ><Text style={styles.signupText}> Login </Text></TouchableOpacity>
          </View>

          {/* Username or Email Input Field */}
          <View style={styles.buttonStyle}>

            <View style={styles.emailInput}>
              <Input
                InputLeftElement={
                  <Icon
                    as={<FontAwesome5 name="user-secret" />}
                    size="sm"
                    m={2}
                    _light={{
                      color: "black",
                    }}
                    _dark={{
                      color: "gray.300",
                    }}
                  />
                }
                variant="outline"
                placeholder="Username"
                _light={{
                  placeholderTextColor: "blueGray.400",
                }}
                _dark={{
                  placeholderTextColor: "blueGray.50",
                }}

              />
            </View>
          </View>

          {/* Username or Email Input Field */}
          <View style={styles.buttonStyleX}>

            <View style={styles.emailInput}>
              <Input
                InputLeftElement={
                  <Icon
                    as={<MaterialCommunityIcons name="email" />}
                    size="sm"
                    m={2}
                    _light={{
                      color: "black",
                    }}
                    _dark={{
                      color: "gray.300",
                    }}
                  />
                }
                variant="outline"
                placeholder="Email"
                _light={{
                  placeholderTextColor: "blueGray.400",
                }}
                _dark={{
                  placeholderTextColor: "blueGray.50",
                }}

              />
            </View>
          </View>

          {/* Password Input Field */}
          <View style={styles.buttonStyleX}>

            <View style={styles.emailInput}>
              <Input
                InputLeftElement={
                  <Icon
                    as={<FontAwesome5 name="key" />}
                    size="sm"
                    m={2}
                    _light={{
                      color: "black",
                    }}
                    _dark={{
                      color: "gray.300",
                    }}
                  />
                }
                variant="outline"
                secureTextEntry={true}
                placeholder="Password"
                _light={{
                  placeholderTextColor: "blueGray.400",
                }}
                _dark={{
                  placeholderTextColor: "blueGray.50",
                }}
              />
            </View>
          </View>

          {/* Password Input Field */}
          <View style={styles.buttonStyleX}>

            <View style={styles.emailInput}>
              <Input
                InputLeftElement={
                  <Icon
                    as={<FontAwesome5 name="key" />}
                    size="sm"
                    m={2}
                    _light={{
                      color: "black",
                    }}
                    _dark={{
                      color: "gray.300",
                    }}
                  />
                }
                variant="outline"
                secureTextEntry={true}
                placeholder="Confirm Password"
                _light={{
                  placeholderTextColor: "blueGray.400",
                }}
                _dark={{
                  placeholderTextColor: "blueGray.50",
                }}
              />
            </View>
          </View>

          {/* Button */}
          <View style={styles.buttonStyle}>
            <TouchableOpacity onPress={() => CreateNewUser()} style={styles.buttonDesign}>
              <Text>REGISTER NOW</Text>
            </TouchableOpacity>
          </View>
          {/* Line */}
          <View style={styles.lineStyle}>
            <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
            <View>
              <Text style={{ width: 50, textAlign: 'center' }}>Or</Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
          </View>
          {/* <Text style={{ textAlign: 'center', marginTop: 80, fontSize: 20 }}>Login/Signup</Text> */}
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image source={require('./../../assets/images/google_logo.png')} style={{ width: 30, height: 30, marginRight: 15 }} />
            <Text style={{ color: Colors.PRIMARY, fontSize:15 }}>Sign In with Google</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </NativeBaseProvider>
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
    marginBottom: 10
  },
  button: {
    backgroundColor: Colors.WHITE,
    padding: 10,
    margin: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  LoginText: {
    marginTop: 100,
    fontSize: 30,
    fontWeight: 'bold',
  },
  text2: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 5,
    alignItems: 'center',

  },
  signupText: {
    fontFamily: 'outfit-medium',
    fontSize: 20
  },
  emailField: {
    marginTop: 30,
    marginLeft: 15
  },
  emailInput: {
    marginTop: 10,
    marginRight: 5
  },
  buttonStyle: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15
  },
  buttonStyleX: {
    marginTop: 12,
    marginLeft: 15,
    marginRight: 15
  },
  buttonDesign: {
    backgroundColor: '#026efd'
  },
  lineStyle: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    alignItems: 'center'
  },
  imageStyle: {
    width: 80,
    height: 80,
    marginLeft: 20,
  },
  boxStyle: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'space-around'
  },
});
