import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../common/ScreenWrapper';
import {Colors} from '../../constants/colors';
import CustomBackButton from '../../common/BackButton/CustomBackButton';
import {textStyles} from '../../styles/textStyles';
import {SettingScreenData} from '../../utils/data';
import {styles} from './style';

const SettingScreen = () => {
  return (
    <ScreenWrapper backgroundColor={Colors.White} style={styles.container}>
      <View style={styles.contentWrapper}>
        <View>
          <CustomBackButton label="Setting" />
          <View style={styles.optionsWrapper}>
            {SettingScreenData.map(item => (
              <TouchableOpacity
                activeOpacity={0.7}
                key={item.id}
                style={styles.optionButton}>
                <item.icon />
                <Text style={[textStyles.bodyText, styles.optionText]}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SettingScreen;
