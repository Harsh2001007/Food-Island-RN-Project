import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React from 'react';

export default function FacebookLogin({socialLoginText}) {
  return (
    <Pressable style={styles.container}>
      <Image
        source={require('../assests/facebookLogo.png')}
        style={styles.logo}
      />
      <Text style={styles.textStyling}>{socialLoginText}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  container: {
    borderWidth: 1,
    borderColor: '#F4F4F4',
    width: 152,
    height: 57,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    shadowColor: '#3B3B3B',
    shadowOpacity: 0.25,
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 4,
  },
  textStyling: {
    fontFamily: 'Inter-SemiBold',
  },
});
