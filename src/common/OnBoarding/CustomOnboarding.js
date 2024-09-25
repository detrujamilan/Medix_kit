import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ScreenWrapper from '../ScreenWrapper';
import {SvgXml} from 'react-native-svg';
import Icon from 'react-native-vector-icons/AntDesign';
import CustomButton from '../Button/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {styles} from './Style';
import {onboardingStyles} from '../../screens/onboarding/Style';
import {textStyles} from '../../styles/textStyles';
import {Colors} from '../../constants/colors';

const CustomOnboarding = ({
  heading,
  title,
  xml,
  onPress,
  skipOnPress,
  lastOnScreen = false,
}) => {
  const navigation = useNavigation();
  return (
    <ScreenWrapper
      translucent={true}
      style={onboardingStyles.container}
      content="dark-content">
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <SvgXml
            xml={xml}
            style={{
              width: '100%',
            }}
          />
        </View>
        <View style={{marginTop: 60}}>
          <View style={styles.headingContainer}>
            <Text style={[textStyles.heading, {textAlign: 'center'}]}>
              {heading}
            </Text>
          </View>
          <View style={styles.titleContainer}>
            <Text style={[textStyles.bodyText, {textAlign: 'center'}]}>
              {title}
            </Text>
          </View>
        </View>
        {lastOnScreen ? (
          <View style={styles.buttonContainer}>
            <CustomButton
              title="Sign Up"
              onPress={() =>
                navigation.replace('AuthStack', {screen: 'Signup'})
              }
            />
            <CustomButton
              title="Sign In"
              backgroundColor="transparent"
              style={onboardingStyles.signInButton}
              onPress={() => navigation.replace('AuthStack', {screen: 'Login'})}
              textColor={Colors.Primary}
            />
          </View>
        ) : (
          <View style={styles.buttonContainer}>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={skipOnPress}
                style={styles.skipButton}>
                <Text style={textStyles.skipText}>Skip</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.nextButton}
                onPress={onPress}>
                <View style={styles.nextButtonContent}>
                  <Text style={styles.nextButtonText}>Next</Text>
                  <View style={styles.arrowIconContainer}>
                    <Icon name="arrowright" size={30} color={Colors.White} />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </ScreenWrapper>
  );
};

export default CustomOnboarding;
