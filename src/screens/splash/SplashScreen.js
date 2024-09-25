import {View} from 'react-native';
import React, {useEffect} from 'react';
import {SvgXml} from 'react-native-svg';
import {splashLogo} from '../../constants/svg';
import {styles} from './SplashScreenStyle';
import ScreenWrapper from '../../common/ScreenWrapper';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('OnBoardingStack', {screen: 'FirstOnboardingScreen'});
    }, 500);

    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <ScreenWrapper translucent={true} style={styles.container}>
      <View>
        <SvgXml xml={splashLogo} />
      </View>
    </ScreenWrapper>
  );
};

export default SplashScreen;
