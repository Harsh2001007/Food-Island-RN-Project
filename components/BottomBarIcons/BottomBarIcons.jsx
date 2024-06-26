import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React, {useState, createContext} from 'react';
import {useNavigation} from '@react-navigation/native';

export default function BottomBarIcons({washoutImg, styling, onMethod}) {
  const Navigation = useNavigation();
  return (
    <Pressable style={styles.container} onPress={onMethod}>
      <Image source={washoutImg} style={styling} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

// require('../../assests/homeIconWashout.png')
// require('../../assests/homeIconFilled.png')
