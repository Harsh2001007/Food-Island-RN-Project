import {StyleSheet, Text, View, FlatList, Image, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const RestauratData = [
  {
    name: 'Rest-1',
    distance: 10,
    id: 1,
  },
  {
    name: 'Rest-2',
    distance: 11,
    id: 2,
  },
  {
    name: 'Rest-3',
    distance: 12,
    id: 3,
  },
];

export default function NearestRestaurantsView({navigaton}) {
  const Navigation = useNavigation();
  const restaurantRenderItem = ({item}) => {
    return (
      <Pressable
        onPress={() => Navigation.navigate('Restaurant-screen', {meal: item})}
        style={{height: 200, justifyContent: 'center', paddingHorizontal: 10}}>
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
      </Pressable>
    );
  };
  // new code here

  return (
    <Pressable>
      <FlatList
        data={RestauratData}
        keyExtractor={item => item.id}
        renderItem={restaurantRenderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </Pressable>
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
  },
  distanceText: {
    fontFamily: 'UbuntuSans-SemiBold',
    marginTop: 8,
  },
});
