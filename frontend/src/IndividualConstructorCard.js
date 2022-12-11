import React from 'react';

function IndividualConstructorCard(props) {
    const { img, name, nationality, wiki_url} = props;
    return (
        <div>
            <h3>{name}</h3>
            <h2>Nationality - {nationality}</h2>
            <a href={wiki_url} target="_blank">History of {name}</a>
        </div>

    );
}

export default IndividualConstructorCard;