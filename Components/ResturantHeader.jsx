/* eslint-disable react-native/no-inline-styles */
import {Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {icons, SIZES, COLORS, FONTS} from '../constants';
import {useNavigation} from '@react-navigation/native';

const ResturantHeader = ({resturantName}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          width: 50,
          paddingLeft: SIZES.padding * 2,
          justifyContent: 'center',
        }}>
        <Image
          source={icons.back}
          resizeMode="contain"
          style={{width: 30, height: 30}}
        />
      </TouchableOpacity>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS.lightGray3,
          borderRadius: SIZES.radius,
        }}>
        <Text style={{...FONTS.h3}}>{resturantName}</Text>
      </View>
      <TouchableOpacity
        style={{
          width: 50,
          paddingRight: SIZES.padding * 2,
          justifyContent: 'center',
        }}>
        <Image
          source={icons.list}
          resizeMode="contain"
          style={{width: 30, height: 30}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ResturantHeader;
