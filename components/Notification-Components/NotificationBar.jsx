import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function NotificationBar({date, imgSource, title}) {
  return (
    <View style={styles.container}>
      <Image source={imgSource} />
      <View style={styles.textView}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    elevation: 5, // Adjust this value as needed for Android
    shadowColor: '#3B3B3B',
    shadowOpacity: 0.25,
    shadowOffset: {width: 2, height: 2}, // Set offsets to 0 to make shadow appear all around
    shadowRadius: 10, // Adjust this value as needed for iOS
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    height: 81,
    width: 347,
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  textView: {
    marginLeft: 18,
  },
  title: {
    fontFamily: 'UbuntuSans-Bold',
    fontSize: 15,
  },
  desc: {
    fontFamily: 'UbuntuSans-LightItalic',
  },
});
