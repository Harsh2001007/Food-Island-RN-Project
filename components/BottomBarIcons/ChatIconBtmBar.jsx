import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React from 'react';

export default function ChatIconBtmBar() {
  return (
    <Pressable>
      <Image source={require('../../assests/chatIconWashout.png')} />
    </Pressable>
  );
}

const styles = StyleSheet.create({});
