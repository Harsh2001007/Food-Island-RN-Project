import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useContext, useState} from 'react';
import {TestGlobalValues} from '../screens/UserDeatilScree';

export default function InputBlank({placeholder}) {
  const [inputText, setInputText] = useState('');
  const contextData = useContext(TestGlobalValues);

  const inputHandler = text => {
    setInputText(text);
    contextData(inputText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor={'grey'}
        onChangeText={inputHandler}
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
