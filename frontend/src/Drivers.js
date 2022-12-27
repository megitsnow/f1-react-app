import DriverCard from './DriverCard.js';
import {React, useState, useEffect} from 'react';

function Drivers(props) {

    const [activeDriverData, setActiveDriverData] = useState({});

    useEffect(() => {
        fetch('/api/active_drivers')
            .then((response) => response.json())
            .then((activeDriverData) => {
            setActiveDriverData(activeDriverData);
            });
        }, []);
    
    const activeDriverCards = [];

    for (const driver of Object.values(activeDriverData)) {
      const driverCard = (
        <DriverCard
          key={driver.code}
          surname = {driver.surname}
          img = {driver.img_url}
          nationality = {driver.nationality}
          id = {driver.driver_id}
        />
      );
  
      activeDriverCards.push(driverCard);
    }
    return (
        <div className = "driverGrid">
            {activeDriverCards}
        </div>
        
    );
}

export default Drivers;