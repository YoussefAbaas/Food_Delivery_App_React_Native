/* eslint-disable react-native/no-inline-styles */
import {View, Image, TouchableOpacity, Text} from 'react-native';
import React, {useRef} from 'react';
import MapView, {Marker, Polyline} from 'react-native-maps';
import {COLORS, FONTS, icons, SIZES} from '../constants';

const Map = ({
  toLocation,
  fromLocation,
  angle,
  region,
  setRegion,
  routeCoordinates,
}) => {
  const mapRef = useRef();

  const destinationMarker = () => {
    return (
      <Marker coordinate={toLocation}>
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.white,
          }}>
          <View
            style={{
              height: 30,
              width: 30,
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.primary,
            }}>
            <Image
              source={icons.pin}
              style={{width: 25, height: 25, tintColor: COLORS.white}}
            />
          </View>
        </View>
      </Marker>
    );
  };
  const carIcon = () => {
    return (
      <Marker
        coordinate={fromLocation}
        anchor={{x: 0.5, y: 0.5}}
        flat={true}
        rotation={angle}>
        <Image source={icons.car} style={{width: 40, height: 40}} />
      </Marker>
    );
  };
  const renderZoomButtons = () => {
    const zoomIn = () => {
      let newRegion = {
        latitude: region.latitude,
        longitude: region.longitude,
        latitudeDelta: region.latitudeDelta / 2,
        longitudeDelta: region.longitudeDelta / 2,
      };
      setRegion(newRegion);
      mapRef.current.animateToRegion(newRegion, 200);
    };
    const zoomOut = () => {
      let newRegion = {
        latitude: region.latitude,
        longitude: region.longitude,
        latitudeDelta: region.latitudeDelta * 2,
        longitudeDelta: region.longitudeDelta * 2,
      };
      setRegion(newRegion);
      mapRef.current.animateToRegion(newRegion, 200);
    };
    return (
      <View
        style={{
          position: 'absolute',
          bottom: SIZES.height * 0.45,
          right: SIZES.padding * 2,
          width: 60,
          height: 130,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={zoomIn}
          style={{
            height: 60,
            width: 60,
            borderRadius: 30,
            backgroundColor: COLORS.white,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{...FONTS.body1}}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={zoomOut}
          style={{
            height: 60,
            width: 60,
            borderRadius: 30,
            backgroundColor: COLORS.white,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{...FONTS.body1}}>-</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <MapView
        ref={mapRef}
        provider="google"
        initialRegion={region}
        style={{flex: 1}}>
        <Polyline
          coordinates={routeCoordinates}
          strokeWidth={5}
          strokeColor={COLORS.primary}
        />
        {destinationMarker()}
        {carIcon()}
      </MapView>
      {renderZoomButtons()}
    </View>
  );
};

export default Map;
