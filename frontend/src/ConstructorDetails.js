import IndividualConstructorCard from './IndividualConstructorCard.js';
import {React, useEffect, useState, Fragment} from 'react';
import { useParams } from 'react-router-dom'

function ConstructorDetails(props) {
    const params = useParams()
    const [constructorInfo, setConstructorInfo] = useState({});

    const constructorId = params.constructorId
    const url = `/constructors/${constructorId}`;

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((constructorData) => {
            setConstructorInfo(constructorData);
            });
        }, []);
        
        const individualConstructorCard = (
            <IndividualConstructorCard
            img = {constructorInfo.img}
            name = {constructorInfo.name}
            nationality = {constructorInfo.nationality}
            wiki_url = {constructorInfo.url}
            />
        );


    return (
        <div>
            <img src = {constructorInfo.img}/>
            {individualConstructorCard}
        </div>
    );
}

export default ConstructorDetails;