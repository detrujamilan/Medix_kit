import React from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import ScreenWrapper from '../../common/ScreenWrapper';
import {Colors} from '../../constants/colors';
import {textStyles} from '../../styles/textStyles';
import Icon from 'react-native-vector-icons/AntDesign';

const NoAppointment = () => {
  return (
    <ScreenWrapper backgroundColor={Colors.White} style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.imageWrapper}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/images/Error_Illustration3.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.textWrapper}>
            <Text style={[textStyles.heading, styles.heading]}>
              No Appoinment{'\n'}Available
            </Text>
            <Text style={[textStyles.bodyText, styles.bodyText]}>
              You don’t have any appoinment yet. Please{'\n'}make one.
            </Text>
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} activeOpacity={0.7}>
            <Icon name="plus" size={20} color={Colors.White} />
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
  },
  imageWrapper: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 259,
    height: 259,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textWrapper: {
    marginTop: 25,
  },
  heading: {
    textAlign: 'center',
  },
  bodyText: {
    marginTop: 20,
    textAlign: 'center',
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 42,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  button: {
    backgroundColor: Colors.Primary,
    padding: 20,
    borderRadius: 18,
  },
});

export default NoAppointment;
