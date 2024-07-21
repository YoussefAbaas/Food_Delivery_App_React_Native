import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, OrderDelivery, Resturant} from '../screens';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="Resturant" component={Resturant} />
      <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
    </Stack.Navigator>
  );
};
