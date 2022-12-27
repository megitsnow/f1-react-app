import {React} from 'react';
import { Link } from 'react-router-dom';
import './Style.css';

function ConstructorCard(props) {
    const { name, img, id} = props;
    return (
        <div>
            <div className = "constructor-logo">
                <Link to={`/constructors/${id}`}><img src = {img} className = "constructor-logo-img"/></Link>
            </div>
        </div>

    );
}

export default ConstructorCard;