import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function Voucher() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assests/voucher.png')}
        style={{width: 46, height: 43}}
      />
      <Text style={{fontSize: 18, fontWeight: 'bold', marginLeft: 20}}>
        You Have 3 Vouchers
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 347,
    height: 64,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    elevation: 1,
    shadowColor: '#3B3B3B',
    shadowOpacity: 0.25,
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 4,
    alignItems: 'center',
    marginTop: '10%',
    paddingHorizontal: 18,
  },
});
