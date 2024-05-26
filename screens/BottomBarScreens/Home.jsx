import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';
import TextView from '../../components/Home-Components/TextView';
import BellIcon from '../../components/Home-Components/BellIcon';
import SearchBar from '../../components/Home-Components/SearchBar';
import Filter from '../../components/Home-Components/Filter';
import Banner from '../../components/Home-Components/Banner';
import NearRestaurantHeader from '../../components/Home-Components/NearRestaurantHeader';
import NearestRestaurantsView from '../../components/Home-Components/NearestRestaurantsView';
import PopularMenus from '../../components/Home-Components/PopularMenus';
import PopularRestaurants from '../../components/Home-Components/PopularRestaurants';

export default function Home() {
  return (
    <ImageBackground
      source={require('../../assests/bg.png')}
      imageStyle={{opacity: 0.7}}
      style={styles.bgContainer}>
      <SafeAreaView>
        <ScrollView contentContainerStyle={{paddingHorizontal: 10}}>
          <View style={styles.headerContainer}>
            <TextView title={'Find Your Favorite Food'} />
            <BellIcon />
          </View>
          <View style={styles.searchbarContainer}>
            <SearchBar />
            <Filter />
          </View>
          <View style={styles.bannerConatiner}>
            <Banner
              bannerTitle={'special deals for summer fun'}
              btnTitle={'Buy Now'}
            />
          </View>
          <View>
            <NearRestaurantHeader title={'Nearest Restaurant'} />
          </View>
          <View style={{paddingVertical: 10}}>
            <NearestRestaurantsView />
          </View>
          <View>
            <NearRestaurantHeader title={'Popular Menu'} />
          </View>
          <View style={styles.popularmenuContainer}>
            <PopularMenus />
          </View>
          <View>
            <NearRestaurantHeader title={'Popular Restaurant'} />
          </View>
          <View style={styles.popularRestaurantContainer}>
            <PopularRestaurants />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgContainer: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
  },
  searchbarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  bannerConatiner: {
    alignItems: 'center',
  },
  popularmenuContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  popularRestaurantContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
