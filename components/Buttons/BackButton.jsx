import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React from 'react';

export default function BackButton({onBack}) {
  return (
    <Pressable style={styles.btnContainer} onPress={onBack}>
      <Image
        source={require('../../assests/backBtn.png')}
        style={styles.imageStyle}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    height: 45,
    width: 45,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 8,
  },
  imageStyle: {
    height: 43,
    width: 43,
  },
});
