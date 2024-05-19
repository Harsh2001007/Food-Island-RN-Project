import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React, {useState} from 'react';

export default function HomeIconBtmBar() {
  const [clicked, isClicked] = useState(false);

  const checkClick = () => {
    isClicked(!clicked);
  };

  return (
    <Pressable
      style={{backgroundColor: clicked ? 'red' : 'yellow'}}
      onPress={checkClick}>
      <Image source={require('../../assests/homeIconWashout.png')} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {},
});
