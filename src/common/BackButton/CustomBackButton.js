import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {textStyles} from '../../styles/textStyles';
import styles from './style';

const CustomBackButton = ({label, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.shadowBox}>
          <TouchableOpacity onPress={onPress}>
            <Icon name="chevron-back" size={20} />
          </TouchableOpacity>
        </View>
        <View style={styles.labelContainer}>
          <Text style={textStyles.primaryText}>{label}</Text>
        </View>
      </View>
    </View>
  );
};

export default CustomBackButton;
