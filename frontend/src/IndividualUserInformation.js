import {React, useState} from 'react'
import './Style.css';

function IndividualUserInformation({ fname, lname, email, password, img}) {
    const [isShown, setIsShown] = useState(false)
  
    function toggleShown(){
        setIsShown(prevShown => !prevShown)
        console.log("clicked")
    }

    return (
        <div>
            <h2 className = "welcome">{`Welcome Back, ${fname} ${lname}`}</h2>
            <p className = "user-info-para">{`Email: ${email}`}</p>
            <p className = "user-info-para">Password: {isShown && <span>{password}</span>}</p>
            <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} Password</button>
            <br></br>
            <img src = {img} className = "profile-photo"/>
        </div>

    );
}

export default IndividualUserInformation;