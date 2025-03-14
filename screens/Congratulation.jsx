import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import LoginGLobalBtn from '../components/LoginGLobalBtn';

export default function Congratulation({navigation}) {
  const submitBtnHanlder = () => {
    navigation.navigate('Bottom-bar');
  };
  return (
    <View style={styles.root}>
      <ImageBackground
        style={styles.bgImgContainer}
        source={require('../assests/bg.png')}>
        <SafeAreaView>
          <View style={styles.contentRoot}>
            <View style={styles.topContainer}>
              <View style={styles.imgContainer}>
                <Image
                  source={require('../assests/redTick.png')}
                  style={styles.tickImage}
                />
              </View>
              <View style={{paddingVertical: 10}}>
                <Text
                  style={{
                    fontFamily: 'Inter-Bold',
                    color: 'red',
                    fontSize: 28,
                  }}>
                  Congratulations !
                </Text>
              </View>
              <View style={{paddingVertical: 10}}>
                <Text
                  style={{fontFamily: 'UbuntuSans-MediumItalic', fontSize: 16}}>
                  You're all set to order your desired food !
                </Text>
              </View>
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
  contentRoot: {
    paddingHorizontal: 18,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },

  topContainer: {
    height: '92%',
    alignItems: 'center',
  },
  tickImage: {
    marginTop: '50%',
  },
});
