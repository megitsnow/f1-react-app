import React from 'react';
import { Link } from 'react-router-dom';

function UserListItem({fname, lname, id}) {
    return (
        <div>
            <ul>
                <li><Link to={`/user-profile/${id}`}>{fname} {lname}</Link></li>
            </ul>

        </div>
    );
}
export default UserListItem;