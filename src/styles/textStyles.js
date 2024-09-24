import {StyleSheet} from 'react-native';
import {Fonts} from '../constants/fonts';
import {Colors} from '../constants/colors';

export const textStyles = StyleSheet.create({
  mainHeading: {
    fontSize: 36,
    fontFamily: Fonts.SfBold,
    color: Colors.Madison,
    lineHeight: 40,
  },
  bodyText: {
    fontSize: 15,
    fontWeight: 'regular',
    color: Colors.Madison,
    fontFamily: Fonts.SfRegular,
  },
  skipText: {
    fontFamily: Fonts.SfBold,
    fontSize: 15,
    lineHeight: 16,
    color: Colors.Madison,
  },
  button: {
    borderRadius: 18,
    shadowColor: 'rgba(13, 63, 103, 0.1)',
    shadowOffset: {width: 0, height: 16},
    shadowOpacity: 1,
    shadowRadius: 40,
    elevation: 5,
    
  },
});
