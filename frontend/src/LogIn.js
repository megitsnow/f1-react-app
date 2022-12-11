import React from 'react';
import { Link } from 'react-router-dom';

function LogIn(props) {
    const {handleChange, handleSubmit, logInData} = props

    return (
        <div>
        <form className="form" onSubmit={handleSubmit}>
            <input 
                type="email" 
                placeholder="Email address"
                name="email"
                onChange={handleChange}
                value={logInData.email}
            />
            <input 
                type="password" 
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={logInData.password}
            /> 
            <Link to="/sign-up">Not A User? Sign Up</Link>    
            <button>Log In</button>
        </form>
    </div>
    );
    }

export default LogIn;