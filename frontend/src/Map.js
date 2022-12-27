import { GoogleMap, LoadScript } from '@react-google-maps/api';
import {React, useState, useEffect} from 'react';


const containerStyle = {
  width: '300px',
  height: '300px'
};

function MapComponent({ name, lat, lng, location, country, url}) {

  const floatLat = parseFloat(lat)
  const floatLng = parseFloat(lng)

  const center = {
    lat: floatLat, 
    lng: floatLng
  };

  return (
    <div>
      <div className = "mapsDiv">
        <LoadScript
          googleMapsApiKey="AIzaSyDXMZZxcLg1XfNZkQCrAVnfa2EOzkxlCw4"
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
        <h2 className = "countryName">{name}</h2>
        <h3 className = "countryLocation">{location}, {country}</h3>
        <a href = {url} target= "_blank"> Learn more about {name}</a>
      </div>
    </div>
  )
}

export default MapComponent;