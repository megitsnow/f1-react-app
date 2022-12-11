import { GoogleMap, LoadScript } from '@react-google-maps/api';
import {React, useState, useEffect} from 'react';


const containerStyle = {
  width: '400px',
  height: '400px'
};

function MapComponent({ name, lat, lng}) {

  const floatLat = parseFloat(lat)
  const floatLng = parseFloat(lng)

  const center = {
    lat: floatLat,
    lng: floatLng
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDEpkgWXPnqdTh-v73cqDr8uD7KCA2T6_I"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default MapComponent;