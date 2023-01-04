import {React, useState} from 'react'
import './Style.css';

function OtherUserInfo({ fname, lname, email, password, img}) {
    const [isShown, setIsShown] = useState(false)
  
    function toggleShown(){
        setIsShown(prevShown => !prevShown)
        console.log("clicked")
    }

    return (
        <div>
            <h2>{`${fname} ${lname}`}</h2>
            <img src = {img} className = "profile-photo"/>
            <h3>{`Email: ${email}`}</h3>
            <br></br>
        </div>

    );
}

export default OtherUserInfo;