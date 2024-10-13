import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';
import {Fonts} from '../../constants/fonts';

export const styles = StyleSheet.create({
  // callEndedStyle
  screenWrapper: {
    flex: 1,
    paddingHorizontal: 20,
  },
  mainContainer: {
    flex: 1,
    marginTop: 41,
  },
  keyboardAvoidingView: {
    flexGrow: 1,
  },
  centerAlign: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    textAlign: 'center',
    paddingTop: 20,
  },
  shadowContainer: {
    marginTop: 30,
    shadowOpacity: 0.4,
    shadowRadius: 12,
  },
  innerShadow: {
    backgroundColor: Colors.White,
    borderRadius: 18,
  },
  doctorInfoContainer: {
    padding: 20,
    flexDirection: 'row',
  },
  doctorAvatar: {
    width: 73,
    height: 73,
  },
  doctorDetails: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 20,
  },
  doctorSpecialtyText: {
    color: Colors.Heather,
    paddingTop: 4,
  },
  dateTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateTimeText: {
    paddingLeft: 24,
  },
  summaryContainer: {
    borderColor: Colors.AthensGray,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  summaryPadding: {
    padding: 20,
  },
  summaryText: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  emphasizedText: {
    fontFamily: Fonts.SfSemibold,
  },
  reviewContainer: {
    padding: 20,
  },
  ratingContainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewBox: {
    backgroundColor: Colors.AthensGray,
    height: 100,
    padding: 20,
    borderRadius: 9,
  },
  reviewInput: {
    backgroundColor: Colors.AthensGray,
    height: '100%',
    borderRadius: 9,
  },
  reviewPlaceholderText: {
    position: 'absolute',
    top: 10,
    left: 20,
  },
  submitButtonContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
  },

  // VoiceCallStyles

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  shadowedView: {
    backgroundColor: Colors.White,
    padding: 12,
    borderRadius: 18,
  },
  centerContent: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doctorImage: {
    width: 73,
    height: 73,
  },
  doctorNameText: {
    paddingVertical: 20,
    lineHeight: 28,
  },
  soundWavesImage: {
    marginTop: 40,
    width: 164,
    height: 77,
  },
  bottomControls: {
    position: 'absolute',
    bottom: 48,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  endCallButton: {
    paddingHorizontal: 43,
  },
});
