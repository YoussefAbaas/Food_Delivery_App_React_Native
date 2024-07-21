/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {icons, SIZES, COLORS, FONTS} from '../constants';
import {useNavigation} from '@react-navigation/native';

const ResturantsList = ({resturants, categories, currentLocation}) => {
  const navigation = useNavigation();
  const getCategoryNameById = id => {
    let category = categories.filter(c => c.id === id);
    if (category.length > 0) {
      return category[0].name;
    }
    return [];
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          marginBottom: SIZES.padding * 2,
        }}
        onPress={() =>
          navigation.navigate('Resturant', {item, currentLocation})
        }>
        <View>
          <Image
            source={item.photo}
            resizeMode="cover"
            style={{width: '100%', height: 200, borderRadius: SIZES.radius}}
          />
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              height: 50,
              width: SIZES.width * 0.3,
              backgroundColor: 'white',
              borderTopRightRadius: SIZES.radius,
              borderTopLeftRadius: SIZES.radius,
              alignItems: 'center',
              justifyContent: 'center',
              ...styles.shadow,
            }}>
            <Text style={{...FONTS.h4}}>{item.duration}</Text>
          </View>
        </View>

        <Text style={{...FONTS.body2}}>{item.name}</Text>
        <View style={{marginTop: SIZES.padding, flexDirection: 'row'}}>
          <Image
            source={icons.star}
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.primary,
              marginRight: 10,
            }}
          />
          <Text style={{...FONTS.body3}}>{item.rating}</Text>

          <View style={{flexDirection: 'row', marginLeft: 10}}>
            {item.categories.map(id => {
              return (
                <View style={{flexDirection: 'row'}} key={id}>
                  <Text style={{...FONTS.body3}}>
                    {getCategoryNameById(id)}
                  </Text>
                  <Text style={{...FONTS.h3, color: COLORS.darkgray}}></Text>
                </View>
              );
            })}

            {[1, 2, 3].map(priceRating => (
              <Text
                key={priceRating}
                style={{
                  ...FONTS.body3,
                  color:
                    priceRating <= item?.priceRating
                      ? COLORS.black
                      : COLORS.darkgray,
                }}>
                $
              </Text>
            ))}
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={resturants}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      contentContainerStyle={{
        paddingHorizontal: SIZES.padding * 2,
        paddingBottom: 30,
      }}
    />
  );
};

export default ResturantsList;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});
