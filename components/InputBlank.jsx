import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

export default function InputBlank({placeholder}) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor={'grey'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#F4F4F4',
    backgroundColor: '#FFFFFF',
    height: 57,
    width: 325,
    borderWidth: 2,
    borderRadius: 16,
    paddingHorizontal: 16,
    elevation: 1,
    shadowColor: '#3B3B3B',
    shadowOpacity: 0.25,
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 4,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
});
