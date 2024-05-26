import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';

const PopularRestauratData = [
  {
    name: 'Rest-1',
    distance: 12,
    id: 1,
  },
  {
    name: 'Rest-2',
    distance: 12,
    id: 2,
  },
  {
    name: 'Rest-3',
    distance: 12,
    id: 3,
  },
  {
    name: 'Rest-3',
    distance: 12,
    id: 4,
  },
  {
    name: 'Rest-3',
    distance: 12,
    id: 5,
  },
  {
    name: 'Rest-3',
    distance: 12,
    id: 6,
  },
];

const PopularrestaurantRenderItem = ({item}) => (
  <View
    style={{
      height: 200,
      width: 180,
      alignItems: 'flex-end',
      justifyContent: 'center',
    }}>
    <View style={styles.container}>
      <View style={{borderRadius: 14}}>
        <Image
          source={{
            uri: 'https://c8.alamy.com/comp/BH6D6J/the-spice-paradise-indian-restaurant-in-norwich-norfolk-england-britain-BH6D6J.jpg',
          }}
          style={{width: 100, height: 120, borderRadius: 14}}
        />
      </View>
      <Text style={styles.distanceText}>{item.distance} Km</Text>
    </View>
  </View>
);

export default function PopularRestaurants() {
  return (
    <FlatList
      data={PopularRestauratData}
      keyExtractor={item => item.id}
      renderItem={PopularrestaurantRenderItem}
      showsHorizontalScrollIndicator={false}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: 147,
    height: 184,
    elevation: 5, // Adjust this value as needed for Android
    shadowColor: '#3B3B3B',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 0}, // Set offsets to 0 to make shadow appear all around
    shadowRadius: 10, // Adjust this value as needed for iOS
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 18,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginTop: 14,
  },
  distanceText: {
    fontFamily: 'UbuntuSans-SemiBold',
    marginTop: 8,
  },
});
