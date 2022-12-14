import {React, Fragment, useState, useEffect} from 'react';
import { Link, Navigate} from 'react-router-dom';

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
            <ul>
            <li><Link to = "/"><img src="https://upload.wikimedia.org/wikipedia/commons/3/33/F1.svg" height="30" alt="logo" /></Link></li>
            <li><Link to = "/drivers">Drivers</Link></li>
            <li><Link to = "/constructors">Constructors</Link></li>
            <li><Link to = "/recent-news">Recent News</Link></li>
            <li><Link to = "/user-profile">User Profile</Link></li>
            <li onClick = {() => {logOut();
            toggleShown();}}><Link to = "/">Log Out</Link></li>
        </ul>
        )
    }
    else {
        return (
            <nav>
            <section className = "nav-bar">
                <ul>
                    <li><Link to = "/"><img src="https://upload.wikimedia.org/wikipedia/commons/3/33/F1.svg" height="30" alt="logo" /></Link></li>
                    <li><Link to = "/log-in">Log In</Link></li>
                </ul>
            </section>
            </nav>
            );
        }
    }

export default NavBar;