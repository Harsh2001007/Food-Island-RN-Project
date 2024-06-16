import 'react-native-gesture-handler';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import OnboardingScreen from './OnboardingScreen';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import UserDeatilScree from './UserDeatilScree';
import PaymentTypeSelectionScreen from './PaymentTypeSelectionScreen';
import Congratulation from './Congratulation';
import Home from './BottomBarScreens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './BottomBarScreens/Profile';
import Chat from './BottomBarScreens/Chat';
import Cart from './BottomBarScreens/Cart';
import BottomBarIcons from '../components/BottomBarIcons/BottomBarIcons';
import BottomBarIconsActive from '../components/BottomBarIcons/BottomBarIconsActive';
import NotificationScreen from './NotificationScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import RestaurantInfoScreen from './RestaurantInfoScreen';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function BottomBar() {
  const Navigation = useNavigation();
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
      }}>
      <BottomTab.Screen
        name="Home-screen"
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: false,

          tabBarButton: e => {
            console.log(e.accessibilityState?.selected);
            if (e.accessibilityState?.selected === true) {
              return (
                <BottomBarIconsActive
                  filledImg={require('../assests/homeIconFilled.png')}
                  styling={{}}
                  title={'Home'}
                />
              );
            } else {
              return (
                <BottomBarIcons
                  washoutImg={require('../assests/homeIconWashout.png')}
                  styling={{}}
                  onMethod={() => Navigation.navigate('Home-screen')}
                />
              );
            }
          },
        }}
      />
      <BottomTab.Screen
        name="Profile-screen"
        component={Profile}
        options={{
          headerShown: false,
          tabBarButton: e => {
            console.log(e.accessibilityState?.selected);
            if (e.accessibilityState?.selected === true) {
              return (
                <BottomBarIconsActive
                  filledImg={require('../assests/profileIconFilled.png')}
                  styling={{}}
                  title={'Profile'}
                />
              );
            } else {
              return (
                <BottomBarIcons
                  washoutImg={require('../assests/profileIconWashout.png')}
                  styling={{}}
                  onMethod={() => Navigation.navigate('Profile-screen')}
                />
              );
            }
          },
        }}
      />
      <BottomTab.Screen
        name="Cart-screen"
        component={Cart}
        options={{
          headerShown: false,
          tabBarButton: e => {
            console.log(e.accessibilityState?.selected);
            if (e.accessibilityState?.selected === true) {
              return (
                <BottomBarIconsActive
                  filledImg={require('../assests/cartIconFilled.png')}
                  styling={{width: 25, height: 25}}
                  title={'Cart'}
                />
              );
            } else {
              return (
                <BottomBarIcons
                  washoutImg={require('../assests/cartIconWashout.png')}
                  styling={{}}
                  onMethod={() => Navigation.navigate('Cart-screen')}
                />
              );
            }
          },
        }}
      />
      <BottomTab.Screen
        name="Chat-screen"
        component={Chat}
        options={{
          headerShown: false,
          tabBarButton: e => {
            console.log(e.accessibilityState?.selected);
            if (e.accessibilityState?.selected === true) {
              return (
                <BottomBarIconsActive
                  filledImg={require('../assests/chatIconFilled.png')}
                  styling={{}}
                  title={'Chat'}
                />
              );
            } else {
              return (
                <BottomBarIcons
                  washoutImg={require('../assests/chatIconWashout.png')}
                  styling={{}}
                  onMethod={() => Navigation.navigate('Chat-screen')}
                />
              );
            }
          },
        }}
      />
    </BottomTab.Navigator>
  );
}

export default function AllScreenHolder() {
  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
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
              name="Bottom-bar"
              component={BottomBar}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Notification-screen"
              component={NotificationScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Restaurant-screen"
              component={RestaurantInfoScreen}
              options={{
                headerShown: false,
                presentation: 'modal',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({});
