import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function BellIcon() {
  const Navigation = useNavigation();

  const redirectionHandler = () => {
    Navigation.navigate('Notification-screen');
  };
  return (
    <Pressable style={styles.container} onPress={redirectionHandler}>
      <Image source={require('../../assests/bellIconOutline.png')} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 45,
    height: 45,
    borderColor: 'red',
    borderWidth: 2,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});
