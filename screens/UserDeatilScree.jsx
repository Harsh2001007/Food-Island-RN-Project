import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackButton from '../components/Buttons/BackButton';
import TitleDesc from '../components/ViewModals/TitleDesc';
import InputBlank from '../components/InputBlank';
import LoginGLobalBtn from '../components/LoginGLobalBtn';

export default function UserDeatilScree({navigation}) {
  const userDetainBtnHandler = () => {
    navigation.navigate('Paymentselection-screen');
  };

  const goPrevScreen = () => {
    navigation.goBack();
  };

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
                title="Fill In Your Bio To Get Started"
                Desc="This data will be displayed in your account profile for security"
              />
            </View>
            <View>
              <InputBlank placeholder="First Name" />
              <InputBlank placeholder="Last Name" />
              <InputBlank placeholder="Phone Number" />
            </View>
            <View style={styles.btnView}>
              <LoginGLobalBtn title="Next" onMethod={userDetainBtnHandler} />
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
    marginTop: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
