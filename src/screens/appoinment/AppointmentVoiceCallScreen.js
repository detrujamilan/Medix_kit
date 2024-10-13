import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import ScreenWrapper from '../../common/ScreenWrapper';
import {Colors} from '../../constants/colors';
import CustomBackButton from '../../common/BackButton/CustomBackButton';
import Icon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {ShadowedView, shadowStyle} from 'react-native-fast-shadow';
import {textStyles} from '../../styles/textStyles';
import CallEndedIcon from '../../assets/svg/CallEndedIcon';
import {styles} from './style';

const AppointmentVoiceCall = () => {
  return (
    <ScreenWrapper style={{flex: 1}} backgroundColor={Colors.White}>
      <View style={{flex: 1, marginTop: 21, paddingHorizontal: 20}}>
        <View style={styles.topRow}>
          <TouchableOpacity activeOpacity={0.7}>
            <ShadowedView
              style={[
                styles.shadowedView,
                shadowStyle({
                  opacity: 0.05,
                  radius: 20,
                  offset: [0, 0],
                }),
              ]}>
              <Icon name="chevron-back" size={20} color={Colors.Madison} />
            </ShadowedView>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <ShadowedView
              style={[
                styles.shadowedView,
                shadowStyle({
                  opacity: 0.05,
                  radius: 20,
                  offset: [0, 0],
                }),
              ]}>
              <FeatherIcon name={'volume-2'} color={Colors.Madison} size={24} />
            </ShadowedView>
          </TouchableOpacity>
        </View>
        <View style={styles.centerContent}>
          <View style={styles.doctorImage}>
            <Image
              source={require('../../assets/images/doctorAvatar.png')}
              style={{width: '100%', height: '100%'}}
              resizeMode="cover"
            />
          </View>
          <Text style={[styles.doctorNameText, textStyles.primaryText]}>
            Dr. Anna Nicholas
          </Text>
          <Text style={textStyles.bodyText}>03:37:45</Text>
          <View style={styles.soundWavesImage}>
            <Image
              source={require('../../assets/images/soundWaves.png')}
              style={{width: '100%', height: '100%'}}
            />
          </View>
        </View>
        <View style={styles.bottomControls}>
          <View style={styles.buttonRow}>
            <TouchableOpacity activeOpacity={0.7}>
              <Icon name="mic-off-outline" size={24} color={Colors.Madison} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.endCallButton} activeOpacity={0.7}>
              <CallEndedIcon />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}>
              <Icon
                name="volume-mute-outline"
                size={24}
                color={Colors.Madison}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default AppointmentVoiceCall;
