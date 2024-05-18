import 'react-native-gesture-handler';
import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import OnboardingScreen from './screens/OnboardingScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import UserDeatilScree from './screens/UserDeatilScree';
import PaymentTypeSelectionScreen from './screens/PaymentTypeSelectionScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerBackTitleVisible: false}}
        initialRouteName="onboarding-screen">
        <Stack.Screen
          name="onboarding-screen"
          component={OnboardingScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Login-screen" component={LoginScreen} />
        <Stack.Screen
          name="Userdetail-screen"
          component={UserDeatilScree}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Paymentselection-screen"
          component={PaymentTypeSelectionScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({});
