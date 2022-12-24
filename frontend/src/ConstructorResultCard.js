import React from 'react';
import './Style.css';

function ConstructorResultCard(props) {
    const { points, position, race_name} = props;
    return (
        <tbody>
            <tr>
                <td>{race_name}</td>
                <td>{position}</td>
                <td>{points}</td>
            </tr>
        </tbody>

    );
}

export default ConstructorResultCard;