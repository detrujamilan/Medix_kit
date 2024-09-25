import React from 'react';
import {View, SafeAreaView, StatusBar, StyleSheet} from 'react-native';

const ScreenWrapper = ({
  children,
  style,
  backgroundColor = 'white',
  content = 'dark-content',
  translucent = false,
}) => {
  return (
    <SafeAreaView style={[styles.safeArea, {backgroundColor}]}>
      <StatusBar
        barStyle={content}
        translucent={translucent}
        backgroundColor={translucent && 'transparent'}
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
