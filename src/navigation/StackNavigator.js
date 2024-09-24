import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import SplashScreen from '../screens/splash/SplashScreen';
import OnboardingScreen from '../screens/onboarding/OnboardingScreen';
import OnboardingScreeOne from '../screens/onboarding/OnboardingScreenOne';
import OnboardingScreenTwo from '../screens/onboarding/OnboardingScreenTwo';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="OnboardingScreen">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="OnboardingScreeOne" component={OnboardingScreeOne} />
      <Stack.Screen
        name="OnboardingScreenTwo"
        component={OnboardingScreenTwo}
      />
      <Stack.Screen name="Main" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
