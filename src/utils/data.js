import AppointmentIcon from '../assets/svg/AppointmentIcon';
import CardIcon from '../assets/svg/CardIcon';
import ClockIcon from '../assets/svg/ClockIcon';
import InfoIcon from '../assets/svg/InfoIcon';
import NotificationIcon from '../assets/svg/NotificationIcon';
import PoliciesIcon from '../assets/svg/PoliciesIcon';
import SettingIcon from '../assets/svg/SettingIcon';
import UserIcon from '../assets/svg/UserIcon';
import {Colors} from '../constants/colors';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';


export const SettingScreenData = [
  {
    id: 1,
    icon: SettingIcon,
    title: 'Account',
    route: 'Profile',
  },
  {
    id: 2,
    icon: CardIcon,
    title: 'Payment Account',
  },
  {
    id: 3,
    icon: NotificationIcon,
    title: 'Notification',
  },
  {
    id: 4,
    icon: UserIcon,
    title: 'Invite Friends',
  },
  {
    id: 5,
    icon: InfoIcon,
    title: 'Support',
  },
  {
    id: 6,
    icon: PoliciesIcon,
    title: 'Terms & Policies',
  },
];

export const ProfileScreenData = [
  {
    id: 1,
    icon: AppointmentIcon,
    title: 'Appoinments',
    value: '2,346',
  },
  {
    id: 2,
    icon: ClockIcon,
    title: 'Hours',
    value: '14,560',
  },
  {
    id: 3,
    icon: CardIcon,
    title: 'Spending',
    value: '$250',
  },
];

export const topCategoryData = [
  {
    id: 1,
    title: 'Dental',
    image: require('../assets/images/dental.png'),
  },
  {
    id: 2,
    title: 'Eye',
    image: require('../assets/images/Eye.png'),
  },
  {
    id: 3,
    title: 'Respiratory',
    image: require('../assets/images/Lung.png'),
  },
];



export const appoinmentsData = [
  {
    id:1,
    date:"20 Jan",
    testTitle:"Headache and nausea",
    drName:"Dr. Jonas Edmund",
    bgColor:Colors.YellowOrange,
    icon:<Feather name={"play"} size={28} color={Colors.Yellow}/>
  },
  {
    id:2,
    date:"20 Jan",
    testTitle:"Pregnancy test",
    drName:"Dr. Jeremy James",
    bgColor:Colors.Aquamarine,
    icon:<Feather name={"phone-call"} size={28} color={Colors.Java}/>
  },
  {
    id:3,
    date:"20 Jan",
    testTitle:"Problems with dental medica ...",
    drName:"Dr. Anna Nicholas",
    bgColor:Colors.Violet,
    icon: <MaterialCommunityIcons
      name={'message-text-outline'}
      size={28}
      color={Colors.Primary}
    />
  },
]