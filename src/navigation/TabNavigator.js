import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import SettingScreen from '../screens/setting/SettingScreen';
import MessageScreen from '../screens/messages/MessageScreen';
import MyAppointmentScreen from '../screens/appoinment/MyAppointmentScreen';
import ActiveHome from '../assets/svg/ActiveHome';
import InActiveHome from '../assets/svg/InActiveHome';
import InActiveAppointment from '../assets/svg/InActiveAppointment';
import ActiveAppointment from '../assets/svg/ActiveAppointment';
import ActiveMessage from '../assets/svg/ActiveMessage';
import InActiveMessage from '../assets/svg/InActiveMessage';
import ActiveSetting from '../assets/svg/ActiveSetting';
import InActiveSetting from '../assets/svg/InActiveSetting';
import {Colors} from '../constants/colors';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 100,
          backgroundColor:Colors.White,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <ActiveHome /> : <InActiveHome />,
        }}
      />
      <Tab.Screen
        name="Appointment"
        component={MyAppointmentScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <ActiveAppointment /> : <InActiveAppointment />,
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <ActiveMessage /> : <InActiveMessage />,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <ActiveSetting /> : <InActiveSetting />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
