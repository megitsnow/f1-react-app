import {React, Fragment, useState, useEffect} from 'react';
import { Link, Navigate} from 'react-router-dom';
import './Style.css';

function NavBar({inSession}) {
    const [isShown, setIsShown] = useState(false)

    function toggleShown(){
        setIsShown(prevShown => !prevShown)
        console.log(isShown)
    }
    
    function logOut() {

        const loggedOut = {
            "removeSession": true
        };
    
        fetch('/api/log-out', {
            method: 'POST',
            body: JSON.stringify(loggedOut),
            headers: {
            'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
            console.log("I got here")
            window.location.href = "/"
            });
        
    }

    if (inSession == true) {
        return (
            <nav>
                <div className = "nav-bar-logged-in">
                        <Link to = "/"><img src="https://upload.wikimedia.org/wikipedia/commons/3/33/F1.svg" height="30" alt="logo" /></Link>
                        <Link to = "/drivers" className = "nav-link">Drivers</Link>
                        <Link to = "/constructors" className = "nav-link">Constructors</Link>
                        <Link to = "/circuits" className = "nav-link">Circuits</Link>
                        <Link to = "/recent-news" className = "nav-link">Recent News</Link>
                 
                    <div className = "nav-bar-end">
                    <Link to = "/user-profile" className = "nav-link">User Profile</Link>
                    <Link to = "/" className = "nav-link" onClick = {() => {logOut();
                        toggleShown();}}>Log Out</Link>
                    </div>
                </div>
            </nav>
        
        )
    }
    else {
        return (
            <nav>
            <section className = "nav-bar-logged-out">
                
                    <Link to = "/"><img src="https://upload.wikimedia.org/wikipedia/commons/3/33/F1.svg" height="30" alt="logo" /></Link>
                    <Link to = "/log-in">Log In</Link>
        
            </section>
            </nav>
            );
        }
    }

export default NavBar;