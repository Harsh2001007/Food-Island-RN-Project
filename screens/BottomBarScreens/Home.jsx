import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import TextView from '../../components/Home-Components/TextView';
import BellIcon from '../../components/Home-Components/BellIcon';
import SearchBar from '../../components/Home-Components/SearchBar';
import Filter from '../../components/Home-Components/Filter';
import Banner from '../../components/Home-Components/Banner';
import NearRestaurantHeader from '../../components/Home-Components/NearRestaurantHeader';

export default function Home() {
  return (
    <ImageBackground
      source={require('../../assests/bg.png')}
      imageStyle={{opacity: 0.7}}
      style={styles.bgContainer}>
      <SafeAreaView>
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
          <NearRestaurantHeader />
        </View>
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
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchbarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    marginTop: '10%',
    justifyContent: 'space-between',
  },
  bannerConatiner: {
    alignItems: 'center',
  },
});
