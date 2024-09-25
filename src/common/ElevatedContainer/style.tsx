import {StatusBar, StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
    shadowColor: 'rgba(13, 63, 103, 0.1)',
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowOpacity: 1,
    shadowRadius: 40,
    elevation: 10,
  },
  innerContainer: {
    marginTop: StatusBar.currentHeight,
  },
  header: {
    paddingHorizontal: 20,
    marginTop: 15,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
