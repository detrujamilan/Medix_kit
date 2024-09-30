import {View, Text} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../../common/ScreenWrapper';
import {Colors} from '../../../constants/colors';
import CustomElevatedContainer from '../../../common/ElevatedContainer/CustomElevatedContainer';
import {textStyles} from '../../../styles/textStyles';
import CustomTextInput from '../../../common/TextInput/CustomTextInput';
import CustomButton from '../../../common/Button/CustomButton';
import {styles} from './style';

const ForgotPassword = () => {
  return (
    <ScreenWrapper
      translucent={true}
      backgroundColor={Colors.White}
      style={styles.screenWrapper}>
      <CustomElevatedContainer title="Recover Password" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={textStyles.heading}>Recover{'\n'}Password</Text>
          <Text style={[textStyles.bodyText, styles.bodyText]}>
            Please enter your email acount to{'\n'}recover your lost password.
          </Text>
        </View>
        <View>
          <CustomTextInput
            label="Email"
            placeholder="E,g: yourname@email.com"
          />
          <CustomButton title="Submit" style={styles.submitButton} />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default ForgotPassword;
