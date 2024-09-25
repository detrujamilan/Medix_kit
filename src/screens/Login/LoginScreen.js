import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../common/ScreenWrapper';
import {Colors} from '../../constants/colors';
import CustomElevatedContainer from '../../common/ElevatedContainer/CustomElevatedContainer';
import {MedixLogo} from '../../assets/svg/medixLogo';
import {textStyles} from '../../styles/textStyles';

const LoginScreen = () => {
  return (
    <ScreenWrapper
      translucent={true}
      backgroundColor={Colors.White}
      style={{flex: 1, backgroundColor: 'red'}}>
      <View>
        <CustomElevatedContainer title="Sign In" />
      </View>
      <View style={{paddingHorizontal: 20}}>
        <View style={{marginVertical: 38}}>
          <MedixLogo />
          <Text style={[textStyles.heading, {paddingTop: 10}]}>
            Welcome{'\n'}back!
          </Text>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default LoginScreen;
