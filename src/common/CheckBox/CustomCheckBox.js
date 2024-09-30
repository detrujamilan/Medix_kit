import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';

const CustomCheckBox = ({selected, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.checkbox,
          {borderColor: selected ? Colors.Primary : Colors.Heather},
        ]}>
        {selected && <View style={styles.selectedIndicator} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 24,
    height: 24,
    backgroundColor: Colors.AthensGray,
    borderWidth: 1,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },

  selectedIndicator: {
    width: 18,
    height: 18,
    backgroundColor: Colors.Primary,
    borderRadius: 18,
  },
});

export default CustomCheckBox;
