import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Voucher from './Voucher';

export default function ProfileHeader({memberType}) {
  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Image source={require('../../assests/slider.png')} />
      </View>
      <View style={styles.memberTypeContainer}>
        <View style={styles.memberPill}>
          <Text style={{color: '#F85151', fontFamily: 'UbuntuSans-SemiBold'}}>
            {memberType}
          </Text>
        </View>
      </View>
      <View style={styles.nameContainer}>
        <Text style={{fontSize: 27, fontFamily: 'UbuntuSans-Bold'}}>Name</Text>
        <Image source={require('../../assests/editPencil.png')} />
      </View>
      <View style={styles.emailContainer}>
        <Text style={{color: '#3B3B3B', fontSize: 14}}>Email</Text>
      </View>
      <View>
        {/* instead of calling it 3 times make it dynamic as per the user actions */}
        <Voucher />
        <Voucher />
        <Voucher />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 16,
  },
  sliderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  memberPill: {
    width: 130,
    height: 34,
    backgroundColor: '#FEEDED',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '5%',
    alignItems: 'center',
  },
  memberTypeContainer: {
    marginTop: '10%',
  },
  emailContainer: {
    marginTop: '5%',
  },
});
