import LikeDriverCard from './LikeDriverCard.js';
import {React, useEffect, useState} from 'react';

function UserLikes(props){
    const [likes, setLikes] = useState({});
    const [isShown, setIsShown] = useState(false)
  
    function toggleShown(){
        setIsShown(prevShown => !prevShown)
        console.log("clicked")
    }

    useEffect(() => {
    fetch('/api/user-like')
        .then((response) => response.json())
        .then((likeData) => {
        setLikes(likeData);
        });
    }, []);

    let count = 150

    const likesDriverCards = []

    for (const item of Object.values(likes)) {
        const likeCard = (
            <LikeDriverCard 
            key={`${item.id}${count}`}
            surname={item.lname}
            img={item.img}
            nationality={item.nationality}
            id={item.id}
        />
        );
        count++
        likesDriverCards.push(likeCard);
      }

      console.log(likesDriverCards)

    return(
        <div>
            <h3 onClick={toggleShown}>{isShown ? "Hide" : "View"} Your Liked Drivers</h3>
            {isShown && <div>{likesDriverCards}</div>}
        </div>
    
    );

}

export default UserLikes;