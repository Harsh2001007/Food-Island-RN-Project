import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

export default function OnboardingScreen({navigation}) {
  const onbaordingToApphandler = () => {
    navigation.navigate('Login-screen');
  };
  return (
    <Onboarding
      imageContainerStyle={{paddingBottom: 10}}
      bottomBarHeight={40}
      onDone={onbaordingToApphandler}
      transitionAnimationDuration={500}
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assests/logo.png')} />,
          title: '',
          subtitle: '',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assests/onboard1.png')} />,
          title: 'Find Your Comfort Food Here',
          subtitle:
            'Here You Can find a chef or dish for every taste and color.Enjoy!',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assests/onboard2.png')} />,
          title: 'Food Plaza is Where Your Comfort Food Lives',
          subtitle: 'Enjoy a fast and smooth food delivery at your doorstep',
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({});
