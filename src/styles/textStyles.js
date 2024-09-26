import {StyleSheet} from 'react-native';
import {Fonts} from '../constants/fonts';
import {Colors} from '../constants/colors';

export const textStyles = StyleSheet.create({
  heading: {
    fontSize: 36,
    fontFamily: Fonts.SfBold,
    color: Colors.Madison,
    lineHeight: 40,
  },
  bodyText: {
    fontSize: 15,
    color: Colors.Madison,
    fontFamily: Fonts.SfRegular,
    lineHeight: 20,
  },
  skipText: {
    fontFamily: Fonts.SfBold,
    fontSize: 15,
    lineHeight: 16,
    color: Colors.Madison,
  },
  textBold: {
    fontSize: 16,
    fontFamily: Fonts.SfBold,
    lineHeight: 24,
    color: Colors.Madison,
  },
  labelText: {
    fontFamily: Fonts.SfSemibold,
    fontSize: 11,
    lineHeight: 16,
    color: Colors.Madison,
  },
  centeredBoldText: {
    fontFamily: Fonts.SfBold,
    fontSize: 13,
    lineHeight: 14,
    textAlign: 'center',
    color: Colors.Madison,
  },
  centeredRegularText: {
    fontFamily: Fonts.SfRegular,
    fontSize: 13,
    lineHeight: 14,
    textAlign: 'center',
    color: Colors.Heather,
  },
});
