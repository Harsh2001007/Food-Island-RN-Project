import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function InfoSection({distance, rating}) {
  return (
    <View style={styles.root}>
      <View style={styles.locationView}>
        <Image
          source={require('../../assests/mainLocationIcon.png')}
          style={{height: 20, width: 20}}
        />
        <Text style={{marginLeft: 10}}>{distance} km</Text>
      </View>
      <View style={styles.ratingView}>
        <Image
          source={require('../../assests/ratingStarIcon.png')}
          style={{width: 20, height: 19}}
        />
        <Text style={{marginLeft: 10}}>{rating}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  locationView: {
    flexDirection: 'row',
    width: '30%',
  },
  ratingView: {
    flexDirection: 'row',
    width: '70%',
  },
  root: {
    flexDirection: 'row',
    marginTop: 10,
  },
});
