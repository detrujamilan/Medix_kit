import AppointmentIcon from '../assets/svg/AppointmentIcon';
import CardIcon from '../assets/svg/CardIcon';
import ClockIcon from '../assets/svg/ClockIcon';
import InfoIcon from '../assets/svg/InfoIcon';
import NotificationIcon from '../assets/svg/NotificationIcon';
import PoliciesIcon from '../assets/svg/PoliciesIcon';
import SettingIcon from '../assets/svg/SettingIcon';
import UserIcon from '../assets/svg/UserIcon';

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
