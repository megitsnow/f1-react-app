import React from 'react'
import { Link } from 'react-router-dom';

function LikeDriverCard(props) {
    const { surname, img, nationality, id} = props;

    return (
        <div>
            <Link to={`/drivers/${id}`}><img src = {img}/></Link>
            <h2>{surname}</h2>
            <h1>{nationality}</h1>
        </div>

    );
}

export default LikeDriverCard;