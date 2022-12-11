import hearticon from "./images/hearticon.jpeg"
import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';



function DriverCard(props) {
    const { surname, img, nationality, id} = props;
    const [liked, setLiked] = useState(false);

   const driverInformation= {}
   driverInformation['driverId'] = id


    function addToLikes() {
        console.log("clicked!")
        setLiked(current => !current);
        fetch('/api/driver-like', {
            method: 'POST',
            body: JSON.stringify(driverInformation),
            headers: {
            'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
            alert(responseJson.status);
            });
    }

    return (
        <div>
            <Link to={`/drivers/${id}`}><img src = {img}/></Link>
            <h2>{surname}</h2>
            <h1>{nationality}</h1>
            {liked ? <Favorite onClick = {addToLikes}/> : <FavoriteBorder onClick = {addToLikes}/>}
            {/* <img src = {Favorite} onClick = {addToLikes}></img> */}
        </div>

    );
}

export default DriverCard;