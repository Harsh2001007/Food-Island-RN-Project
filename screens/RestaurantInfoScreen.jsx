import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';

export default function RestaurantInfoScreen({route}) {
  const {meal} = route.params;
  return (
    <SafeAreaView>
      <Text>{meal.distance}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
