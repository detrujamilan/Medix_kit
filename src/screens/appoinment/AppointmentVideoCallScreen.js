import React from 'react';

import {Text, View} from 'react-native';
import ScreenWrapper from '../../common/ScreenWrapper';
import {Colors} from '../../constants/colors';

const AppointmentVideoCall = () => {
  return (
    <ScreenWrapper style={{flex: 1}} backgroundColor={Colors.White} translucent={true}>
      <View style={{flex:1}}>
        <Text>AppointmentVideoCall</Text>
      </View>
    </ScreenWrapper>
  );
};

export default AppointmentVideoCall;
