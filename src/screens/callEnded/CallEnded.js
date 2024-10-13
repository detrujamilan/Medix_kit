// CallEnded.js
import React from 'react';
import {Image, KeyboardAvoidingView, Text, TextInput, View} from 'react-native';
import ScreenWrapper from '../../common/ScreenWrapper';
import {Colors} from '../../constants/colors';
import {textStyles} from '../../styles/textStyles';
import {ShadowedView, shadowStyle} from 'react-native-fast-shadow';
import CallEndedIcon from '../../assets/svg/CallEndedIcon';
import CustomButton from '../../common/Button/CustomButton';
import {styles} from '../appoinment/style';

const CallEnded = () => {
  return (
    <ScreenWrapper
      backgroundColor={Colors.White}
      style={styles.screenWrapper}
      translucent={false}>
      <View style={styles.mainContainer}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingView}
          behavior="padding">
          <View style={styles.centerAlign}>
            <CallEndedIcon />
            <Text style={[textStyles.heading, styles.titleText]}>
              Your call{'\n'}has ended
            </Text>
          </View>
          <ShadowedView
            style={[
              styles.shadowContainer,
              shadowStyle({opacity: 0.05, radius: 20, offset: [0, 0]}),
            ]}>
            <View style={styles.innerShadow}>
              <View style={styles.doctorInfoContainer}>
                <View style={styles.doctorAvatar}>
                  <Image
                    source={require('../../assets/images/doctorAvatar.png')}
                    style={{width: '100%', height: '100%'}}
                    resizeMode="cover"
                  />
                </View>
                <View style={styles.doctorDetails}>
                  <View>
                    <Text style={textStyles.textBold}>Dr. Anna Nicholas</Text>
                    <Text
                      style={[
                        textStyles.uppercaseText,
                        styles.doctorSpecialtyText,
                      ]}>
                      Neurologist | Metro Hospital
                    </Text>
                  </View>
                  <View style={styles.dateTimeContainer}>
                    <Text style={textStyles.labelText}>20 January 2020</Text>
                    <Text style={[textStyles.labelText, styles.dateTimeText]}>
                      11.30
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.summaryContainer}>
                <View style={styles.summaryPadding}>
                  <Text style={textStyles.emphasizedText}>Summary</Text>
                  <View style={styles.summaryText}>
                    <Text style={textStyles.bodyText}>Status</Text>
                    <Text style={[textStyles.bodyText, styles.emphasizedText]}>
                      Ended
                    </Text>
                  </View>
                  <View style={styles.summaryText}>
                    <Text style={textStyles.bodyText}>Call Duration</Text>
                    <Text style={[textStyles.bodyText, styles.emphasizedText]}>
                      20.41
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.reviewContainer}>
                <Text style={textStyles.emphasizedText}>Give your review</Text>
                <View style={styles.ratingContainer}>
                  <Text style={textStyles.bodyText}>Rating</Text>
                </View>
                <View style={styles.reviewBox}>
                  <TextInput
                    multiline={true}
                    placeholder="Write your review here"
                    placeholderTextColor={Colors.Heather}
                    keyboardType="default"
                    style={[styles.reviewInput, textStyles.bodyText]}
                  />
                  <Text
                    style={[
                      styles.reviewPlaceholderText,
                      textStyles.labelText,
                    ]}>
                    Write Review
                  </Text>
                </View>
              </View>
            </View>
          </ShadowedView>
          <View style={styles.submitButtonContainer}>
            <CustomButton title="Submit Review" />
          </View>
        </KeyboardAvoidingView>
      </View>
    </ScreenWrapper>
  );
};

export default CallEnded;
