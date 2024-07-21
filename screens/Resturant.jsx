import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FoodInfo, OrderInfo, ResturantHeader} from '../components';
import {useRoute} from '@react-navigation/native';

const Resturant = () => {
  const route = useRoute();

  const [resturant, setResturant] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    const {item, currentLocation} = route.params;
    setCurrentLocation(currentLocation);
    setResturant(item);
  }, [route.params]);

  if (resturant)
    return (
      <SafeAreaView>
        <ResturantHeader resturantName={resturant.name} />
        <FoodInfo
          resturant={resturant}
          orderItems={orderItems}
          setOrderItems={setOrderItems}
        />
        <OrderInfo
          resturant={resturant}
          orderItems={orderItems}
          currentLocation={currentLocation}
        />
      </SafeAreaView>
    );
};

export default Resturant;
