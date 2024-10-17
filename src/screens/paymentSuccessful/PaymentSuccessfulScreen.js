import React from 'react';

import {Image, Text, View} from 'react-native';
import ScreenWrapper from '../../common/ScreenWrapper';
import {Colors} from '../../constants/colors';
import {ShadowedView, shadowStyle} from 'react-native-fast-shadow';
import {textStyles} from '../../styles/textStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './style';

const PaymentSuccessful = () => {
  return (
    <ScreenWrapper
      backgroundColor={Colors.White}
      style={styles.screenWrapper}
      translucent={true}>
      <View style={styles.container}>
        <View style={styles.imageCTN}>
          <Image
            source={require('../../assets/images/Illustration.png')}
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <View style={{marginTop: 30}}>
          <ShadowedView
            style={[
              styles.shadowContainer,
              shadowStyle({
                opacity: 0.04,
                radius: 30,
                offset: [1, 2],
              }),
            ]}>
            <View style={styles.shadowContent}>
              <View>
                <Text
                  style={[textStyles.emphasizedText, {textAlign: 'center'}]}>
                  Payment Completed
                </Text>
                <View style={styles.orderInfoContainer}>
                  <View>
                    <Text style={textStyles.labelText}>Order ID</Text>
                    <Text style={[textStyles.bodyText, styles.orderInfoText]}>
                      873839302
                    </Text>
                  </View>
                  <View>
                    <Text style={textStyles.labelText}>Order date</Text>
                    <Text style={[textStyles.bodyText, styles.orderInfoText]}>
                      16 January 2020
                    </Text>
                  </View>
                </View>
                <View style={styles.amountContainer}>
                  <Text style={textStyles.emphasizedText}>Paid Amount</Text>
                  <Text style={[textStyles.heading, {paddingTop: 20}]}>
                    $12
                  </Text>
                </View>
                <View style={{alignItems: 'center', paddingTop: 35}}>
                  <View style={styles.downloadButton}>
                    <Icon
                      name={'file-download-outline'}
                      size={24}
                      color={Colors.Madison}
                    />
                    <Text
                      style={[textStyles.centeredBoldText, {paddingLeft: 8}]}>
                      Download Receipt
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ShadowedView>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default PaymentSuccessful;
