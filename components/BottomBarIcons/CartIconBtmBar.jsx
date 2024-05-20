import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React from 'react';

export default function CartIconBtmBar() {
  return (
    <Pressable>
      <Image source={require('../../assests/cartIconWashout.png')} />
    </Pressable>
  );
}

const styles = StyleSheet.create({});
