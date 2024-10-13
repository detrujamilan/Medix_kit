import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import {Colors} from '../../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {textStyles} from '../../styles/textStyles';
import {ShadowedView, shadowStyle} from 'react-native-fast-shadow';

const CustomElevatedContainer = ({onPress, title}) => {
  return (
    <ShadowedView
      style={[
        styles.container,
        shadowStyle({
          opacity: 0.05,
          radius: 30,
          offset: [0, 0],
        }),
      ]}>
      <View style={{paddingTop: StatusBar.currentHeight + 5}}>
        <View style={[styles.header]}>
          <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <Icon name="angle-left" size={27} color={Colors.Madison} />
          </TouchableOpacity>
          <Text style={textStyles.textBold}>{title}</Text>
          <Text></Text>
        </View>
      </View>
    </ShadowedView>
  );
};

export default CustomElevatedContainer;
