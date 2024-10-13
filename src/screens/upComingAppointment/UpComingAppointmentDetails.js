import React from 'react';

import {Image, Text, TouchableOpacity, View} from 'react-native';
import ScreenWrapper from '../../common/ScreenWrapper';
import {Colors} from '../../constants/colors';
import CustomElevatedContainer from '../../common/ElevatedContainer/CustomElevatedContainer';
import Icon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {textStyles} from '../../styles/textStyles';
import PlayIcon from '../../assets/svg/PlayIcon';
import {ShadowedView, shadowStyle} from 'react-native-fast-shadow';

const UpComingAppointmentDetails = () => {
  return (
    <ScreenWrapper
      backgroundColor={Colors.White}
      style={{flex: 1}}
      translucent={true}>
      <CustomElevatedContainer title="Upcoming" />

      <View style={{marginTop: 30, flex: 1, paddingHorizontal: 20}}>
        <ShadowedView
          style={[{
            shadowOpacity: 0.1,
            shadowRadius: 10,
            shadowOffset: {
              width: 0,
              height: 0,
            },
          },shadowStyle({ opacity: 0.1, radius: 5, offset: [0, 0] })]}>
          <View style={{backgroundColor: 'white', borderRadius: 18}}>
            <View
              style={{
                padding: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{width: 100, height: 73}}>
                <Image
                  source={require('../../assets/images/doctorAvatar.png')}
                  style={{width: '100%', height: '100%'}}
                  resizeMode="cover"
                />
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text style={textStyles.textBold}>Dr. Anna Nicholas</Text>
                  <Text
                    style={[
                      textStyles.uppercaseText,
                      {color: Colors.Heather, paddingTop: 4},
                    ]}>
                    Neurologist | Metro Hospital
                  </Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={textStyles.labelText}>20 January 2020</Text>
                  <Text style={[textStyles.labelText, {paddingLeft: 24}]}>
                    11.30
                  </Text>
                </View>
              </View>
              <View>
                <Icon
                  name="dots-three-horizontal"
                  size={20}
                  color={Colors.Madison}
                />
              </View>
            </View>
            <View
              style={{
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderColor: Colors.AthensGray,
                padding: 19,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <PlayIcon />
                  <Text style={[textStyles.bodyText, {paddingLeft: 12}]}>
                    Video Call
                  </Text>
                </View>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={{
                    backgroundColor: Colors.Primary,
                    borderRadius: 18,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: 10,
                    width: 148,
                    justifyContent: 'flex-end',
                    paddingHorizontal: 15,
                  }}>
                  <Text
                    style={[
                      textStyles.centeredBoldText,
                      {color: Colors.White},
                    ]}>
                    Start Now
                  </Text>
                  <AntIcon
                    name="arrowright"
                    color={Colors.White}
                    size={20}
                    style={{paddingLeft: 12}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: Colors.AthensGray,
                padding: 20,
              }}>
              <Text style={textStyles.emphasizedText}>Consultation</Text>
              <View style={{paddingVertical: 10}}>
                <Text
                  style={[
                    textStyles.centeredRegularText,
                    {textAlign: 'left', color: Colors.Madison},
                  ]}>
                  Complaint
                </Text>
                <Text style={[textStyles.skipText, {paddingTop: 3}]}>
                  Headache and Nausea
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    textStyles.centeredRegularText,
                    {textAlign: 'left', color: Colors.Madison},
                  ]}>
                  Description
                </Text>
                <Text style={[textStyles.skipText, {paddingTop: 3}]}>
                  I am feeling pain in the eyes when looking into bright lights
                  also tightness sensation in the head
                </Text>
              </View>
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: Colors.AthensGray,
                padding: 19,
              }}>
              <Text style={textStyles.emphasizedText}>Patient Details</Text>
              <View style={{paddingVertical: 10}}>
                <Text
                  style={[
                    textStyles.centeredRegularText,
                    {textAlign: 'left', color: Colors.Madison},
                  ]}>
                  Name
                </Text>
                <Text style={[textStyles.skipText, {paddingTop: 3}]}>
                  Pascal Desroche
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    textStyles.centeredRegularText,
                    {textAlign: 'left', color: Colors.Madison},
                  ]}>
                  Email
                </Text>
                <Text style={[textStyles.skipText, {paddingTop: 3}]}>
                  youza@gmail.com
                </Text>
              </View>
              <View style={{paddingTop: 10}}>
                <Text
                  style={[
                    textStyles.centeredRegularText,
                    {textAlign: 'left', color: Colors.Madison},
                  ]}>
                  Gender
                </Text>
                <Text style={[textStyles.skipText, {paddingTop: 3}]}>Male</Text>
              </View>
            </View>
          </View>
        </ShadowedView>
      </View>
    </ScreenWrapper>
  );
};

export default UpComingAppointmentDetails;
