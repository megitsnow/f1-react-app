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
            <h2>{`Welcome Back, ${fname} ${lname}`}</h2>
            <h3>{`Email: ${email}`}</h3>
            <h3>Password: {isShown && <span>{password}</span>}</h3>
            <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} Password</button>
            <br></br>
            <img src = {img} className = "profile-photo"/>
        </div>

    );
}

export default IndividualUserInformation;