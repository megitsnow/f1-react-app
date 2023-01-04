import LikeDriverCard from './LikeDriverCard.js';
import {React, useEffect, useState} from 'react';
import './Style.css';

function UserLikes(props){
    const [likes, setLikes] = useState({});
    const [isShown, setIsShown] = useState(true)
  
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
        console.log(item.shared_likes)
        const likeCard = (
            <LikeDriverCard 
            key={`${item.id}${count}`}
            surname={item.lname}
            img={item.img}
            nationality={item.nationality}
            id={item.id}
            shared_likes = {item.shared_likes}
        />
        );
        count++
        likesDriverCards.push(likeCard);
      }

      console.log(likesDriverCards)

    return(
        <div>
            <h2 className = "hide-show-title"onClick={toggleShown}>{isShown ? "Hide" : "View"} Your Liked Drivers</h2>
            {isShown && <div className='user-likes'>{likesDriverCards}</div>}
        </div>
    
    );

}

export default UserLikes;