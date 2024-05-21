import 'react-native-gesture-handler';
import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import OnboardingScreen from './screens/OnboardingScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import UserDeatilScree from './screens/UserDeatilScree';
import PaymentTypeSelectionScreen from './screens/PaymentTypeSelectionScreen';
import Congratulation from './screens/Congratulation';
import Home from './screens/BottomBarScreens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './screens/BottomBarScreens/Profile';
import Chat from './screens/BottomBarScreens/Chat';
import Cart from './screens/BottomBarScreens/Cart';
import BottomBarIcons from './components/BottomBarIcons/BottomBarIcons';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function BottomBar() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingHorizontal: 18,
          paddingVertical: 10,
          justifyContent: 'space-evenly',
          alignItems: 'center',
        },
        tabBarActiveBackgroundColor: '#FFCCCC',
      }}>
      <BottomTab.Screen
        name="Home-screen"
        component={Home}
        options={{
          headerShown: false,
          tabBarButton: e => {
            console.log(e);
            return (
              <BottomBarIcons
                washoutImg={require('./assests/homeIconWashout.png')}
                filledImg={require('./assests/homeIconFilled.png')}
                styling={{}}
              />
            );
          },
          tabBarLabel: 'Home',
        }}
      />
      <BottomTab.Screen
        name="Profile-screen"
        component={Profile}
        options={{
          headerShown: false,
          tabBarButton: e => {
            console.log(e);
            return (
              <BottomBarIcons
                washoutImg={require('./assests/profileIconWashout.png')}
                filledImg={require('./assests/profileIconFilled.png')}
                styling={{}}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Cart-screen"
        component={Cart}
        options={{
          headerShown: false,
          tabBarButton: e => {
            console.log(e);
            return (
              <BottomBarIcons
                washoutImg={require('./assests/cartIconWashout.png')}
                filledImg={require('./assests/cartIconFilled.png')}
                styling={{height: 25, width: 25}}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Chat-screen"
        component={Chat}
        options={{
          headerShown: false,
          tabBarButton: e => {
            console.log(e);
            return (
              <BottomBarIcons
                washoutImg={require('./assests/chatIconWashout.png')}
                filledImg={require('./assests/chatIconFilled.png')}
                styling={{}}
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
}

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
        <Stack.Screen
          name="Congratulation-screen"
          component={Congratulation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home-screen"
          component={BottomBar}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({});
