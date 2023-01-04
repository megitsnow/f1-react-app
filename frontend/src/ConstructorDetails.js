import IndividualConstructorCard from './IndividualConstructorCard.js';
import ConstructorResultCard from './ConstructorResultCard.js';
import {React, useEffect, useState, Fragment} from 'react';
import { useParams } from 'react-router-dom'
import './Style.css';

function ConstructorDetails(props) {
    const params = useParams()
    const [constructorInfo, setConstructorInfo] = useState({});
    let count = 0;

    const constructorId = params.constructorId
    const url = `/constructors/${constructorId}`;

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((constructorData) => {
            setConstructorInfo(constructorData);
            console.log(constructorInfo)
            });
        }, []);

        const resultsConstructorCards = []
        const constructorImage = []


        for (const constructor of Object.values(constructorInfo)) {
            if (constructorImage.length == 0) {
                constructorImage.push(constructor.img)
            }
            const resultCard = (
              <ConstructorResultCard
                key={`${constructor.race_name}${constructor.name}${count}`}
                points = {constructor.points}
                position = {constructor.position}
                race_name = {constructor.race_name}
              />
            );
            count++
            resultsConstructorCards.push(resultCard);
            console.log(constructorInfo)
          }

    return (
        <div className = "driver-card-page">
            <div>
                <img src = {constructorImage}/>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Race Name</th>
                            <th>Points</th>
                            <th>Position</th>
                        </tr>
                    </thead>
                {resultsConstructorCards}
                </table>
            </div>
        </div>
    );
}

export default ConstructorDetails;