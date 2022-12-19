import MapComponent from './Map.js';
import {React, useState, useEffect} from 'react';

function Maps(props) {

    const [mapData, setMapData] = useState({});
    console.log(mapData)

    useEffect(() => {
        fetch('/api/circuits')
            .then((response) => response.json())
            .then((mapInfo) => {
            setMapData(mapInfo);
            });
        }, []);
    
    const googleMapInfo = [];
    console.log(mapData)

    for (const map of Object.values(mapData)) {
      const mapInformation = (
        <MapComponent
        key={`${map.name}${map.lat}`}
          name = {map.name}
          lat = {map.lat}
          lng = {map.lng}
          location = {map.location}
          country = {map.country}
          url = {map.url}
        />
      );
  
      googleMapInfo.push(mapInformation);
    }
    return (
        <div>
            {googleMapInfo}
        </div>
        
    );
}

export default Maps;