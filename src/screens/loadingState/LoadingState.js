import React from 'react';
import {Text, View} from 'react-native';
import ScreenWrapper from '../../common/ScreenWrapper';
import {Colors} from '../../constants/colors';
import {textStyles} from '../../styles/textStyles';
import LottieView from 'lottie-react-native';

const LoadingState = () => {
  return (
    <ScreenWrapper
      backgroundColor={Colors.White}
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <LottieView
          source={require('./loding.json')}
          style={{width: 150, height: 150}}
          loop
          autoPlay
        />
        <Text style={[textStyles.centeredBoldText]}>
          Loading...
        </Text>
      </View>
    </ScreenWrapper>
  );
};

export default LoadingState;
