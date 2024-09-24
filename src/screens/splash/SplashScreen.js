import {View} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {splashLogo} from '../../constants/svg';
import ScreenWrapper from '../../components/common/ScreenWrapper';
import {styles} from './SplashScreenStyle';

const SplashScreen = ({navigation}) => {
  return (
    <ScreenWrapper translucent={true} style={styles.container}>
      <View>
        <SvgXml xml={splashLogo} />
      </View>
    </ScreenWrapper>
  );
};

export default SplashScreen;
