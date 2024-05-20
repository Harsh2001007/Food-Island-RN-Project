import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

export default function CartIconBtmBar() {
  const Navigation = useNavigation();

  const [click, setClick] = useState(true);
  const IconClick = () => {
    Navigation.navigate('Cart-screen');
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
      {click && <Image source={require('../../assests/cartIconWashout.png')} />}
      {click === false && (
        <View
          style={
            !click && {
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }
          }>
          <Image
            source={require('../../assests/cartIconFilled.png')}
            style={{height: 25, width: 25}}
          />
          <Text>Cart</Text>
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
