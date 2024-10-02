import {View, Text, Modal, Button} from 'react-native';
import React, {useState} from 'react';
import {BlurView} from '@react-native-community/blur';
import CustomBackButton from '../../common/BackButton/CustomBackButton';
import {textStyles} from '../../styles/textStyles';
import CustomTextInput from '../../common/TextInput/CustomTextInput';
import CustomCheckBox from '../../common/CheckBox/CustomCheckBox';
import CustomButton from '../../common/Button/CustomButton';
import {styles} from './style';

const ProfileModal = ({modalVisible, onRequestClose}) => {
  const [selectedGender, setSelectedGender] = useState(null);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={onRequestClose}>
      <BlurView style={styles.blurView} blurType="light" blurAmount={50} />

      <View style={styles.modalContainer}>
        <View style={{paddingHorizontal: 20}}>
          <CustomBackButton label="Edit Profile" onPress={onRequestClose} />
        </View>
        <View style={styles.header}>
          <View style={styles.contentContainer}>
            <View style={styles.personalInfoContainer}>
              <Text style={textStyles.emphasizedText}>Personal Info</Text>
              <CustomTextInput
                label="Phone Number"
                placeholder="000 - 0000 - 0000"
                style={styles.medicalInfoContainer}
              />
              <CustomTextInput
                label="Email"
                placeholder="E,g: yourname@email.com"
              />
              <View style={styles.genderContainer}>
                <Text style={textStyles.labelText}>Gender</Text>
                <View style={styles.genderRow}>
                  <View style={styles.genderRow}>
                    <CustomCheckBox
                      selected={selectedGender === 'Male'}
                      onPress={() => setSelectedGender('Male')}
                    />
                    <Text style={[{marginLeft: 10}, textStyles.bodyText]}>
                      Male
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginLeft: 55,
                    }}>
                    <CustomCheckBox
                      selected={selectedGender === 'Female'}
                      onPress={() => setSelectedGender('Female')}
                    />
                    <Text style={[{marginLeft: 10}, textStyles.bodyText]}>
                      Female
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View>
              <Text style={textStyles.emphasizedText}>Medical Info</Text>
              <CustomTextInput
                label="Phone Number"
                placeholder="000 - 0000 - 0000"
                style={styles.medicalInfoContainer}
              />
              <CustomTextInput
                label="Upload your Medical Record"
                placeholder="Pdf or Doc files allowed"
              />
            </View>
            <CustomButton title="Save" style={styles.button} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ProfileModal;
