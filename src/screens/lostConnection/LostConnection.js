import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScreenWrapper from '../../common/ScreenWrapper';
import { Colors } from '../../constants/colors';
import LostConnectionIcon from '../../assets/svg/LostConnection';
import { textStyles } from '../../styles/textStyles';
import CustomButton from '../../common/Button/CustomButton';

const LostConnection = () => {
  return (
    <ScreenWrapper backgroundColor={Colors.White} style={styles.wrapper}>
      <View style={styles.container}>
        <View>
          <LostConnectionIcon />
        </View>
        <View style={styles.textContainer}>
          <Text style={textStyles.heading}>Lost Connection</Text>
          <Text style={[styles.bodyText, textStyles.bodyText]}>
            It looks like your connection has interrupted. Please check your
            internet provider
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton title="Try Again" />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default LostConnection;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  textContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  bodyText: {
    marginTop: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },
});
