import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function RestaurantName({nameOfRestauarnt}) {
  return (
    <View style={styles.root}>
      <Text style={{fontFamily: 'UbuntuSans-Bold', fontSize: 27}}>
        {nameOfRestauarnt}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    marginTop: 20,
  },
});
