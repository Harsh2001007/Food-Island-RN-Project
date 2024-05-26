import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';

export default function Banner({bannerTitle, btnTitle}) {
  return (
    <Pressable style={styles.container}>
      <ImageBackground
        source={require('../../assests/bannerPattern.png')}
        style={styles.bgImage}>
        <View style={styles.internalParent}>
          <View
            style={{
              width: '50%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assests/samosa.webp')}
              style={{
                height: 120,
                width: 130,
                borderWidth: 4,
                borderColor: 'white',
                borderRadius: 8,
              }}
            />
          </View>
          <View
            style={{
              width: '50%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.bannerTitleText}>{bannerTitle}</Text>
            <Pressable style={styles.btn}>
              <Text>{btnTitle}</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ED4747',
    width: 325,
    height: 150,
    borderRadius: 20,
    marginTop: 18,
  },
  bgImage: {
    height: '100%',
    width: '100%',
  },
  internalParent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  btn: {
    backgroundColor: 'white',
    width: '50%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  bannerTitleText: {
    color: 'white',
    fontFamily: 'UbuntuSans-Bold',
    fontSize: 20,
  },
});
