import React from 'react'
import { Link } from 'react-router-dom';

function LikeDriverCard(props) {
    const { surname, img, nationality, id, shared_likes} = props;
    const common_user_likes = shared_likes.join(',')


    return (
        <div>
            <Link to={`/drivers/${id}`}><img src = {img}/></Link>
            <h2>{surname}</h2>
            <h1>{nationality}</h1>
            <p>Other users that like {surname}: {common_user_likes}</p>
        </div>

    );
}

export default LikeDriverCard;