import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';
import {Fonts} from '../../constants/fonts';

export const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    paddingHorizontal: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  shadowContainer: {
    backgroundColor: Colors.White,
    borderRadius: 18,
  },
  imageContainer: {
    width: 296,
    height: 230,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 16,
    width: '100%',
  },
  headingText: {
    paddingVertical: 20,
    textAlign: 'center',
  },
  changePaymentButton: {
    borderColor: Colors.Primary,
    borderWidth: 1,
    borderRadius: 18,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 16,
  },
  changePaymentButtonText: {
    color: Colors.Primary,
  },
  tryAgainButtonContainer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },

  // SuccessFulScreenCss
  container: {
    flex: 1,
    marginTop: 65,
  },
  imageCTN: {
    width: 260,
    height: 231,
    alignSelf: 'center',
  },
  shadowContent: {
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  orderInfoContainer: {
    paddingVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 3,
    borderStyle: 'dotted',
    borderBottomColor: Colors.Heather,
  },
  orderInfoText: {
    fontFamily: Fonts.SfSemibold,
    paddingTop: 5,
  },
  amountContainer: {
    alignItems: 'center',
    paddingTop: 44,
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
});
