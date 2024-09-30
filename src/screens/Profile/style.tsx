import {StyleSheet} from 'react-native';
import {Fonts} from '../../constants/fonts';
import {Colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    paddingHorizontal: 20,
  },
  container: {
    marginVertical: 30,
  },
  profileImage: {
    marginTop: 16,
    flexDirection: 'row',
  },
  editIconWrapper: {
    position: 'absolute',
    right: -50,
    top: 0,
    backgroundColor: Colors.White,
    padding: 9,
    borderRadius: 9,
    shadowColor: 'rgb(13, 63, 103, 0.1)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.065,
    shadowRadius: 0.4,
    elevation: 2,
  },
  locationWrapper: {
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoContainer: {
    shadowColor: 'rgb(13, 63, 103, 0.1)',
    shadowOffset: {width: 0, height: 13},
    shadowOpacity: 0.145,
    shadowRadius: 18.5,
    elevation: 2,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    backgroundColor: Colors.White,
  },
  infoContent: {
    padding: 20,
  },
  infoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  changeButton: {
    borderColor: Colors.Primary,
    borderWidth: 1,
    paddingVertical: 9,
    borderRadius: 18,
    paddingHorizontal: 20,
  },
  personalInfoText: {
    fontFamily: Fonts.SfSemibold,
    marginTop: 3,
  },
  infoFooter: {
    marginTop: 1,
    shadowColor: 'rgb(13, 63, 103, 0.1)',
    shadowOffset: {width: -18.5, height: 0},
    shadowOpacity: 0.05,
    shadowRadius: 19.8,
    elevation: 2,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    backgroundColor: Colors.White,
  },
  tagWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  tagContainer: {
    marginRight: 5,
    paddingVertical: 2,
    paddingHorizontal: 10,
    backgroundColor: Colors.AthensGray,
    borderRadius: 5,
  },
});
