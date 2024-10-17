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
import LostConnection from '../screens/lostConnection/LostConnection';
import LoadingState from '../screens/loadingState/LoadingState';
import NoAppointment from '../screens/noAppointment/NoAppoinment';
import UpComingAppointmentDetails from '../screens/upComingAppointment/UpComingAppointmentDetails';
import CallEnded from '../screens/callEnded/CallEnded';
import AppointmentVideoCall from '../screens/appoinment/AppointmentVideoCallScreen';
import AppointmentVoiceCall from '../screens/appoinment/AppointmentVoiceCallScreen';
import MessageList from '../screens/messages/MessageListScreen';
import MessageDetail from '../screens/messages/MessageDetailScreen';
import PurchaseDetail from '../screens/home/purchaseDetail/PurchaseDetailScreen';
import PaymentSuccessful from '../screens/paymentSuccessful/PaymentSuccessfulScreen';
import PaymentDeclined from '../screens/paymentSuccessful/PaymentDeclinedScreen';
import PayFee from '../screens/paymentSuccessful/PayFeeScreen.';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="OnBoardingStack">
      <Stack.Screen name="TabStack" component={TabNavigator} />
      <Stack.Screen name="OnBoardingStack" component={OnBoardingStack} />
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="AppointmentStack" component={AppointmentStack} />
      <Stack.Screen name="MessageStack" component={MessageStack} />
      <Stack.Screen name="HomeStack" component={HomeStack} />
      <Stack.Screen name="PaymentStack" component={PaymentStack} />
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

export const AppointmentStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="NoAppointment" component={NoAppointment} />
    <Stack.Screen
      name="UpComingAppointment"
      component={UpComingAppointmentDetails}
    />
    <Stack.Screen name="CallEnded" component={CallEnded} />
    <Stack.Screen
      name="AppointmentVideoCall"
      component={AppointmentVideoCall}
    />
    <Stack.Screen
      name="AppointmentVoiceCall"
      component={AppointmentVoiceCall}
    />
  </Stack.Navigator>
);

export const MessageStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="MessageDetail" component={MessageDetail} />
    <Stack.Screen name="MessageList" component={MessageList} />
  </Stack.Navigator>
);

export const HomeStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="PurchaseDetail" component={PurchaseDetail} />
  </Stack.Navigator>
);

export const PaymentStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="PaymentDeclined" component={PaymentDeclined} />
    <Stack.Screen name="PaymentSuccessful" component={PaymentSuccessful} />
    <Stack.Screen name="PayFee" component={PayFee} />
  </Stack.Navigator>
);
export const AuthStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Signup" component={SignupScreen} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    <Stack.Screen name="OtpScreen" component={OtpScreen} />
    <Stack.Screen name="LostConnection" component={LostConnection} />
    <Stack.Screen name="LoadingState" component={LoadingState} />
  </Stack.Navigator>
);

export default StackNavigator;
