import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function UserLoginLogo({loginScreenType}) {
  return (
    <View style={styles.container}>
      <Image source={require('../assests/loginLogo.png')} />
      <Text style={styles.textStyle}>{loginScreenType}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
  },
  textStyle: {
    fontFamily: 'UbuntuSans-Bold',
    fontSize: 28,
    marginTop: 28,
  },
});
