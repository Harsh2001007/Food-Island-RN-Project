import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';

export default function SearchBar() {
  return (
    <Pressable>
      <View style={styles.parent}>
        <View
          style={{
            backgroundColor: '#FBA8A8',
            alignItems: 'center',
            justifyContent: 'center',
            borderTopLeftRadius: 6,
            borderBottomLeftRadius: 10,
            marginLeft: 10,
          }}>
          <Image
            source={require('../../assests/iconSearch.png')}
            backgroundColor={'#FBA8A8'}
          />
        </View>
        <TextInput
          style={styles.textinput}
          placeholderTextColor={'#F85151'}
          placeholder="What do you want to oerder ?"
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  textinput: {
    backgroundColor: '#FBA8A8',
    flex: 1,
    borderRadius: 10,
    marginLeft: 8,
    color: '#F85151',
    paddingRight: 20,
  },
  parent: {
    flexDirection: 'row',
    height: 50,
    width: 267,
    borderColor: '#FBA8A8',
    borderRadius: 16,
    marginTop: 20,
    backgroundColor: '#FBA8A8',
  },
});
