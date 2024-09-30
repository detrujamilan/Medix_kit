import {StatusBar, StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
    shadowColor: 'rgb(13, 63, 103, 0.1)',
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 16,
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
