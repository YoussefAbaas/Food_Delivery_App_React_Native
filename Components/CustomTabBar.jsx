import {View, Platform} from 'react-native';
import React from 'react';
import {BottomTabBar} from '@react-navigation/bottom-tabs';

const CustomTabBar = props => {
  return (
    <View>
      {Platform.OS === 'ios' && (
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 30,
            backgroundColor: 'white',
          }}
        />
      )}
      <BottomTabBar {...props} />
    </View>
  );
};

export default CustomTabBar;
