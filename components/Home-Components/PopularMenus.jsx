import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';

const PopularMenuData = [
  {
    id: 1,
    imageUrl:
      'https://images.getrecipekit.com/20230327184730-MeasuringSet_ProteinPancakes.jpg?aspect_ratio=16:9&quality=90&',
    price: '$10',
    dishName: 'test-dish',
    restaurant: 'test-restaurant',
  },
  {
    id: 2,
    imageUrl:
      'https://images.getrecipekit.com/20230327184730-MeasuringSet_ProteinPancakes.jpg?aspect_ratio=16:9&quality=90&',
    price: '$8',
    dishName: 'test-dish',
    restaurant: 'test-restaurant',
  },
  {
    id: 3,
    imageUrl:
      'https://images.getrecipekit.com/20230327184730-MeasuringSet_ProteinPancakes.jpg?aspect_ratio=16:9&quality=90&',
    price: '$11',
    dishName: 'test-dish',
    restaurant: 'test-restaurant',
  },
  {
    id: 4,
    imageUrl:
      'https://images.getrecipekit.com/20230327184730-MeasuringSet_ProteinPancakes.jpg?aspect_ratio=16:9&quality=90&',
    price: '$9.5',
    dishName: 'test-dish',
    restaurant: 'test-restaurant',
  },
  {
    id: 5,
    imageUrl:
      'https://images.getrecipekit.com/20230327184730-MeasuringSet_ProteinPancakes.jpg?aspect_ratio=16:9&quality=90&',
    price: '$12.58',
    dishName: 'test-dish',
    restaurant: 'test-restaurant',
  },
];

const renderItem = ({item}) => (
  <View style={styles.container}>
    <Image
      source={{uri: item.imageUrl}}
      style={{height: 66, width: 66, borderRadius: 10}}
    />
    <View>
      <Text style={styles.dishStyle}>{item.dishName}</Text>
      <Text style={styles.restaurantStyle}>{item.restaurant}</Text>
    </View>
    <Text style={styles.priceStyling}>{item.price}</Text>
  </View>
);

export default function PopularMenus() {
  return (
    <FlatList
      keyExtractor={item => item.id}
      data={PopularMenuData}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 87,
    width: 323,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 10,
    elevation: 5, // Adjust this value as needed for Android
    shadowColor: '#3B3B3B',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 0}, // Set offsets to 0 to make shadow appear all around
    shadowRadius: 10, // Adjust this value as needed for iOS
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
  },
  dishStyle: {
    fontFamily: 'UbuntuSans-Bold',
    fontSize: 15,
  },
  restaurantStyle: {
    fontFamily: 'UbuntuSans-Light',
    fontSize: 14,
  },
  priceStyling: {
    fontFamily: 'UbuntuSans-ExtraBold',
    color: '#F85151',
    fontSize: 22,
  },
});
