import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import SettingScreen from '../screens/setting/SettingScreen';
import EmailScreen from '../screens/email/EmailScreen';
import CalendarScreen from '../screens/calendar/CalendarScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Email" component={EmailScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
