import {StyleSheet, Text, View, TouchableOpacity, Linking} from 'react-native';
import React, {useRef, useMemo} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {Link} from '@react-navigation/native';

export default function BottomSheetComponent() {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['45%', '50%', '75%'], []);
  const handleClosePress = () => {
    bottomSheetRef.current?.close();
    setBottomSheetVisible(false);
  };
  const handleOpenPress = () => bottomSheetRef.current?.expand();
  return (
    <BottomSheet ref={bottomSheetRef} index={1} snapPoints={snapPoints}>
      <View style={styles.sheetBody}></View>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  sheetBody: {
    height: '100%',
    paddingHorizontal: 10,
  },
});
