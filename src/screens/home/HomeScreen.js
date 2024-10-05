import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../common/ScreenWrapper';
import {Colors} from '../../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {textStyles} from '../../styles/textStyles';
import {topCategoryData} from '../../utils/data';
import {ShadowedView} from 'react-native-fast-shadow';
import {styles} from './style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({navigation}) => {
  return (
    <ScreenWrapper
      backgroundColor={Colors.White}
      style={styles.screenWrapper}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.topSection}>
          <View style={styles.userInfo}>
            <TouchableOpacity activeOpacity={0.7}>
              <Icon name="menu-sharp" size={24} color={Colors.Madison} />
            </TouchableOpacity>
            <Text style={[textStyles.primaryText, styles.userNameText]}>
              Hi, Pascal
            </Text>
          </View>
          <View style={styles.avatarContainer}>
            <Image
              source={require('../../assets/images/avatar.png')}
              style={styles.avatar}
            />
          </View>
        </View>
        <View style={{width: '100%'}}>
          <View style={styles.illustrationContainer}>
            <Image
              source={require('../../assets/images/Onboarding_Illustration.png')}
              style={styles.illustration}
            />
          </View>
          <View style={styles.infoCardContainer}>
            <ShadowedView style={styles.infoCard}>
              <View style={styles.infoCardContent}>
                <View>
                  <Text>Hello</Text>
                </View>
                <View style={styles.infoRow}>
                  <Info label="Dental care" />
                  <Info label="Eye" />
                  <Info label="Pregnancy" />
                  <Info label="Migraine" />
                </View>
              </View>
            </ShadowedView>
          </View>
        </View>
        <View style={styles.appointmentContainer}>
          <Text style={textStyles.emphasizedText}>Upcoming Appoinment</Text>
          <ShadowedView style={styles.appointmentCard}>
            <View style={styles.appointmentContent}>
              <View style={{alignItems: 'flex-start'}}>
                <Info label="20 Jan" />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={textStyles.textBold}>
                  Problems with dental medica ...
                </Text>
                <TouchableOpacity activeOpacity={0.7}>
                  <View
                    style={styles.iconBgStyle}>
                    <MaterialCommunityIcons
                      name={'message-text-outline'}
                      size={24}
                      color={Colors.Primary}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{paddingTop: 5}}>
                <Text
                  style={[
                    textStyles.uppercaseText,
                    {color: Colors.Heather, textAlign: 'left'},
                  ]}>
                  Dr. Anna Nicholas
                </Text>
              </View>
            </View>
          </ShadowedView>
        </View>
        <View style={styles.categoryContainer}>
          <Text style={textStyles.emphasizedText}>Top category</Text>
          <View style={styles.categoryList}>
            <FlatList
              data={topCategoryData}
              numColumns={3}
              columnWrapperStyle={{justifyContent: 'space-between'}}
              renderItem={({item}) => (
                <GridView title={item.title} source={item.image} />
              )}
              keyExtractor={item => item.id.toString()}
              scrollEnabled={false}
            />
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default HomeScreen;

export const Info = ({label}) => (
  <View
    style={{
      paddingVertical: 2,
      paddingHorizontal: 10,
      backgroundColor: Colors.AthensGray,
      borderRadius: 5,
      marginRight: 10,
    }}>
    <Text style={[textStyles.labelText, {color: Colors.Primary}]}>{label}</Text>
  </View>
);

const GridView = ({title, style, source}) => (
  <ShadowedView style={[styles.gridView, style]}>
    <View style={styles.gridImage}>
      <Image source={source} style={{width: '100%', height: '100%'}} />
    </View>
    <Text style={[textStyles.uppercaseText, styles.gridText]}>{title}</Text>
  </ShadowedView>
);
