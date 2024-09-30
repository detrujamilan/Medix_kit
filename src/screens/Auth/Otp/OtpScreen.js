import {View, Text, TextInput} from 'react-native';
import React, {useRef, useState} from 'react';
import ScreenWrapper from '../../../common/ScreenWrapper';
import {Colors} from '../../../constants/colors';
import CustomElevatedContainer from '../../../common/ElevatedContainer/CustomElevatedContainer';
import {textStyles} from '../../../styles/textStyles';
import CustomButton from '../../../common/Button/CustomButton';
import {styles} from './style';

const OtpScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 5) inputs.current[index + 1]?.focus();
    if (!text && index > 0) inputs.current[index - 1]?.focus();
  };

  const handleSubmit = () => {
    const fullOtp = otp.join('');
    setOtp(['', '', '', '', '', '']);
    inputs.current[0].focus();
  };

  return (
    <ScreenWrapper
      backgroundColor={Colors.White}
      style={styles.container}
      translucent={true}>
      <CustomElevatedContainer title="Enter PIN Code" />
      <View style={styles.titleContainer}>
        <View style={{marginVertical: 44}}>
          <Text style={textStyles.heading}>Enter{'\n'}PIN code</Text>
          <Text style={[textStyles.bodyText, {marginTop: 20}]}>
            Please input your 6 -figit PIN code{'\n'}we have sent to your email.
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={[
                styles.input,
                textStyles.heading,
                {marginLeft: index !== 0 && 9},
              ]}
              ref={el => (inputs.current[index] = el)}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={text => handleChange(text, index)}
              onKeyPress={({nativeEvent}) => {
                if (nativeEvent.key === 'Backspace' && !digit) {
                  if (index > 0) {
                    inputs.current[index - 1].focus();
                  }
                }
              }}
            />
          ))}
        </View>
        <CustomButton
          title="Submit"
          style={styles.submitButton}
          onPress={handleSubmit}
        />
      </View>
    </ScreenWrapper>
  );
};

export default OtpScreen;
