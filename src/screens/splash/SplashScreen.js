import {View} from 'react-native';
import React, {useEffect} from 'react';
import {SvgXml} from 'react-native-svg';
import {splashLogo} from '../../constants/svg';
import {styles} from './SplashScreenStyle';
import ScreenWrapper from '../../common/ScreenWrapper';
import ProfileScreen from '../Profile/ProfileScreen';

const SplashScreen = ({navigation}) => {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigation.navigate('TabStack', {screen: 'Setting'});
  //   }, 500);

  //   return () => clearTimeout(timer);
  // }, [navigation]);
  return (
    // <ScreenWrapper translucent={true} style={styles.container}>
    //   <View>
    //     <SvgXml xml={splashLogo} />
    //   </View>
    // </ScreenWrapper>
    <>
      <ProfileScreen />
    </>
  );
};

export default SplashScreen;
