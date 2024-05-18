import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function TitleDesc({title, Desc}) {
  return (
    <View>
      <View style={styles.titleView}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.descView}>
        <Text style={styles.desc}>{Desc}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 25,
  },
  desc: {
    fontFamily: 'Inter-Medium',
  },
  titleView: {
    height: 66,
    width: 264,
  },
  descView: {
    width: 260,
    height: 70,
  },
});
