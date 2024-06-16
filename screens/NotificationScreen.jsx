import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import BackButton from '../components/Buttons/BackButton';
import NearRestaurantHeader from '../components/Home-Components/NearRestaurantHeader';
import NotificationBar from '../components/Notification-Components/NotificationBar';
import {useNavigation} from '@react-navigation/native';

export default function NotificationScreen() {
  const Navigation = useNavigation();
  const goBackHandler = () => {
    Navigation.goBack();
  };
  return (
    <ImageBackground
      source={require('../assests/bg.png')}
      style={styles.bgContainer}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 12}}>
          <BackButton onBack={goBackHandler} />
        </View>
        <NearRestaurantHeader title={'Notifications'} status={false} />
        <View style={styles.notificationBarContainer}>
          <NotificationBar
            date={'22nd July 2023'}
            imgSource={require('../assests/orderPickup.png')}
            title={'Your order has been picked up'}
          />
          <NotificationBar
            date={'22nd July 2023'}
            imgSource={require('../assests/topUp.png')}
            title={'Top up successfull !'}
          />
          <NotificationBar
            date={'22nd July 2023'}
            imgSource={require('../assests/orderCancellation.png')}
            title={'Your order has been cancelled'}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgContainer: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: 'white',
  },
  notificationBarContainer: {
    alignItems: 'center',
  },
});
