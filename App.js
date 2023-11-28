import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import SignupScreen from './app/Screens/SignUpScreen';

import TabNavigation from './app/Navigations/TabNavigation';
import { ScrollView } from 'native-base';
import HomeScreen from './app/Screens/HomeScreen';
import WelcomePageNavigation from './app/Navigations/WelcomePageNavigation';

const CLERK_PUBLISHABLE_KEY = "pk_test_bG92aW5nLW95c3Rlci05NC5jbGVyay5hY2NvdW50cy5kZXYk";

export default function App() {

  const [fontsLoaded] = useFonts({
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'outfit-light': require('./assets/fonts/Outfit-Light.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-SemiBold.ttf'),
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
  });

  if (!fontsLoaded) {
    // Add a loading indicator or return null
    return null;
  }

  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY} >
      <View style={styles.container}>
        <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>

        </SignedIn>

        <SignedOut>
          <NavigationContainer>
            <WelcomePageNavigation />
          </NavigationContainer>

        </SignedOut>
      </View>

    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 35
  }
})
