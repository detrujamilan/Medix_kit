import {StyleSheet, Dimensions, StatusBar} from 'react-native';
import {Colors} from '../../constants/colors';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop:StatusBar.currentHeight
  },
  topSection: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userNameText: {
    marginLeft: 30,
  },
  avatarContainer: {
    width: 36,
    height: 36,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  illustrationContainer: {
    marginTop: 10,
    width: 313,
    height: 283,
    alignSelf: 'center',
  },
  illustration: {
    width: '100%',
    height: '100%',
  },
  infoCardContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  infoCard: {
    backgroundColor: Colors.White,
    borderRadius: 18,
    shadowOpacity: 0.019,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 15,
    },
  },
  infoCardContent: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 40,
  },
  infoRow: {
    flexDirection: 'row',
    marginTop: 20,
  },
  appointmentContainer: {
    marginTop: 30,
  },
  appointmentCard: {
    backgroundColor: Colors.White,
    borderRadius: 18,
    shadowOpacity: 0.019,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    marginTop: 10,
  },
  appointmentContent: {
    padding: 20,
  },
  categoryContainer: {
    marginVertical: 30,
  },
  categoryList: {
    marginTop: 9,
  },
  gridView: {
    backgroundColor: Colors.White,
    borderRadius: 18,
    width: (screenWidth - 65) / 3,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.02,
    shadowRadius: 0.1,
    shadowOffset: {
      width: 1,
      height: 3,
    },
    marginBottom: 10,
  },
  gridImage: {
    width: 50,
    height: 50,
    marginTop: 15,
  },
  gridText: {
    paddingVertical: 14,
  },
  iconBgStyle:{
    backgroundColor: 'rgba(107, 72, 255, 0.18)',
    width: 48,
    height: 48,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
