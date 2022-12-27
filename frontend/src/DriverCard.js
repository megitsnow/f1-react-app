import hearticon from "./images/hearticon.jpeg"
import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import './Style.css';



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
            }); 
    }

    return (
        <div>
            <div className="driver-card">
                <div>
                    <Link to={`/drivers/${id}`}><img src = {img} className = "driverImage"/></Link>
                </div>
                <div className="driver-card-info">
                    <div>
                        <h2 className = "driver-surname">{surname}</h2>
                        <h3 className = "nationality">{nationality}</h3>
                    </div>
                    <div>
                            {liked ? <Favorite onClick = {addToLikes}/> : <FavoriteBorder onClick = {addToLikes}/>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DriverCard;