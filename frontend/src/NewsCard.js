import React from 'react';
import './Style.css';

function NewsCard(props) {
    const { description, title, url, url_to_image} = props;
    return (
        <div className = "newsCard">
            <img src = {url_to_image}/>
            <h5>{description}</h5>
            <a href={url} target="_blank">{title}</a>
        </div>

    );
}

export default NewsCard;