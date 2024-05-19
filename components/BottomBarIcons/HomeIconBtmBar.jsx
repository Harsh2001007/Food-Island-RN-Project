import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React from 'react';

export default function HomeIconBtmBar() {
  return (
    <Pressable>
      <Image source={require('../../assests/homeIconWashout.png')} />
    </Pressable>
  );
}

const styles = StyleSheet.create({});
