import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

export const onboardingStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    paddingHorizontal: 30,
  },
  signInButton: {
    borderWidth: 1,
    borderColor: Colors.Primary,
    marginTop: 20,
  },
});
