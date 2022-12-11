import IndividualUserInformation from './IndividualUserInformation.js';
import {React, useState, useEffect} from 'react';

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
        />
    )


    return(
        <div>
            {individualInformation}
        </div>
    
    );

}

export default UserInformation;