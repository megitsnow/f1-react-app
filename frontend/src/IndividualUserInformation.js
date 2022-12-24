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
            <p>{`Welcome Back, ${fname} ${lname}`}</p>
            <p>{`Email: ${email}`}</p>
            <p>Password: {isShown && <span>{password}</span>}</p>
            <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} Password</button>
            <br></br>
            <img src = {img} className = "profile-photo"/>
        </div>

    );
}

export default IndividualUserInformation;