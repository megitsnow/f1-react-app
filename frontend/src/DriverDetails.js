import DriverResultCard from './DriverResultCard.js';
import {React, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'

function DriverDetails(props) {
    const params = useParams()
    const [driverInfo, setDriverInfo] = useState({});
    const driverId = params.driverId
    let count = 0

    const url = `/drivers/${driverId}`;

    useEffect(() => {
    fetch(url)
        .then((response) => response.json())
        .then((driverData) => {
        setDriverInfo(driverData);
        });
    }, []);

    const resultsDriverCards = []
    const driverImage = []

    for (const driver of Object.values(driverInfo)) {
        if (driverImage.length == 0) {
            driverImage.push(driver.img_url)
        }

        const resultCard = (
          <DriverResultCard
            key={`${driver.race_name}${driver.fname}${count}`}
            points = {driver.points}
            position = {driver.position}
            race_name = {driver.race_name}
          />
        );
        count++
        resultsDriverCards.push(resultCard);
      }


    return (
        <div className = "driver-card-page">
            <div>
                <img src = {driverImage}/>
            </div>
            <table>
            <thead>
                <tr>
                    <th>Race Name</th>
                    <th>Points</th>
                    <th>Position</th>
                </tr>
            </thead>
            {resultsDriverCards}
            </table>
        </div>
        );
    }

export default DriverDetails;