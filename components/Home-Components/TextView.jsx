import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function TextView({title}) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    fontFamily: 'UbuntuSans-Bold',
    fontSize: 31,
  },
  container: {
    width: 233,
    height: 82,
  },
});
