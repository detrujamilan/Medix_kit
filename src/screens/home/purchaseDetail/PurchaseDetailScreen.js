import React from 'react';

import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import ScreenWrapper from '../../../common/ScreenWrapper';
import {Colors} from '../../../constants/colors';
import CustomElevatedContainer from '../../../common/ElevatedContainer/CustomElevatedContainer';
import {ShadowedView, shadowStyle} from 'react-native-fast-shadow';
import {textStyles} from '../../../styles/textStyles';
import Icon from 'react-native-vector-icons/Entypo';
import {Fonts} from '../../../constants/fonts';
import EditIcon from '../../../assets/svg/EditIcon';
import {styles} from '../style';
import RightCircularIcon from '../../../assets/svg/RightCircularIcon';

const PurchaseDetail = () => {
  return (
    <ScreenWrapper
      style={{flex: 1}}
      backgroundColor={Colors.White}
      translucent={true}>
      <CustomElevatedContainer title="(4) Review Order" />
      <View style={styles.container}>
        <View>
          <ShadowedView
            style={[
              styles.shadowContainer,
              shadowStyle({
                opacity: 0.04,
                radius: 30,
                offset: [1, 2],
              }),
            ]}>
            <View style={styles.headerContainer}>
              <View style={styles.avatarContainerImg}>
                <Image
                  source={require('../../../assets/images/doctorAvatar.png')}
                  style={styles.avatar}
                />
              </View>
              <View style={styles.infoContainer}>
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
                <View style={styles.userInfo}>
                  <Text style={textStyles.labelText}>20 January 2020</Text>
                  <Text style={[textStyles.labelText, {paddingLeft: 24}]}>
                    11.30
                  </Text>
                </View>
              </View>
              <TouchableOpacity activeOpacity={0.7}>
                <Icon
                  name="dots-three-horizontal"
                  size={20}
                  color={Colors.Madison}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.billSummaryContainer}>
              <Text style={textStyles.emphasizedText}>Bill Summary</Text>
              <View style={styles.billItem}>
                <Text style={textStyles.bodyText}>Discount</Text>
                <Text
                  style={[
                    textStyles.bodyText,
                    {color: Colors.Primary, fontFamily: Fonts.SfSemibold},
                  ]}>
                  $5
                </Text>
              </View>
              <View style={styles.voucherInputContainer}>
                <Text style={textStyles.bodyText}>Consultation Fee</Text>
                <Text
                  style={[textStyles.bodyText, {fontFamily: Fonts.SfSemibold}]}>
                  $17
                </Text>
              </View>
              <View style={styles.billItem}>
                <Text style={textStyles.bodyText}>Total Payment</Text>
                <Text
                  style={[textStyles.bodyText, {fontFamily: Fonts.SfSemibold}]}>
                  $12
                </Text>
              </View>
            </View>
            <View
              style={{
                padding: 20,
              }}>
              <Text style={textStyles.emphasizedText}>I have voucher code</Text>
              <View
                style={[
                  styles.voucherInputContainer,
                  {paddingTop: 10, width: '100%'},
                ]}>
                <View style={{width: '82%'}}>
                  <TextInput
                    placeholder="Input your voucher code"
                    placeholderTextColor={Colors.Heather}
                    keyboardType="default"
                    style={[styles.voucherTextInput, textStyles.bodyText]}
                  />
                </View>

                <ShadowedView
                  style={[
                    styles.voucherButtonContainer,
                    shadowStyle({
                      opacity: 0.06,
                      radius: 10,
                      offset: [1, 4],
                    }),
                  ]}>
                  <TouchableOpacity activeOpacity={0.7}>
                    <RightCircularIcon />
                  </TouchableOpacity>
                </ShadowedView>
              </View>
            </View>
            <View style={styles.paymentContainer}>
              <Text style={textStyles.emphasizedText}>Pay with</Text>
              <View style={styles.paymentMethod}>
                <View style={styles.userInfo}>
                  <View style={styles.paymentIconContainer}>
                    <Image
                      source={require('../../../assets/images/applePay.png')}
                      style={styles.avatar}
                    />
                  </View>
                  <Text
                    style={[
                      textStyles.bodyText,
                      {fontFamily: Fonts.SfSemibold, paddingLeft: 20},
                    ]}>
                    Apple Pay
                  </Text>
                </View>
                <TouchableOpacity activeOpacity={0.7}>
                  <EditIcon />
                </TouchableOpacity>
              </View>
            </View>
          </ShadowedView>
        </View>
      </View>
    </ScreenWrapper>
  );
};
export default PurchaseDetail;
