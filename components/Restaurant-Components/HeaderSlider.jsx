import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function HeaderSlider() {
  return (
    <View style={styles.root}>
      <Image
        source={require('../../assests/slider.png')}
        style={{width: 58, height: 5}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    marginTop: 20,
    alignItems: 'center',
  },
});
