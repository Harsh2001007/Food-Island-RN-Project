import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React, {useState, createContext} from 'react';
import {useNavigation} from '@react-navigation/native';

export default function BottomBarIconsActive({
  filledImg,
  styling,
  title,
  onActive,
}) {
  return (
    <Pressable style={styles.container} onPress={onActive}>
      <Image source={filledImg} style={styling} />
      <Text>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#FBA8A8',
    flexDirection: 'row',
  },
});
