import {React, useEffect, useState} from 'react';
import ListItem from './ListItem.js';
import './Style.css';

function DriverNews(props) {
    const [driverInfo, setDriverInfo] = useState({});

    useEffect(() => {
    fetch('/api/recent-news/driver-likes')
        .then((response) => response.json())
        .then((driverData) => {
        setDriverInfo(driverData);
        console.log("****RECENT NEWS******")
        console.log(driverData)
        });
    }, []);

    const liked_list_item = []

    for (const driver of Object.values(driverInfo)) {
        const listItems = (
        <ListItem
            fname = {driver.fname}
            lname = {driver.lname}
            id = {driver.id}
            />
        );
        liked_list_item.push(listItems)
    };

    return (
        <div className = "liked-driver-news">
            <h3>View News For Your Liked Drivers</h3>
            {liked_list_item}
        </div>
    );
}

export default DriverNews;