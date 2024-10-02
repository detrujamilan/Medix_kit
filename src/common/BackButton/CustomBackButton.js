import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {textStyles} from '../../styles/textStyles';
import styles from './style';

const CustomBackButton = ({label, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer}>
        <TouchableOpacity style={styles.shadowBox} onPress={onPress}>
          <Icon name="chevron-back" size={20} />
        </TouchableOpacity>
        <View style={styles.labelContainer}>
          <Text style={textStyles.primaryText}>{label}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomBackButton;
