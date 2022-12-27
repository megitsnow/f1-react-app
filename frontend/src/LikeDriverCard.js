import React from 'react'
import { Link } from 'react-router-dom';

function LikeDriverCard(props) {
    const { surname, img, nationality, id, shared_likes} = props;
    const common_user_likes = shared_likes.join(',')


    return (
        <div className = "liked-driver-card">
            <Link to={`/drivers/${id}`}><img src = {img} className = "driverImage"/></Link>
            <h2 className = "driver-surname">{surname}</h2>
            <h3 className = "nationality">{nationality}</h3>
            <h3 className = "nationality">Other users that like {surname}: {common_user_likes}</h3>
        </div>

    );
}

export default LikeDriverCard;