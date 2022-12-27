import {React, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

function ListItem({fname, lname, id}) {
    return (
        <div>
            <ul>
                <li><Link to={`/recent-news/${id}`}>{fname} {lname}</Link></li>
            </ul>

        </div>
    );
}
export default ListItem;