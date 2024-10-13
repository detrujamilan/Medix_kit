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
import CustomTopTabNavigator from '../../common/TopTabNavigator/CustomTopTabNavigator';

const MyAppointmentScreen = () => {
  const UpcomingMessage = () => (
    <View style={{marginTop: 20}}>
      {appoinmentsData.map((data, index) => (
        <ShadowedView style={styles.appointmentCard} key={data.id}>
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
  );
  const FinishedMessage = () => (
    <View style={{marginTop: 20}}>
      {appoinmentsData.map((data, index) => (
        <ShadowedView style={styles.appointmentCard} key={data.id}>
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
  );
  const tabs = [
    {name: 'Upcoming', component: <UpcomingMessage />},
    {name: 'Finished', component: <FinishedMessage />},
  ];
  return (
    <ScreenWrapper backgroundColor={Colors.White} style={styles.screenWrapper}>
      <View>
        <CustomBackButton label="My Appoinments" style={{marginTop: 19}} />
        <View style={{marginTop: 30}}>
          <CustomTopTabNavigator tabs={tabs} />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default MyAppointmentScreen;
