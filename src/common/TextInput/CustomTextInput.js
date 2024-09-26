import {
  View,
  Text,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {textStyles} from '../../styles/textStyles';
import {Colors} from '../../constants/colors';
import Icon from 'react-native-vector-icons/Feather';

const {width} = Dimensions.get('window');

const CustomTextInput = ({
  rightSideIcon,
  placeholder,
  value,
  onChangeText,
  label,
  iconSource,
  isPassword,
  inputStyle,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const iconSize = Math.round(width * 0.059);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View>
          <Text style={textStyles.labelText}>{label}</Text>
          <View style={styles.inputRow}>
            <View style={styles.textInputContainer}>
              <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={[inputStyle, textStyles.bodyText]}
                placeholderTextColor={Colors.Heather}
                secureTextEntry={isPassword && !isVisible}
              />
            </View>

            {isPassword ? (
              <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
                <View style={{width: iconSize, height: iconSize}}>
                  <Icon
                    name={isVisible ? 'eye' : 'eye-off'}
                    size={22}
                    color={Colors.Madison}
                  />
                </View>
              </TouchableOpacity>
            ) : (
              rightSideIcon &&
              iconSource && (
                <View style={{width: iconSize, height: iconSize}}>
                  <Image source={iconSource} style={styles.iconImage} />
                </View>
              )
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default CustomTextInput;
