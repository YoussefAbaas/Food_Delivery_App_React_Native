import axios from 'axios';
import {useEffect} from 'react';
import polyline from '@mapbox/polyline';

function calcAngle(coordinates) {
  let startLat = coordinates[0]['latitude'];
  let startLng = coordinates[0]['longitude'];
  let endLat = coordinates[1]['latitude'];
  let endLng = coordinates[1]['longitude'];
  let dx = endLat - startLat;
  let dy = endLng - startLng;

  return (Math.atan2(dy, dx) * 180) / Math.PI;
}

export default function useFetchRoute(
  origin,
  destination,
  apiKey,
  setRouteCoordinates,
  setDuration,
  setAngle,
) {
  useEffect(() => {
    const fetchRoute = async () => {
      try {
        const response = await axios.post(
          'https://api.openrouteservice.org/v2/directions/driving-car',
          {
            coordinates: [
              [origin.longitude, origin.latitude],
              [destination.longitude, destination.latitude],
            ],
          },
          {
            headers: {
              Authorization: apiKey,
              'Content-Type': 'application/json',
            },
          },
        );

        const encodedPolyline = response.data.routes[0].geometry;
        const decodedPolyline = polyline.decode(encodedPolyline);

        // Convert decoded polyline to coordinate format
        const coordinates = decodedPolyline.map(([lat, lon]) => ({
          latitude: lat,
          longitude: lon,
        }));

        setRouteCoordinates(coordinates);
        setDuration(response.data.routes[0].segments[0].duration);
        setAngle(calcAngle(coordinates));
      } catch (error) {
        console.error('Error fetching route:', error);
      }
    };

    fetchRoute();
  }, [origin, destination, apiKey]);
}
