import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import ScreenWrapper from '../../common/ScreenWrapper';
import {Colors} from '../../constants/colors';
import CustomButton from '../../common/Button/CustomButton';
import {textStyles} from '../../styles/textStyles';
import {styles} from './style';

const PaymentDeclined = () => {
  return (
    <ScreenWrapper style={styles.screenWrapper} backgroundColor={Colors.White}>
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/Error_Illustration1.png')}
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={textStyles.heading}>Payment{'\n'}Declined</Text>
          <Text style={[styles.headingText, textStyles.bodyText]}>
            Sorry, your payment cannot be processed{'\n'}right now. Please try
            again or change your{'\n'}payment method.
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.changePaymentButton}>
            <Text style={[textStyles.skipText, styles.changePaymentButtonText]}>
              Change Payment Method
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tryAgainButtonContainer}>
          <CustomButton title="Try Again" />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default PaymentDeclined;
