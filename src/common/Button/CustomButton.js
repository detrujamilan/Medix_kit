import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';
import {styles} from './style';

const CustomButton = ({
  title,
  onPress,
  backgroundColor = Colors.Primary,
  textColor = Colors.White,
  disabled = false,
  style,
  isLoading = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, {backgroundColor}, style]}
      activeOpacity={0.8}
      disabled={disabled || isLoading}>
      <View style={styles.contentContainer}>
        <Text style={[styles.text, {color: textColor}]}>
          {isLoading ? 'Loading ....' : title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
