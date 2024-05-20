import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

export default function ChatIconBtmBar() {
  const Navigation = useNavigation();
  const [click, setClick] = useState(true);

  const IconClick = () => {
    Navigation.navigate('Chat-screen');
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
      {click && <Image source={require('../../assests/chatIconWashout.png')} />}
      {click === false && (
        <View
          style={
            !click && {
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }
          }>
          <Image source={require('../../assests/chatIconFilled.png')} />
          <Text>Chat</Text>
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
