import React, {useState} from 'react';

import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import ScreenWrapper from '../../common/ScreenWrapper';
import {Colors} from '../../constants/colors';
import CustomElevatedContainer from '../../common/ElevatedContainer/CustomElevatedContainer';
import {textStyles} from '../../styles/textStyles';
import {PayFeeData} from '../../utils/data';
import RightCircularIcon from '../../assets/svg/RightCircularIcon';
import {styles} from '../../common/Button/style';
import Icon from 'react-native-vector-icons/AntDesign';

const PayFee = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handlePress = index => {
    setSelectedIndex(index);
  };
  const renderItemValue = ({item, index}) => (
    <TouchableOpacity onPress={() => handlePress(index)}>
      <View
        style={{
          padding: 10,
          backgroundColor:
            selectedIndex === index ? 'rgba(30, 224, 204, 0.18)' : Colors.White,
          borderRadius: 9,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{width: 74, height: 49}}>
              <Image
                source={item.cardImg}
                style={{width: '100%', height: '100%'}}
              />
            </View>
            <Text style={[{paddingLeft: 20}, textStyles.skipText]}>
              {item.cardType}
            </Text>
          </View>
          {selectedIndex === index && (
            <View>
              <RightCircularIcon />
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <ScreenWrapper
      style={{flex: 1}}
      backgroundColor={Colors.White}
      translucent={true}>
      <View
        style={{
          backgroundColor: Colors.AthensGray,
          height: 150,
          borderBottomLeftRadius: 36,
          borderBottomRighttRadius: 36,
        }}>
        <CustomElevatedContainer />
        <View style={{alignItems: 'center'}}>
          <Text style={[{paddingVertical: 10}, textStyles.labelText]}>
            My Booking Details
          </Text>
          <View
            style={{
              width: 51,
              height: 4,
              borderStyle: 'solid',
              backgroundColor: Colors.Heather,
              borderRadius: 9,
            }}
          />
        </View>
      </View>
      <View style={{flex: 1, paddingHorizontal: 20, marginTop: 30}}>
        <View>
          <Text style={textStyles.emphasizedText}>Choose Payment Method</Text>
          <View style={{marginTop: 20}}>
            <FlatList data={PayFeeData} renderItem={renderItemValue} />
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 10,
            width: '100%',
            alignSelf: 'center',
          }}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.button, {backgroundColor: Colors.Primary}]}>
            <View
              style={[
                styles.contentContainer,
                {justifyContent: 'space-between', paddingHorizontal: 26},
              ]}>
              <Text></Text>
              <Text style={[styles.text, {color: Colors.White}]}>
                Proceed Payment
              </Text>
              <Icon name="arrowright" size={24} color={Colors.White} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default PayFee;
