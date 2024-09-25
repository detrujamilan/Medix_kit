import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import {Colors} from '../../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {textStyles} from '../../styles/textStyles';

const CustomElevatedContainer = ({onPress, title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <Icon name="angle-left" size={27} color={Colors.Madison} />
          </TouchableOpacity>
          <Text style={textStyles.textBold}>{title}</Text>
          <Text></Text>
        </View>
      </View>
    </View>
  );
};

export default CustomElevatedContainer;
