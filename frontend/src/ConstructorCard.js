import {React} from 'react';
import { Link } from 'react-router-dom';

function ConstructorCard(props) {
    const { name, img, id} = props;
    return (
        <div>
            <Link to={`/constructors/${id}`}><img src = {img}/></Link>
        </div>

    );
}

export default ConstructorCard;