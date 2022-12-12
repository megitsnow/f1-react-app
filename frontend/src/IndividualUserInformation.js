import {React, useState} from 'react'

function IndividualUserInformation({ fname, lname, email, password, img}) {
    const [isShown, setIsShown] = useState(false)
  
    function toggleShown(){
        setIsShown(prevShown => !prevShown)
        console.log("clicked")
    }

    return (
        <div>
            <h3>{`Welcome Back, ${fname} ${lname}`}</h3>
            <p>{`Email: ${email}`}</p>
            <img src = {img}/>
            <p>Password: {isShown && <span>{password}</span>}</p>
            <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} Password</button>
        </div>

    );
}

export default IndividualUserInformation;