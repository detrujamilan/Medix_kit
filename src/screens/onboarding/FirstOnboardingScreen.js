import React from 'react';
import {symptoms} from '../../constants/svg';
import CustomOnboarding from '../../common/OnBoarding/CustomOnboarding';

const FirstOnboardingScreen = ({navigation}) => {
  return (
    <CustomOnboarding
      heading="Find your Symptoms"
      title="Make your doctor appointment as easy as post a status from your Facebook."
      xml={symptoms}
      onPress={() => {
        navigation.replace('OnBoardingStack', {
          screen: 'SecondOnboardingScreen',
        });
      }}
    />
  );
};

export default FirstOnboardingScreen;
