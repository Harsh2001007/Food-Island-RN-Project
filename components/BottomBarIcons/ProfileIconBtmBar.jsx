import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useState, useContext} from 'react';

export default function ProfileIconBtmBar() {
  const Navigation = useNavigation();
  const [click, setClick] = useState(false);
  const IconClick = () => {
    Navigation.navigate('Profile-screen');
    setClick(!click);
  };
  return (
    <Pressable
      style={() => [
        styles.container,
        !click && {
          backgroundColor: '#FBA8A8',
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}
      onPress={IconClick}>
      {click && (
        <Image source={require('../../assests/profileIconWashout.png')} />
      )}
      {click === false && (
        <View
          style={
            !click && {
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }
          }>
          <Image source={require('../../assests/profileIconFilled.png')} />
          <Text>Profile</Text>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
