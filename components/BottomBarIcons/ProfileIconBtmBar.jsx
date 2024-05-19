import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function ProfileIconBtmBar() {
  const Navigation = useNavigation();
  //   const navigationHandler = () => {
  //     Navigation.navigate('onboarding-screen');
  //   };
  return (
    <View>
      <Image source={require('../../assests/profileIconWashout.png')} />
    </View>
  );
}

const styles = StyleSheet.create({});
