import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

export default function PaypalBar({isSelected, onMethod}) {
  return (
    <Pressable
      onPress={onMethod}
      style={({pressed}) => [
        pressed && styles.pressed,
        styles.container,
        {borderColor: isSelected ? 'red' : '#F4F4F4'},
      ]}>
      <Image
        source={require('../../assests/paypalLogo.png')}
        style={styles.imgStyle}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 335,
    height: 73,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderRadius: 16,
    elevation: 1,
    shadowColor: '#3B3B3B',
    shadowOpacity: 0.25,
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    height: '60%',
    width: '55%',
  },
  pressed: {
    opacity: 0.4,
  },
});
