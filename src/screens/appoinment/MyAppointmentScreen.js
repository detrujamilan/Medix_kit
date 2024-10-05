import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../common/ScreenWrapper';
import {Colors} from '../../constants/colors';
import {styles} from '../home/style';
import CustomBackButton from '../../common/BackButton/CustomBackButton';
import {appoinmentsData} from '../../utils/data';
import {textStyles} from '../../styles/textStyles';
import {ShadowedView} from 'react-native-fast-shadow';
import {Info} from '../home/HomeScreen';

const MyAppointmentScreen = () => {
  return (
    <ScreenWrapper
      backgroundColor={Colors.White}
      style={styles.screenWrapper}
      translucent={true}>
      <View style={{marginTop: 24}}>
        <CustomBackButton label="My Appoinments" />
        <View style={{marginTop: 30}}>
          <Text>tab Bar</Text>
        </View>
        <View style={{marginTop: 20}}>
          {appoinmentsData.map((data, index) => (
            <ShadowedView style={styles.appointmentCard} key={index}>
              <View style={styles.appointmentContent}>
                <View style={{alignItems: 'flex-start'}}>
                  <Info label={data.date} />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text style={textStyles.textBold}>{data.testTitle}</Text>
                  <TouchableOpacity activeOpacity={0.7}>
                    <View
                      style={[
                        styles.iconBgStyle,
                        {
                          backgroundColor: data.bgColor,
                        },
                      ]}>
                      {data.icon}
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={{paddingTop: 5}}>
                  <Text
                    style={[
                      textStyles.uppercaseText,
                      {color: Colors.Heather, textAlign: 'left'},
                    ]}>
                    {data.drName}
                  </Text>
                </View>
              </View>
            </ShadowedView>
          ))}
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default MyAppointmentScreen;
