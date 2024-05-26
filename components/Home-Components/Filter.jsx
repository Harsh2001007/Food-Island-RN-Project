import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function Filter() {
  return (
    <Pressable style={{borderColor: 'red', borderWidth: 2, borderRadius: 12}}>
      <Image source={require('../../assests/filter.png')} />
    </Pressable>
  );
}

const styles = StyleSheet.create({});
