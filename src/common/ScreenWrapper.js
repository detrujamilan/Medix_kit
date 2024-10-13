import React from 'react';
import {View, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Colors} from '../constants/colors';

const ScreenWrapper = ({
  children,
  style,
  backgroundColor = Colors.White,
  content = 'dark-content',
  translucent = false,
}) => {
  return (
    <SafeAreaView style={[styles.safeArea, {backgroundColor}]}>
      <StatusBar
        barStyle={content}
        backgroundColor={backgroundColor}
        translucent={translucent}
      />
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

export default ScreenWrapper;
