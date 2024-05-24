import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';

export default function NearRestaurantHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nearest Restaurant</Text>
      <Pressable>
        <Text style={{color: '#FF7C32', fontSize: 16}}>View More</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'UbuntuSans-Bold',
    fontSize: 24,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
