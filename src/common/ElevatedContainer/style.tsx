import {StatusBar, StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
    height: 100,
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
