import {React, useEffect, useState} from 'react';
import UserListItem from './UserListItem.js';

function UserList(props) {
    const [userInfo, setuserInfo] = useState({});

    useEffect(() => {
    fetch('/api/other-users')
        .then((response) => response.json())
        .then((userData) => {
        setuserInfo(userData);
        console.log("****USER LIST******")
        console.log(userData)
        });
    }, []);

    const user_names = []

    for (const user of Object.values(userInfo)) {
        const listItems = (
        <UserListItem
            fname = {user.fname}
            lname = {user.lname}
            id = {user.user_id}
            />
        );
        user_names.push(listItems)
    };

    return (
        <div>
            <h2>View Profiles of Other Users</h2>
            {user_names}
        </div>
    );
}

export default UserList;