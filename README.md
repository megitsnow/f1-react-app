# F1 Fan: An app for all things Formyla One
![F1 Fan header]()

Live link:   
Demo: 


## Table of Contents
- [Project Description](https://github.com/megitsnow/f1-react-app#project-description)
- [Tech Stack](https://github.com/megitsnow/f1-react-app#tech-stack)
- [Features](https://github.com/megitsnow/f1-react-app#features)
- [Possible Future Features](https://github.com/megitsnow/f1-react-app#possible-future-features)
- [Known Bugs](https://github.com/megitsnow/f1-react-app#known-bugs)
- [Installation](https://github.com/megitsnow/f1-react-app#installation)


## Project Description

*Log in page*  
<!-- <img src="https://user-images.githubusercontent.com/96971685/196335876-67654d1d-ba9f-424b-bbbe-f7ea72a03d03.png" alt="BitBuddy log in page" width="60%"/> -->

*Generating a pet from a custom species*  
<!-- <img src="https://user-images.githubusercontent.com/96971685/196335888-267b7c10-0c40-44b1-a593-837501bdd4f3.png" alt="Generating a pet with a custom species" width="60%"/> -->

*Viewing current pet while awaiting custom pet image from Craiyon*  
<!-- <img src="https://user-images.githubusercontent.com/96971685/196335902-cc723245-abb9-400d-ab76-7bd856c922a9.png" alt="Current pet display with egg as pet image" width="60%"/> -->

*Viewing current pet after feeding them their favorite food*
<!-- <img src="https://user-images.githubusercontent.com/96971685/196335916-dd4f1842-6d2a-4c83-826a-03147acf02a9.png" alt="Current pet display with pet image from Craiyon and pet response to being fed: 'Hm, grilled corn? Mmm, that was the best thing I've ever had!'" width="60%"/> -->


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
- [OpenWeatherMap API](https://openweathermap.org/api)
- [IP API](https://ip-api.com/)
- [Craiyon API](https://github.com/FireHead90544/craiyon.py)


## Features
- Make an account, log in, log out



## Possible Future Features
- ***Custom pet species image selection***:
  - Craiyon generates 9 images, but due to time constraints I designed it so that the image “selection” happens server-side (wrote an algorithm that randomly selects 1 of the 9 images).
  - Want to show user all 9 images and let them select one (especially since Craiyon images can be very hit or miss)
- ***Location***: Allow users to enter a custom location


## Known Bugs
- ***Pet typing response***: If user clicks an interaction button too soon after the previous interaction, the pet’s response text overlaps itself and looks like gibberish, since the previous text finishes concurrent with the new text starting
- ***Loading buttons***: Only some buttons show a loading indication after being clicked


## Installation
To run F1 Fan locally on your computer:
1. **Clone repository** to your local computer
2. **Get an API key** for OpenWeatherMap to use their API. Sign up for free [here](https://openweathermap.org/api/).
3. **Store your OWM API key and create a key for the Flask app.** Create a file called secrets.sh in the virtual-pet-app directory. Add the code below to the file and replace the text in the quotation marks as described.
```
export FLASK_APP_KEY="ENTER_ANYTHING_HERE"
export OWM_API_KEY="YOUR_API_KEY_HERE"
```
4. **Read the key variables** into your shell
```
$ source secrets.sh
```
5. Create and activate a **virtual environment**
```
$ virtualenv env
$ source env/bin/activate
```
6. Install all **dependencies**
```
$ pip3 install -r requirements.txt
```
7. Create the **database**
```
$ python3 seed_database.py
```
8. Start up the **Flask server**
```
$ python3 server.py
```
9. **Go to `localhost:5000` in your browser and have fun with BitBuddy!**
