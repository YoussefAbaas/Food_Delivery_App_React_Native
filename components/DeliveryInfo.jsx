/* eslint-disable react-native/no-inline-styles */
import {Text, View, Image, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import {useNavigation} from '@react-navigation/native';

const DeliveryInfo = ({resturant}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 50,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          width: SIZES.width * 0.9,
          paddingVertical: SIZES.padding * 3,
          paddingHorizontal: SIZES.padding * 2,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={resturant?.courier.avatar}
            style={{width: 50, height: 50, borderRadius: 25}}
          />
          <View style={{flex: 1, marginLeft: SIZES.padding}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{...FONTS.h4}}>{resturant?.courier.name}</Text>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={icons.star}
                  style={{
                    width: 18,
                    height: 18,
                    tintColor: COLORS.primary,
                    marginRight: SIZES.padding,
                  }}
                />
                <Text style={{...FONTS.body3}}>{resturant?.rating}</Text>
              </View>
            </View>
            <Text style={{color: COLORS.darkgray, ...FONTS.body4}}>
              {resturant?.name}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.padding * 2,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => {
              let phoneUrl = `tel:${2994453611}`;
              Linking.openURL(phoneUrl);
            }}
            style={{
              height: 50,
              flex: 1,
              marginRight: 10,
              backgroundColor: COLORS.primary,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text style={{...FONTS.h4, color: COLORS.white}}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{
              height: 50,
              flex: 1,
              backgroundColor: COLORS.secondary,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text style={{...FONTS.h4, color: COLORS.white}}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DeliveryInfo;
