import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../../../common/ScreenWrapper';
import {Colors} from '../../../../constants/colors';
import CustomElevatedContainer from '../../../../common/ElevatedContainer/CustomElevatedContainer';
import MedixLogo from '../../../../assets/svg/MedixLogo';
import {textStyles} from '../../../../styles/textStyles';
import styles from '../../../Login/style';
import CustomTextInput from '../../../../common/TextInput/CustomTextInput';
import CustomButton from '../../../../common/Button/CustomButton';
import FacebookIcon from '../../../../assets/svg/FacebookIcon';
import GoogleIcon from '../../../../assets/svg/GoogleIcon';
import TwitterIcon from '../../../../assets/svg/TwitterIcon';

const SignupScreen = () => {
  return (
    <ScreenWrapper
      translucent={true}
      backgroundColor={Colors.White}
      style={{flex: 1}}>
      <CustomElevatedContainer title="Create Account" />
      <View style={styles.paddingHorizontal}>
        <View style={styles.marginVertical}>
          <MedixLogo />
          <Text style={[textStyles.heading, {paddingTop: 10}]}>
            Join our healthy{'\n'}
            community
          </Text>
        </View>
        <View>
          <CustomTextInput
            label="Full Name"
            placeholder="Your given name"
            iconSource={require('../../../../assets/images/Circle_checked.png')}
          />
          <CustomTextInput
            label="Email"
            placeholder="E.g: yourname@email.com"
            iconSource={require('../../../../assets/images/Circle_checked.png')}
            style={styles.marginTop20}
          />
          <CustomTextInput
            label="Password"
            placeholder="6-12 characters"
            isPassword={true}
            style={styles.marginTop20}
          />
        </View>

        <CustomButton title="Sign Up" style={{marginVertical: 30}} />
        <View style={{marginTop: 31, marginBottom: 10}}>
          <Text style={textStyles.centeredRegularText}>
            Connect with your social account
          </Text>
          <View style={styles.socialIconContainer}>
            <TouchableOpacity activeOpacity={0.7}>
              <FacebookIcon />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{marginHorizontal: 25}}>
              <GoogleIcon />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}>
              <TwitterIcon />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SignupScreen;
