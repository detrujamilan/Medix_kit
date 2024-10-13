import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {textStyles} from '../../styles/textStyles';
import styles from './style';
import {ShadowedView, shadowStyle} from 'react-native-fast-shadow';
import {Colors} from '../../constants/colors';

const CustomBackButton = ({label, onPress, style}) => {
  return (
    <View style={[{flexDirection: 'row', alignItems: 'center'}, style]}>
      <ShadowedView
        style={[
          shadowStyle({
            opacity: 0.05,
            radius: 25,
            offset: [0, 0],
          }),
        ]}>
        <TouchableOpacity style={styles.shadowBox} onPress={onPress}>
          <Icon name="chevron-back" size={20} color={Colors.Madison} />
        </TouchableOpacity>
      </ShadowedView>
      <View style={styles.labelContainer}>
        <Text style={textStyles.primaryText}>{label}</Text>
      </View>
    </View>
  );
};

export default CustomBackButton;
