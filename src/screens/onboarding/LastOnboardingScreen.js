import React from 'react';
import {consultSvg} from '../../constants/svg';
import CustomOnboarding from '../../common/OnBoarding/CustomOnboarding';

const LastOnboardingScreen = ({navigation}) => {
  return (
    <CustomOnboarding
      heading={`Consult from Home`}
      xml={consultSvg}
      title={'Make your doctor appointment as easy as post a status from your Facebook.'}
      lastOnScreen={true}
    />
  );
};

export default LastOnboardingScreen;
