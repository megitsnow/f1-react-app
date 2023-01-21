# F1 Fan: An app for All Things Formula One 
![F1 Fan header](images/READMEHEADER.png)

- Live link: [F1 Fan App Website](http://52.10.130.154/)
- Demo: [F1 Fan App Youtube Video](https://www.youtube.com/watch?v=Njvq3IUBSck)


## Table of Contents
- [Project Description](https://github.com/megitsnow/f1-react-app#project-description)
- [Tech Stack](https://github.com/megitsnow/f1-react-app#tech-stack)
- [Features](https://github.com/megitsnow/f1-react-app#features)
- [Possible Future Features](https://github.com/megitsnow/f1-react-app#possible-future-features)
- [Known Bugs](https://github.com/megitsnow/f1-react-app#known-bugs)


## Project Description

You've watched Drive to Survive and aren't sure where to turn next to fuel your newfound passion? F1 Fan was built for you. Fans new and old can like and follow their favorite drivers, read the latest news from the pit lane, and explore race circuits all over the world!  Based on their likes and preferences, users have access to tailored news and can also see others with similar interests. If interested to learn more about a driver's or constructor's performance, users can click on their respective pictures for historical performance information. To create a tailored experience, a user can upload their own photo and view their likes. Grab your helmet and see you in the fast lane!

[F1 Fan App GIF of Functionality](images/F1FanAppGIF.gif)

## Tech Stack
- Python
- Flask
- PostgreSQL
- SQLAlchemy
- JavaScript
- React
- HTML
- CSS


APIs:
- [Ergast Motor Racing Developer API](https://ergast.com/mrd/)
- [News API](https://newsapi.org/)
- [Cloudinary API](https://cloudinary.com/)
- [React Google Maps API](https://react-google-maps-api-docs.netlify.app/)



## Features
- Create an account, log in, and log out
- Like drivers and view their historical stats
- Browse constructor logos and view their race results
- Learn more about various circuits around the world 
- Read about recent F1 Events and have access to tailored news based on your likes
- View your user information as well as liked drivers
- Upload a photo of yourself by using the Cloudinary API



## Possible Future Features
- ***Allow users to follow other users***:
  - Following a user will require creating a new table in the database. In future iterations I hope to add a feature for users to follow each other and potentially message each other.
- ***Search bars***: Given the vast amount of information on some of the pages, such as the recent news and circuits tab, in version 2.0 I hope to add in search bars to make the pages easier to naviagte for users.
- ***Allow users to login using their Gmail and other accounts***: To make signing up and logging in for the F1 App easier, in version 2.0 I will add in an authentification API to allow users to create and login via their gmail and other accounts. This will also help to increase secruity as user login information will not be stored in the database.


## Known Bugs
- ***Users are unable to unlike a driver***: Users are currently able to like a driver. Before my MVP was due, I was unable to give them the ability to unlike the driver and have the like removed from the database.


