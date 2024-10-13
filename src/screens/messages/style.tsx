import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';
import {Fonts} from '../../constants/fonts';

export const messageStyles = StyleSheet.create({
  // MessgaeListCss

  appointmentCard: {
    marginBottom: 15,
    padding: 15,
  },
  appointmentContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avatarImage: {
    width: 36,
    height: 36,
  },
  messageContainer: {
    width: '88%',
    paddingLeft: 20,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateContainer: {
    backgroundColor: Colors.AthensGray,
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  messageText: {
    fontSize: 13,
    fontFamily: Fonts.SfRegular,
    color: Colors.Madison,
    lineHeight: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  todayText: {
    fontSize: 13,
    fontFamily: Fonts.SfBold,
    textAlign: 'center',
    color: Colors.Heather,
  },
  messageRow: {
    paddingVertical: 20,
    flexDirection: 'row',
    width: '100%',
  },
  avatarContainer: {
    width: '13%',
  },
  messageContent: {
    width: '87%',
  },
  receivedMessage: {
    backgroundColor: Colors.AthensGray,
    paddingVertical: 14,
    paddingHorizontal: 21,
    borderRadius: 18,
  },
  replyRow: {
    flexDirection: 'row',
    width: '100%',
  },
  replyContent: {
    width: '84%',
    alignItems: 'flex-end',
    marginRight: 20,
  },
  sentMessage: {
    backgroundColor: Colors.Java,
    paddingVertical: 14,
    paddingHorizontal: 21,
    borderRadius: 18,
  },
  timestamp: {
    paddingTop: 5,
    fontFamily: Fonts.SfRegular,
  },
  inputContainer: {
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 48,
  },
  textInputContainer: {
    backgroundColor: Colors.AthensGray,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    width: '82%',
  },
  linkIcon: {
    paddingLeft: 15,
  },
  textInput: {
    paddingLeft: 10,
    paddingRight: 20,
    color: Colors.Madison,
    width:"88%"

  },
  sendButton: {
    backgroundColor: Colors.Primary,
    width: 48,
    height: 48,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },
});
