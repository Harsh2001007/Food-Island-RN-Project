import {StyleSheet, Text, View, FlatList, Image, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const RestauratData = [
  {
    name: 'The Hungry Hipster',
    distance: 10,
    id: 1,
    description:
      "Step into The Hungry Hipster, a vintage-meets-modern haven in the city's trendiest district. Enjoy farm-to-table dishes like avocado toast with a twist and artisanal coffee in a cozy, Instagrammable setting with exposed brick and local art. Perfect for brunching with friends or a solo culinary escape.",
    imgUrl:
      'https://ca-times.brightspotcdn.com/dims4/default/a536579/2147483647/strip/true/crop/2880x1920+0+0/resize/2000x1333!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fec%2F5b%2Fdced3ab54ebab4a1477f4168f737%2F938247-tn-wknd-me-outdoor-patio-dining-chachas-20220410-12.jpg',
  },
  {
    name: 'The Flavor Factory',
    distance: '07',
    id: 2,
    description:
      'Welcome to The Flavor Factory, where creativity meets culinary excellence. Our industrial-chic space is the backdrop for a menu bursting with bold, inventive dishes like truffle mac and cheese and spicy mango shrimp. Perfect for adventurous foodies, The Flavor Factory promises an unforgettable journey through a world of dynamic tastes and textures.',
    imgUrl: 'https://10619-2.s.cdn12.com/rests/original/312_509866002.jpg',
  },
  {
    name: 'Rosemary Eats',
    distance: '05',
    id: 3,
    description:
      'Welcome to Rosemary Eats, where dining transcends the ordinary. Our vibrant, contemporary space features a globally inspired menu with bold flavors and artistic presentations. Indulge in signature dishes like Korean BBQ tacos and saffron-infused paella. Perfect for food lovers seeking an unforgettable, euphoric culinary adventure in a chic, energetic atmosphere.',
    imgUrl:
      'https://media.architecturaldigest.com/photos/60e33c2983afe4fd18137304/master/w_1600%2Cc_limit/rosemarys_0421_lizclayman_211.jpg',
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
              source={{uri: item.imgUrl}}
              style={{width: 110, height: 120, borderRadius: 14}}
            />
          </View>
          <Text style={{marginTop: 8}}>{item.name}</Text>
          <Text style={styles.distanceText}>{item.distance} km</Text>
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
    marginTop: 3,
  },
});
