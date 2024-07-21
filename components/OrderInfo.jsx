/* eslint-disable react-native/no-inline-styles */
import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import {useNavigation} from '@react-navigation/native';

const OrderInfo = ({resturant, orderItems, currentLocation}) => {
  const navigation = useNavigation();
  const getBasketItemCount = () => {
    let itemCount = orderItems.reduce((a, b) => a + (b.qty || 0), 0);
    return itemCount;
  };

  const sumOrder = () => {
    let total = orderItems.reduce((a, b) => a + (b.total || 0), 0);
    return total.toFixed(2);
  };
  return (
    <View>
      <View
        style={{
          backgroundColor: COLORS.white,
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: SIZES.padding * 2,
            paddingHorizontal: SIZES.padding * 3,
            borderBottomColor: COLORS.lightGray2,
            borderBottomWidth: 1,
          }}>
          <Text style={{...FONTS.h3}}>
            {getBasketItemCount()} Items in cart
          </Text>
          <Text style={{...FONTS.h3}}>${sumOrder()}</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: SIZES.padding * 2,
            paddingHorizontal: SIZES.padding * 3,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={icons.pin}
              style={{width: 20, height: 20, tintColor: COLORS.darkgray}}
            />
            <Text style={{marginLeft: SIZES.padding, ...FONTS.h3}}>
              {currentLocation.streetName}
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image
              source={icons.master_card}
              resizeMode="contain"
              style={{width: 20, height: 20, tintColor: COLORS.darkgray}}
            />
            <Text style={{marginLeft: SIZES.padding, ...FONTS.h4}}>8888</Text>
          </View>
        </View>
        <View
          style={{
            padding: SIZES.padding * 2,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('OrderDelivery', {
                resturant,
                currentLocation,
              })
            }
            style={{
              width: SIZES.width * 0.9,
              padding: SIZES.padding,
              backgroundColor: COLORS.primary,
              alignItems: 'center',
              borderRadius: SIZES.radius,
            }}>
            <Text style={{color: COLORS.white, ...FONTS.h2}}>Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OrderInfo;
