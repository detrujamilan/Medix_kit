import React from 'react';

import {
  Image,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ScreenWrapper from '../../common/ScreenWrapper';
import {Colors} from '../../constants/colors';
import CustomElevatedContainer from '../../common/ElevatedContainer/CustomElevatedContainer';
import {textStyles} from '../../styles/textStyles';
import SendIcon from '../../assets/svg/SendIcon';
import LinkIcon from '../../assets/svg/LinkIcon';
import {messageStyles} from './style';

const MessageDetail = ({navigation, route}) => {
  const {name} = route.params;
  return (
    <ScreenWrapper
      backgroundColor={Colors.White}
      style={{flex: 1}}
      translucent={true}>
      <CustomElevatedContainer title={name} />
      <View style={messageStyles.container}>
        <Text style={messageStyles.todayText}>Today</Text>
        <View style={messageStyles.messageRow}>
          <View style={messageStyles.avatarContainer}>
            <Image
              source={require('../../assets/images/avatar.png')}
              style={messageStyles.avatarImage}
            />
          </View>
          <View style={messageStyles.messageContent}>
            <View style={messageStyles.receivedMessage}>
              <Text style={messageStyles.messageText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </Text>
            </View>
            <Text style={[messageStyles.timestamp, textStyles.labelText]}>
              14.20
            </Text>
          </View>
        </View>
        <View style={messageStyles.replyRow}>
          <View style={messageStyles.replyContent}>
            <View style={messageStyles.sentMessage}>
              <Text style={messageStyles.messageText}>Yes, thank you</Text>
            </View>
            <Text style={[messageStyles.timestamp, textStyles.labelText]}>
              14.20
            </Text>
          </View>
          <View style={messageStyles.avatarContainer}>
            <Image
              source={require('../../assets/images/avatar.png')}
              style={messageStyles.avatarImage}
            />
          </View>
        </View>
      </View>
      <View style={messageStyles.inputContainer}>
        <View style={messageStyles.inputRow}>
          <View style={messageStyles.textInputContainer}>
            <TouchableOpacity
              style={messageStyles.linkIcon}
              activeOpacity={0.7}>
              <LinkIcon />
            </TouchableOpacity>
            <TextInput
              placeholder="Write your message"
              placeholderTextColor={Colors.Heather}
              style={[messageStyles.textInput, textStyles.bodyText]}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={messageStyles.sendButton}>
            <SendIcon />
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default MessageDetail;
