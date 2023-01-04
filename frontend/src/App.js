import { React, useState, useEffect, Fragment} from 'react';
import { Link, BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import './Style.css';

import NavBar from './Navbar.js';
import Constructors from './Constructor.js';
import ConstructorDetails from './ConstructorDetails.js';
import Drivers from './Drivers.js';
import DriverDetails from './DriverDetails.js';
import RecentNews from './RecentNews.js';
import LogIn from './LogIn.js'
import SignUpForm from './SignUp.js';
import UserInformation from './UserInformation.js';
import UserProfile from './UserProfile.js';
import HomePage from './HomePage.js';
import Maps from './MapData.js';
import Carousel from './Carousel.js'
import CloudinaryWidget from './Cloudinary.js'
import SimilarLikes from './SimilarLikes.js'
import DriverNews from './DriverNews.js'
import DriverNewsById from './DriverNewsById.js'
import UserList from './UserList.js'
import UserProfileById from './UserProfileById.js'



function App() {

    const [inSession, setInSession] = useState(false);

    console.log(inSession)

    useEffect(() => {
      fetch('/api/in-session')
          .then((response) => response.json())
          .then((inSession) => {
          if (inSession.in_session == true){
            setInSession(true);
          } 
          });
      }, []);

    const [formData, setFormData] = useState({
        fname: "",
        lname: '',
        email: "",
        password: "",
        passwordConfirm: "",
    })

    const handleSignUpChange = (event) => {
        console.log(formData)
        const {name, value} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
        console.log(formData)
    }
    const handleSignUpSubmit = (event) => {
        event.preventDefault()
        fetch('/api/sign-up', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
            'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
            window.location.href = "/"
            });
    }

// LogIn Form

    const [logInData, setLogInData] = useState({
        email: "",
        password: "",
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setLogInData(prevLogInData => ({
            ...prevLogInData,
            [name]: value
        }))
        console.log(logInData)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('/api/log-in', {
            method: 'POST',
            body: JSON.stringify(logInData),
            headers: {
            'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
            window.location.href = "/"
            });
    }   

    

  return (
    <div className = "darkMode">
    <BrowserRouter>
      <NavBar inSession = {inSession}/>
      <Routes>
      <Route exact path="/" element = {<Fragment>
        <Carousel/>
        </Fragment>}/>
        <Route exact path="/constructors" element = {<Constructors/>}/>
        <Route path="/constructors/:constructorId" element = {<ConstructorDetails/>}/>
        <Route exact path="/drivers" element = {<Drivers/>}/>
        <Route path="/drivers/:driverId" element = {<DriverDetails/>}/>
        <Route path="/recent-news/:driverId" element = {<DriverNewsById/>}/>
        <Route path="/user-Profile/:userId" element = {<UserProfileById/>}/>
        <Route exact path="/recent-news" element = {<div className = "recent-news">
            <DriverNews/>
            <RecentNews/>
            </div>}/>
        <Route exact path="/circuits" element = {<Maps/>}/>
        <Route exact path="/log-in" element = {<LogIn handleChange = {handleChange}
        handleSubmit = {handleSubmit}
        logInData = {logInData}
        />}/>
        <Route exact path="/sign-up" element = {<SignUpForm handleSignUpChange = {handleSignUpChange}
        handleSignUpSubmit = {handleSignUpSubmit}
        formData = {formData}/>}/>
        <Route exact path="/user-profile" element = {<div className = "profilePage">
            <div className = "user-profile">
                    <div className = "user-information-tab">
                    <UserInformation/>
                    <CloudinaryWidget/>
                    </div>
                    <UserProfile/>
                    </div>
        </div>
    }/>
      </Routes>
    
    </BrowserRouter>
    </div>
    );
    };

export default App;
