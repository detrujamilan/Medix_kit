import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../common/ScreenWrapper';
import {Colors} from '../../constants/colors';
import {styles} from '../home/style';
import CustomBackButton from '../../common/BackButton/CustomBackButton';
import {UnreadMessageData} from '../../utils/data';
import {textStyles} from '../../styles/textStyles';
import {ShadowedView} from 'react-native-fast-shadow';
import CustomTopTabNavigator from '../../common/TopTabNavigator/CustomTopTabNavigator';
import {messageStyles} from './style';

const MessageList = ({navigation}) => {
  const UnreadMessage = () => (
    <View style={{marginTop: 20}}>
      {UnreadMessageData.map((data, index) => (
        <TouchableOpacity
          activeOpacity={0.7}
          key={data.id || index}
          onPress={() =>
            navigation.navigate('MessageStack', {
              screen: 'MessageDetail',
              params: data,
            })
          }>
          <ShadowedView style={styles.appointmentCard}>
            <View
              style={[
                styles.appointmentContent,
                messageStyles.appointmentContent,
              ]}>
              <View style={messageStyles.avatarImage}>
                <Image
                  source={data.avatar}
                  style={{width: '100%', height: '100%'}}
                />
              </View>
              <View style={messageStyles.messageContainer}>
                <View style={messageStyles.messageHeader}>
                  <Text style={textStyles.emphasizedText}>{data.name}</Text>
                  <View style={messageStyles.dateContainer}>
                    <Text
                      style={[textStyles.labelText, {color: Colors.Primary}]}>
                      {data.date}
                    </Text>
                  </View>
                </View>
                <Text style={messageStyles.messageText}>{data.message}</Text>
              </View>
            </View>
          </ShadowedView>
        </TouchableOpacity>
      ))}
    </View>
  );
  const ReadMessage = () => (
    <View style={{marginTop: 20}}>
      {UnreadMessageData.map((data, index) => (
        <TouchableOpacity
          activeOpacity={0.7}
          key={data.id || index}
          onPress={() =>
            navigation.navigate('MessageStack', {
              screen: 'MessageDetail',
              params: data,
            })
          }>
          <ShadowedView style={styles.appointmentCard}>
            <View
              style={[
                styles.appointmentContent,
                messageStyles.appointmentContent,
              ]}>
              <View style={messageStyles.avatarImage}>
                <Image
                  source={data.avatar}
                  style={{width: '100%', height: '100%'}}
                />
              </View>
              <View style={messageStyles.messageContainer}>
                <View style={messageStyles.messageHeader}>
                  <Text style={textStyles.emphasizedText}>{data.name}</Text>
                  <View style={messageStyles.dateContainer}>
                    <Text
                      style={[textStyles.labelText, {color: Colors.Primary}]}>
                      {data.date}
                    </Text>
                  </View>
                </View>
                <Text style={messageStyles.messageText}>{data.message}</Text>
              </View>
            </View>
          </ShadowedView>
        </TouchableOpacity>
      ))}
    </View>
  );
  const tabs = [
    {name: 'Unread (4)', component: <UnreadMessage />},
    {name: 'Read', component: <ReadMessage />},
  ];
  return (
    <ScreenWrapper backgroundColor={Colors.White} style={styles.screenWrapper}>
      <View>
        <CustomBackButton label="My Messages" style={{marginTop: 15}} />
        <View style={{marginTop: 30}}>
          <CustomTopTabNavigator tabs={tabs} />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default MessageList;
