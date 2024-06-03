import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Description({description}) {
  return (
    <View style={styles.root}>
      <View style={styles.desContainer}>
        <Text numberOfLines={5}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  desContainer: {
    width: 340,
    height: 88,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});
