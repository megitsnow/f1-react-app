import ConstructorCard from './ConstructorCard.js';
import {React, useState, useEffect} from 'react';
import './Style.css';

function Constructors(props){
    const [constructorData, setConstructorData] = useState({});
    const constructorCards = [];

    useEffect(() => {
        fetch('/api/constructors')
            .then((response) => response.json())
            .then((constructorLogoData) => {
            setConstructorData(constructorLogoData);
            });
        }, []);

    for (const constructor of Object.values(constructorData)) {
      const constructorCard = (
        <ConstructorCard
          key={constructor.constructor_api_ref}
          name = {constructor.name}
          img = {constructor.img}
          id = {constructor.constructor_id}
        />
      );
  
      constructorCards.push(constructorCard);
    }
    return (
        <div className = "constructorPage">
          <div className = "constructorGrid">
              {constructorCards}
          </div>
        </div>
        
    );
}

export default Constructors;