import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';
import {textStyles} from '../../styles/textStyles';
import {ShadowedView} from 'react-native-fast-shadow';

const CustomTopTabNavigator = ({tabs}) => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  return (
    <>
      <View style={styles.tabContainer}>
        {tabs.map((tab, idx) => (
          <ShadowedView
            style={[
              styles.tabButton,
              activeTab === tab.name && [
                styles.activeTab,
                styles.activeTabShadow,
              ],
            ]}>
            <TouchableOpacity key={idx} onPress={() => setActiveTab(tab.name)}>
              <Text
                style={[
                  styles.tabText,
                  textStyles.skipText,
                  {
                    color:
                      activeTab === tab.name ? Colors.Madison : Colors.Heather,
                    lineHeight: 20,
                  },
                ]}>
                {tab?.name}
              </Text>
            </TouchableOpacity>
          </ShadowedView>
        ))}
      </View>
      <View>{tabs.find(tab => tab.name === activeTab)?.component}</View>
    </>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.AthensGray,
    borderRadius: 18,
  },
  tabButton: {flex: 1, alignItems: 'center', paddingVertical: 14},
  activeTab: {backgroundColor: Colors.White, borderRadius: 18},
  activeTabShadow: {
    shadowColor: 'rgba(13, 63, 103, 0.1)',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.49,
    shadowRadius: 9.51,
  },
  tabText: {fontWeight: 'bold'},
});

export default CustomTopTabNavigator;
