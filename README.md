# F1 Fan: An app for All Things Formula One (WORK IN PROGRESS)
![F1 Fan header](images/READMEHEADER.png)

Live link:   
Demo: 


## Table of Contents
- [Project Description](https://github.com/megitsnow/f1-react-app#project-description)
- [Tech Stack](https://github.com/megitsnow/f1-react-app#tech-stack)
- [Features](https://github.com/megitsnow/f1-react-app#features)
- [Possible Future Features](https://github.com/megitsnow/f1-react-app#possible-future-features)
- [Known Bugs](https://github.com/megitsnow/f1-react-app#known-bugs)


## Project Description

You've watched Drive to Survive and aren't sure where to turn next to fuel your newfound passion? F1 Fan was built for you. Fans new and old can like and follow their favorite drivers, read the latest news from the pit lane, and explore race circuits all over the world!  Based on their likes and preferences, users have access to tailored news and can also see others with similar interests. If interested to learn more about a driver's or constructor's performance, users can click on their respective pictures for historical performnace information. To create a tailored experience, a user can upload their own photo and view their likes. Grab your helmet and see you in the fast lane!

[F1 Fan App GIF of Application](images/F1FanAppGIF.gif)

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
- [Ergast Moter Racing Developer API](https://ergast.com/mrd/)
- [News API](https://newsapi.org/)
- [Cloudinary API](https://cloudinary.com/)
- [React Google Maps API](https://react-google-maps-api-docs.netlify.app/)



## Features
- Create an account, log in, and log out



## Possible Future Features
- ***Allow users to follow other users***:
  - Unfortunately this was not a feature I had in mind initially and will require creating a new table in the database. In future iterations I hope to add a feature for users to follow and message each other.
- ***Search bars***: Given the fast amount of information on some of the pages, such as the recent news and circuits tab, in version 2.0 I hope to add in search bars to make the pages easier to naviagte for users.
- ***More password security***: To talk to Chad about this****.
- ***Allow users to login using their Gmail and other accounts***: To make signing up and logging in for the F1 App easier, in version 2.0 I will add in an authentification API to allow users to create and login via their gmail and other accounts.


## Known Bugs
- ***Users are unable to unlike a driver***: Users are currently able to like a driver. Before my MVP was due, I was unable to give them the ability to unlike the driver and have the like removed from the database.


