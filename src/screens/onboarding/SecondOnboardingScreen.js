import React from 'react';
import {appointmentSvg} from '../../constants/svg';
import CustomOnboarding from '../../common/OnBoarding/CustomOnboarding';

const SecondOnboardingScreen = ({navigation}) => {
  return (
    <CustomOnboarding
      heading="Make an Appointment"
      title="Make your doctor appointment as easy as post a status from your Facebook."
      xml={appointmentSvg}
      onPress={() => {
        navigation.replace('OnBoardingStack', {
          screen: 'LastOnboardingScreen',
        });
      }}
    />
  );
};

export default SecondOnboardingScreen;
