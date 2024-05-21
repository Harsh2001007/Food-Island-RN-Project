import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React, {useState, createContext} from 'react';
import {useNavigation} from '@react-navigation/native';

export default function BottomBarIcons({washoutImg, filledImg, styling}) {
  const Navigation = useNavigation();

  const [click, setClick] = useState(false);

  const IconClick = () => {
    Navigation.navigate('Home-screen');
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
      {click && <Image source={washoutImg} />}
      {click === false && (
        <View
          style={
            !click && {
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }
          }>
          <Image source={filledImg} style={styling} />
          <Text>Home</Text>
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

// require('../../assests/homeIconWashout.png')
// require('../../assests/homeIconFilled.png')
