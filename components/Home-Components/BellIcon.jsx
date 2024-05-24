import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function BellIcon() {
  return (
    <Pressable style={styles.container}>
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
