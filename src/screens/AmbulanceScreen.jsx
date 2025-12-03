import React, { useEffect, useState } from 'react'
import { View, Text, Button, PermissionsAndroid, Platform, Alert } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const AmbulanceScreen = () => {
    const [location, setLocation] = useState(null);

    
  const requestLocationPermission = async () => {
    try {
      let permissionResult;

      if (Platform.OS === 'android') {
        permissionResult = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (permissionResult === PermissionsAndroid.RESULTS.GRANTED) {
          getLocation();
        } else {
          Alert.alert('Permission Denied');
        }
      } else {
        permissionResult = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        if (permissionResult === RESULTS.GRANTED) {
          getLocation();
        } else {
          Alert.alert('Permission Denied');
        }
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setLocation(position.coords);
      },
      (error) => {
        console.error(error);
        Alert.alert('Error getting location', error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);


  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontWeight: 'bold' }}>Current Location:</Text>
      {location ? (
        <>
          <Text>Latitude: {location.latitude}</Text>
          <Text>Longitude: {location.longitude}</Text>
        </>
      ) : (
        <Text>Fetching location...</Text>
      )}
    </View>

  )
}

export default AmbulanceScreen