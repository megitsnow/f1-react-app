import {React, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import OtherUserInfo from './OtherUserInfo.js';

function UserProfileById(props) {
    const params = useParams()
    const [userInfo, setUserInfo] = useState({});
    const userId = params.userId
    let count = 567189

    const url = `/api/user-profile/${userId}`;

    useEffect(() => {
    fetch(url)
        .then((response) => response.json())
        .then((driverData) => {
        setUserInfo(driverData);
        });
    }, []);

    const individualInformation= (
        <OtherUserInfo
        key = {`${userInfo.fname}${userInfo.user_id}{count}`}
        fname = {userInfo.fname}
        lname = {userInfo.lname}
        email = {userInfo.email}
        password = {userInfo.password}
        img = {userInfo.img}
        />
    )


    return(
        <div>
            {individualInformation}
        </div>
    
    );
    }

export default UserProfileById;