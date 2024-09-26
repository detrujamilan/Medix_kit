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
        <Text style={textStyles.labelText}>{label}</Text>
        <View style={styles.inputRow}>
          <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            style={[inputStyle, textStyles.bodyText, styles.textInputContainer]}
            placeholderTextColor={Colors.Heather}
            secureTextEntry={isPassword && !isVisible}
          />

          {isPassword ? (
            <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
              <Icon
                name={isVisible ? 'eye' : 'eye-off'}
                size={22}
                color={Colors.Madison}
              />
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
  );
};

export default CustomTextInput;
