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
        console.log(driverInfo[1]['img_url'])
        });
    }, []);

    const resultsDriverCards = []

    for (const driver of Object.values(driverInfo)) {
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
        <div>
            {/* <div>
                <img src = {driverInfo[1]['img_url']}/>
            </div> */}
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