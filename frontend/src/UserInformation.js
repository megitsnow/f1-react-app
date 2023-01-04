import IndividualUserInformation from './IndividualUserInformation.js';
import {React, useState, useEffect} from 'react';
import './Style.css';

function UserInformation(props){
    const [userInformation, setUserInformation] = useState({});

    useEffect(() => {
    fetch('/api/user-information')
        .then((response) => response.json())
        .then((userData) => {
        setUserInformation(userData);
        });
    }, []);

    console.log(userInformation)

    const individualInformation= (
        <IndividualUserInformation
        key = {`${userInformation.fname}${userInformation.user_id}`}
        fname = {userInformation.fname}
        lname = {userInformation.lname}
        email = {userInformation.email}
        password = {userInformation.password}
        img = {userInformation.img}
        />
    )


    return(
        <div className = "individual-profile-information">
            {individualInformation}
        </div>
    
    );

}

export default UserInformation;