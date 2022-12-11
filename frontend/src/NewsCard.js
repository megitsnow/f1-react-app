import React from 'react';

function NewsCard(props) {
    const { description, title, url, url_to_image} = props;
    return (
        <div>
            <img src = {url_to_image}/>
            <a href={url} target="_blank">{title}</a>
            <h1>{description}</h1>
        </div>

    );
}

export default NewsCard;