import 'react-native-gesture-handler';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import HeaderSlider from '../components/Restaurant-Components/HeaderSlider';
import AccessSection from '../components/Restaurant-Components/AccessSection';
import RestaurantName from '../components/Restaurant-Components/RestaurantName';
import InfoSection from '../components/Restaurant-Components/InfoSection';
import Description from '../components/Restaurant-Components/Description';
import NearRestaurantHeader from '../components/Home-Components/NearRestaurantHeader';
import PopularMenus from '../components/Home-Components/PopularMenus';
import PopularRestaurants from '../components/Home-Components/PopularRestaurants';
import NearestRestaurantsView from '../components/Home-Components/NearestRestaurantsView';

export default function RestaurantInfoScreen({route}) {
  const {meal} = route.params;
  return (
    <ScrollView style={{marginBottom: 20, paddingHorizontal: 20}}>
      <HeaderSlider />
      <AccessSection category={'Popular'} />
      <RestaurantName nameOfRestauarnt={meal.name} />
      <InfoSection distance={meal.distance} rating={'4.5 Rating'} />
      <Description description={meal.description} />
      <NearRestaurantHeader title={'Popular Menu'} />
      <NearestRestaurantsView />
      <NearRestaurantHeader title={'Testimonals'} />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <PopularMenus />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
