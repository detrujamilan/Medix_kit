import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../../common/ScreenWrapper';
import {Colors} from '../../constants/colors';
import CustomElevatedContainer from '../../common/ElevatedContainer/CustomElevatedContainer';
import LocationIcon from '../../assets/svg/LocationIcon';
import {textStyles} from '../../styles/textStyles';
import EditIcon from '../../assets/svg/EditIcon';
import {ProfileScreenData} from '../../utils/data';
import {styles} from './style';
import ProfileModal from '../../modals/ProfileModal/ProfileModal';

const ProfileScreen = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <ScreenWrapper
        backgroundColor={Colors.White}
        translucent={true}
        style={{flex: 1}}>
        <CustomElevatedContainer title="My Profile" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.screenWrapper}>
            <View style={styles.container}>
              <View style={{alignItems: 'center'}}>
                <Image source={require('../../assets/images/avatar.png')} />
                <View style={styles.profileImage}>
                  <Text style={textStyles.textCentered}>Pascal Desroche</Text>
                  <View style={styles.editIconWrapper}>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => setIsOpenModal(true)}>
                      <EditIcon />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.locationWrapper}>
                  <LocationIcon />
                  <Text style={[{marginLeft: 6}, textStyles.uppercaseText]}>
                    Avignon
                  </Text>
                </View>
              </View>
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={styles.profileInfoWrapper}>
                {ProfileScreenData.map(item => (
                  <View
                    style={{
                      alignItems: 'center',
                      marginHorizontal: item.id === 2 && 48,
                    }}
                    key={item.id}>
                    <item.icon />
                    <Text
                      style={[
                        {paddingVertical: 10},
                        textStyles.emphasizedText,
                      ]}>
                      {item.value}
                    </Text>
                    <Text
                      style={[
                        textStyles.uppercaseText,
                        {color: Colors.Heather},
                      ]}>
                      {item.title}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
            <View style={styles.container}>
              <View style={styles.infoContainer}>
                <ProfileInfoSection title="Personal Info" changeButton>
                  <InfoItem label="Phone Number" value="+1 456 876 323" />
                  <InfoItem label="Email" value="youza@gmail.com" />
                  <InfoItem label="Gender" value="Male" />
                  <InfoItem label="Date of Birth" value="23 August 1992" />
                </ProfileInfoSection>
              </View>
              <View style={styles.infoFooter}>
                <ProfileInfoSection title="Medical Info" changeButton>
                  <View style={{paddingVertical: 10}}>
                    <Text style={[textStyles.bodyText, {fontSize: 13}]}>
                      Illness
                    </Text>
                    <View style={styles.tagWrapper}>
                      <Tag label="Migraine" />
                      <Tag label="Asthma" />
                      <Tag label="Low Blood Sugar" />
                      <Tag label="2+ more" />
                    </View>
                  </View>
                  <InfoItem label="Medical Record" value="Medical_record.pdf" />
                  <InfoItem
                    label="Emergency Contact"
                    value="+1 453 2872 2873"
                  />
                </ProfileInfoSection>
              </View>
            </View>
          </View>
        </ScrollView>
      </ScreenWrapper>
      <ProfileModal
        modalVisible={isOpenModal}
        onRequestClose={() => setIsOpenModal(false)}
      />
    </>
  );
};

export default ProfileScreen;

const ProfileInfoSection = ({title, children, changeButton, onPress}) => (
  <View style={styles.infoContent}>
    <View style={styles.infoHeader}>
      <Text style={textStyles.emphasizedText}>{title}</Text>
      {changeButton && (
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.changeButton}
          onPress={onPress}>
          <Text style={[textStyles.centeredBoldText, {color: Colors.Primary}]}>
            Change
          </Text>
        </TouchableOpacity>
      )}
    </View>
    {children}
  </View>
);

const InfoItem = ({label, value}) => (
  <View style={{paddingVertical: 10}}>
    <Text style={[textStyles.bodyText, styles.infoLabel]}>{label}</Text>
    <Text style={[textStyles.bodyText, styles.personalInfoText]}>{value}</Text>
  </View>
);

const Tag = ({label}) => (
  <View style={[styles.tagContainer]}>
    <Text style={[textStyles.labelText, {color: Colors.Primary}]}>{label}</Text>
  </View>
);
