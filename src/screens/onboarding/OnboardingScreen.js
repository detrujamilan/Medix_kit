import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/common/ScreenWrapper';
import {styles} from './OnboardingScreenStyle';
import {SvgXml} from 'react-native-svg';
import {symptoms} from '../../constants/svg';
import {textStyles} from '../../styles/textStyles';
import CustomButton from '../../components/common/CustomButton';
import {Colors} from '../../constants/colors';
import {Fonts} from '../../constants/fonts';

const OnboardingScreen = ({navigation}) => {
  return (
    <ScreenWrapper
      translucent={true}
      style={styles.container}
      content="dark-content">
      <View style={{flex: 1}}>
        <View
          style={{marginTop: 70, width: 313, height: 290, alignSelf: 'center'}}>
          <SvgXml
            xml={symptoms}
            style={{
              width: '100%',
            }}
          />
        </View>
        <View style={{marginTop: 60}}>
          <View style={{alignItems: 'center'}}>
            <Text style={[textStyles.mainHeading, {textAlign: 'center'}]}>
              Find your Symptoms
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              marginTop: 20,
              width: 221,
              alignSelf: 'center',
            }}>
            <Text style={[textStyles.bodyText, {textAlign: 'center'}]}>
              Make your doctor appointment as easy as post a status from your
              Facebook.
            </Text>
          </View>
        </View>
        <View style={{position: 'absolute', bottom: 44, width: '100%'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity activeOpacity={0.7} style={{width: 31}}>
              <Text style={textStyles.skipText}>Skip</Text>
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: Colors.Primary,
                borderRadius: 18,
                width: 215,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 20,
                  paddingHorizontal: 27,
                  alignSelf: 'flex-end',
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: Fonts.SfBold,
                    color: Colors.White,
                  }}>
                  Next
                </Text>
                <View style={{paddingLeft: 46}}>
                  <Text>hello</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default OnboardingScreen;
