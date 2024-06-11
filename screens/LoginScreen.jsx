import {StyleSheet, Text, View, ImageBackground, Pressable} from 'react-native';
import React, {createContext, useState} from 'react';
import UserLoginLogo from '../components/UserLoginLogo';
import InputBlank from '../components/InputBlank';
import SocialLogins from '../components/SocialLogins';
import FacebookLogin from '../components/FacebookLogin';
import LoginGLobalBtn from '../components/LoginGLobalBtn';

export const TestTwo = createContext();

export default function LoginScreen({navigation}) {
  const loginBtnHandler = () => {
    navigation.navigate('Userdetail-screen');
  };

  const [testing, setTesting] = useState('test key');

  return (
    <ImageBackground
      source={require('../assests/bg.png')}
      style={styles.bgContainer}>
      <UserLoginLogo loginScreenType="Login To Your Account" />
      <View style={{marginTop: 20}}>
        <InputBlank placeholder={'email'} />
        <InputBlank placeholder={'Password'} />
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 28}}>
        <Text style={{fontFamily: 'UbuntuSans-Bold', fontSize: 15}}>
          Or continue with
        </Text>
      </View>
      <View style={styles.socialLoginContainer}>
        <SocialLogins socialLoginText="Google" />
        <FacebookLogin socialLoginText="Facebook" />
      </View>
      <Pressable
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 24,
          paddingHorizontal: 20,
        }}>
        <Text
          style={{
            color: 'red',
            fontFamily: 'UbuntuSans-Bold',
            fontSize: 15,
          }}>
          Forgot Your Password?
        </Text>
      </Pressable>
      <View style={styles.submitBtnView}>
        <TestTwo.Provider value={{abc: testing}}>
          <LoginGLobalBtn title="Next" onMethod={loginBtnHandler} />
        </TestTwo.Provider>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgContainer: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    height: '100%',
    width: '100%',
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: 20,
  },
  submitBtnView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
});
