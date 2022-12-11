import {React, useState} from 'react'

function IndividualUserInformation(props) {
    const { fname, lname, email, password} = props;
    const [isShown, setIsShown] = useState(false)
  
    function toggleShown(){
        setIsShown(prevShown => !prevShown)
        console.log("clicked")
    }

    return (
        <div>
            <h3>{`Welcome Back, ${fname} ${lname}`}</h3>
            <p>{`Email: ${email}`}</p>
            <p>Password: {isShown && <span>{password}</span>}</p>
            <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} Password</button>
        </div>

    );
}

export default IndividualUserInformation;