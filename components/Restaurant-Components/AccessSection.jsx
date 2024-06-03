import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {CardStyleInterpolators} from '@react-navigation/stack';

export default function AccessSection({category}) {
  return (
    <View style={styles.root}>
      <View style={styles.categoryPillContainer}>
        <Text style={{color: 'red'}}>{category}</Text>
      </View>
      <View style={styles.iconsConatainer}>
        <Image source={require('../../assests/locationPin.png')} />
        <Image source={require('../../assests/favIcon.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryPillContainer: {
    width: 76,
    height: 34,
    backgroundColor: '#FEEDED',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  iconsConatainer: {
    flexDirection: 'row',

    width: '25%',
    justifyContent: 'space-evenly',
  },
});
