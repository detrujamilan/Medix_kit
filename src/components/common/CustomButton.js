import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';
import {textStyles} from '../../styles/textStyles';
import {Fonts} from '../../constants/fonts';

const CustomButton = ({
  title,
  onPress,
  backgroundColor,
  textColor,
  disabled,
  style,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        textStyles.button,
        {backgroundColor: backgroundColor || Colors.Primary},
        disabled && buttonStyles.disabledButton,
        style,
      ]}
      activeOpacity={0.8}
      disabled={disabled}>
      <View style={buttonStyles.contentContainer}>
        {!isLoading ? (
          <Text style={[buttonStyles.text, {color: textColor || Colors.White}]}>
            {title}
          </Text>
        ) : (
          <Text style={[buttonStyles.text, {color: textColor || Colors.White}]}>
            Loading ....
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const buttonStyles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: Fonts.SfBold,
    lineHeight: 16,
  },
});
