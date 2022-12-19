import IndividualConstructorCard from './IndividualConstructorCard.js';
import ConstructorResultCard from './ConstructorResultCard.js';
import {React, useEffect, useState, Fragment} from 'react';
import { useParams } from 'react-router-dom'

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

        for (const constructor of Object.values(constructorInfo)) {
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


        //   const individualConstructorCard = (
        //     <IndividualConstructorCard
        //     name = {constructorInfo[1]['name']}
        //     nationality = {constructorInfo[1]['nationality']}
        //     wiki_url = {constructorInfo[1]['url']}
        //     />
        // );


    return (
        <div>
            {/* <div>
                <img src = {constructorInfo[1]['img']}/>
                <h1>{constructorInfo[1]['name']}</h1>
                <h2>{constructorInfo[1]['nationality']}</h2>
                <a href = {constructorInfo[1]['url']}/>
            </div> */}
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
    );
}

export default ConstructorDetails;