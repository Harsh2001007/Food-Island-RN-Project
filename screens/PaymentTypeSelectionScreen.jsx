import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import React, {useReducer, useState} from 'react';
import BackButton from '../components/Buttons/BackButton';
import TitleDesc from '../components/ViewModals/TitleDesc';
import LoginGLobalBtn from '../components/LoginGLobalBtn';
import PaypalBar from '../components/PaymentBars/PaypalBar';
import VisaBar from '../components/PaymentBars/VisaBar';
import GpayBar from '../components/PaymentBars/GpayBar';

export default function PaymentTypeSelectionScreen({navigation}) {
  const goPrevScreen = () => {
    navigation.goBack();
  };

  const submitBtnHanlder = () => {
    navigation.navigate('Congratulation-screen');
  };

  const [selectedBtn, setSelectedBtn] = useState(null);

  return (
    <View style={styles.root}>
      <ImageBackground
        style={styles.bgImgContainer}
        source={require('../assests/bg.png')}>
        <SafeAreaView>
          <View style={styles.contentRoot}>
            <BackButton onBack={goPrevScreen} />
            <View style={styles.TitleDesc}>
              <TitleDesc
                title="Payment Method"
                Desc="This data will be displayed in your account profile for security"
              />
            </View>
            <View style={styles.paymentBarContainer}>
              <PaypalBar
                isSelected={selectedBtn === 'paypal'}
                onMethod={() => setSelectedBtn('paypal')}
              />
              <VisaBar
                isSelected={selectedBtn === 'visa'}
                onMethod={() => setSelectedBtn('visa')}
              />
              <GpayBar
                isSelected={selectedBtn === 'gpay'}
                onMethod={() => setSelectedBtn('gpay')}
              />
            </View>
            <View style={styles.btnView}>
              <LoginGLobalBtn title="Next" onMethod={submitBtnHanlder} />
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  bgImgContainer: {
    height: '100%',
    width: '100%',
  },
  root: {
    backgroundColor: 'white',
  },
  TitleDesc: {
    marginTop: 18,
  },
  contentRoot: {
    paddingHorizontal: 18,
  },
  btnView: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paymentBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    height: '50%',
    justifyContent: 'space-evenly',
  },
});
