import {StyleSheet, Text, View, SafeAreaView, Pressable} from 'react-native';
import React, {useState} from 'react';
import {useRef, useMemo} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import BottomSheetComponent from '../../components/BottomSheetComponent';

export default function Cart() {
  const [bs, setBs] = useState(false);

  const bsHandler = () => {
    setBs(true);
  };
  return (
    <>
      <SafeAreaView>
        <Text>Cart</Text>
        <Pressable onPress={bsHandler}>
          <Text> click Me </Text>
        </Pressable>
      </SafeAreaView>
      {bs && <BottomSheetComponent />}
    </>
  );
}

const styles = StyleSheet.create({});
