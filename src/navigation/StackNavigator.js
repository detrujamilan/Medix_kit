import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import SplashScreen from '../screens/splash/SplashScreen';
import SecondOnboardingScreen from '../screens/onboarding/SecondOnboardingScreen';
import FirstOnboardingScreen from '../screens/onboarding/FirstOnboardingScreen';
import LastOnboardingScreen from '../screens/onboarding/LastOnboardingScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import SignupScreen from '../screens/Auth/ForgotPassword/Signup/SignupScreen';
import ForgotPassword from '../screens/Auth/ForgotPassword/ForgotPassword';
import OtpScreen from '../screens/Auth/Otp/OtpScreen';


const Stack = createNativeStackNavigator();



const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="OnBoardingStack">
      <Stack.Screen name="TabStack" component={TabNavigator} />
      <Stack.Screen name="OnBoardingStack" component={OnBoardingStack} />
      <Stack.Screen name="AuthStack" component={AuthStack} />
    </Stack.Navigator>
  );
};

export const OnBoardingStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Splash" component={SplashScreen} />
    <Stack.Screen
      name="FirstOnboardingScreen"
      component={FirstOnboardingScreen}
    />
    <Stack.Screen
      name="SecondOnboardingScreen"
      component={SecondOnboardingScreen}
    />
    <Stack.Screen
      name="LastOnboardingScreen"
      component={LastOnboardingScreen}
    />
  </Stack.Navigator>
);

export const AuthStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Signup" component={SignupScreen} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    <Stack.Screen name="OtpScreen" component={OtpScreen} />
  </Stack.Navigator>
);

export default StackNavigator;
