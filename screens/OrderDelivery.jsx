/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {Directions_API_KEY} from '../constants';
import useFetchRoute from '../hooks/useFetchRoute';
import {DeliveryInfo, DestinationHeader, Map} from '../components';

const OrderDelivery = () => {
  const route = useRoute();
  const [resturant, setResturant] = useState(null);
  const [streetName, setStreetName] = useState(null);
  const [fromLocation, setFromLocation] = useState(null);
  const [toLocation, setToLocation] = useState(null);
  const [region, setRegion] = useState(null);
  const [duration, setDuration] = useState(null);
  const [angle, setAngle] = useState(0);

  const [routeCoordinates, setRouteCoordinates] = useState([]);

  useEffect(() => {
    let {resturant, currentLocation} = route.params;
    let fromLocation = currentLocation.gps;
    let toLocation = resturant.location;
    let street = currentLocation.streetName;
    let mapRegion = {
      latitude: (fromLocation.latitude + toLocation.latitude) / 2,
      longitude: (fromLocation.longitude + toLocation.longitude) / 2,
      latitudeDelta: Math.abs(fromLocation.latitude - toLocation.latitude),
      longitudeDelta: Math.abs(fromLocation.longitude - toLocation.longitude),
    };

    setResturant(resturant);
    setStreetName(street);
    setFromLocation(fromLocation);
    setToLocation(toLocation);
    setRegion(mapRegion);
  }, []);

  useFetchRoute(
    fromLocation,
    toLocation,
    Directions_API_KEY,
    setRouteCoordinates,
    setDuration,
    setAngle,
  );

  return (
    <View style={{flex: 1}}>
      <Map
        angle={angle}
        fromLocation={fromLocation}
        region={region}
        routeCoordinates={routeCoordinates}
        toLocation={toLocation}
        setRegion={setRegion}
      />
      <DestinationHeader duration={duration} streetName={streetName} />
      <DeliveryInfo resturant={resturant} />
    </View>
  );
};

export default OrderDelivery;
