import {View, Text, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../common/ScreenWrapper';
import {Colors} from '../../constants/colors';
import CustomElevatedContainer from '../../common/ElevatedContainer/CustomElevatedContainer';
import {textStyles} from '../../styles/textStyles';
import CustomTextInput from '../../common/TextInput/CustomTextInput';
import CustomButton from '../../common/Button/CustomButton';
import FacebookIcon from '../../assets/svg/FacebookIcon';
import GoogleIcon from '../../assets/svg/GoogleIcon';
import TwitterIcon from '../../assets/svg/TwitterIcon';
import MedixLogo from '../../assets/svg/MedixLogo';
import styles from './style';

const LoginScreen = () => {
  return (
    <ScreenWrapper
      translucent={true}
      backgroundColor={Colors.White}
      style={styles.container}>
      <KeyboardAvoidingView style={{flexGrow: 1}}>
        <CustomElevatedContainer title="Sign In" />
        <View style={styles.paddingHorizontal}>
          <View style={styles.marginVertical}>
            <MedixLogo />
            <Text style={[textStyles.heading, {paddingTop: 10}]}>
              Welcome{'\n'}back!
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <CustomTextInput
              label="Email"
              placeholder="Enter Your Email"
              rightSideIcon={true}
              iconSource={require('../../assets/images/Circle_checked.png')}
            />
            <View style={styles.marginTop20}>
              <CustomTextInput
                label="Password"
                placeholder="Enter Your Password"
                isPassword={true}
              />
            </View>
          </View>

          <CustomButton title="Sign In" />

          <TouchableOpacity activeOpacity={0.7} style={styles.marginTop20}>
            <Text style={textStyles.centeredBoldText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
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
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
};

export default LoginScreen;
