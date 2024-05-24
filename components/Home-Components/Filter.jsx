import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function Filter() {
  return (
    <Pressable>
      <Image source={require('../../assests/filter.png')} />
    </Pressable>
  );
}

const styles = StyleSheet.create({});
