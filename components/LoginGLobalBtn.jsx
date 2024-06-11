import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useContext} from 'react';

export default function LoginGLobalBtn({title, onMethod}) {
  return (
    <LinearGradient colors={['#FF5858', '#CC2727']} style={styles.root}>
      <Pressable
        onPress={onMethod}
        style={({pressed}) => [pressed && styles.pressed, styles.btnContainer]}>
        <Text
          style={{fontFamily: 'UbuntuSans-Bold', color: 'white', fontSize: 16}}>
          {title}
        </Text>
      </Pressable>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    height: 57,
    width: 157,
    justifyContent: 'center',
    alignItems: 'center',
  },
  root: {
    height: 57,
    width: 157,
    borderRadius: 16,
  },
  pressed: {
    opacity: 0.4,
    backgroundColor: 'white',
  },
});
