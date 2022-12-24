"""Server for F-1 app."""

from flask import Flask, render_template, request, flash, session, redirect, jsonify
from model import connect_to_db, db, Constructor, Driver, Race, Result, Like, User, Circuit
import json
import cloudinary.uploader
import crud
import os
import requests 

app = Flask(__name__)
app.secret_key = "dev"

API_KEY = os.environ["NEWS_API_KEY"]
CLOUDINARY_KEY = os.environ["CLOUDINARY_API_KEY"]
CLOUDINARY_SECRET = os.environ["CLOUDINARY_API_SECRET"]
CLOUD_NAME = "dzqtjox0u"

@app.route("/")
def login():
    """Returns login page."""

    return render_template('index.html')

# Sign Up Routes
## Need to update this so that it looks up more than just the passwords matching
## Need to have it check if the user already exixts, if it is a valid email etc

@app.route("/api/sign-up", methods=["POST"])
def handle_signup():
    """Create a new user."""
    fname = request.json.get("fname")
    lname = request.json.get("lname")
    email = request.json.get("email")
    password = request.json.get("password")
    password_confirm = request.json.get("passwordConfirm")

    if crud.get_user_by_email(email) is None and password == password_confirm:
        print("user does not exist!!")
        user = crud.create_user(fname = fname, lname = lname, email = email, password = password)
        db.session.add(user)
        db.session.commit()
        session["user_email"] = user.email
    else:
        return {'Status': 400, "Message": "Passwords do not match"}

    return jsonify(user.to_dict())

# Log-In Routes 

@app.route("/api/log-in", methods=["POST"])
def handle_login():
    """Sign in a user and add to the session if already a user"""

    email = request.json.get("email")
    print(email)
    password = request.json.get("password")
    print(password)
    
    user = crud.get_user_by_email(email)
    print(user)

    if not user or user.password != password:
        print("The email or password you entered was incorrect.")
    else:
        session["user_email"] = user.email
        print("****************************** LOG IN")
        print(session["user_email"])
        print(f"Welcome back, {user.email}!")

    return jsonify(user.to_dict())

# Constructor routes

@app.route("/api/user-information")
def user_information():
    """Get user information"""
    user_email = session["user_email"]
    user = User.query.filter_by(email = user_email).first()
    return jsonify(user.to_dict())

@app.route("/api/constructors")
def constructor_logos():
    """Get constructor logos"""
    constructors = Constructor.query.filter(Constructor.img !=None).all()
    return jsonify({constructor.constructor_id: constructor.to_dict() for constructor in constructors})

@app.route("/constructors/<constructor_id>")
def constructor_indiv_info(constructor_id):
    """Get individual constructor information"""
    print(constructor_id)

    constructor_race_results = (
    db.session.query(Race.race_id, Constructor.name, Constructor.nationality, Constructor.url, Race.name, Result.points, Result.position, Constructor.img)
    .join(Result, Result.race_id == Race.race_id)
    .join(Constructor, Constructor.constructor_id == Result.constructor_id)
    .filter(Constructor.constructor_id == constructor_id).all()
    )

# similar_likes = (
# db.session.query(User.fname, User.lname, Like.driver_id, User.user_id)
# .join(User, User.user_id == Like.user_id)
# .join(Driver, Driver.driver_id == Like.driver_id)
# .filter(Driver.driver_id == 1)
# )


    race_results = {}

    for i, value in enumerate(constructor_race_results):
        list_items = list(value)
        for i, item in enumerate(list_items):
            race = {}
            race_id = str(list_items[0])
            if i == 0: 
                race_results[race_id] = {}
            elif i == 1:
                race_results[race_id]['name'] = item
            elif i == 2:
                race_results[race_id]['nationality'] = item
            elif i == 3:
                race_results[race_id]['url'] = item
            elif i == 4:
                race_results[race_id]['race_name'] = item
            elif i == 5:
                race_results[race_id]['points'] = item
            elif i == 6:
                race_results[race_id]['position'] = item
            elif i == 7:
                race_results[race_id]['img'] = item
            

    return jsonify(race_results)   

# Driver routes. To include route for each individual driver like we have for the constructors

@app.route("/drivers/<driver_id>")
def driver_indiv_info(driver_id):
    """Get individual driver information"""
    print(driver_id)
    race_results = (
    db.session.query(Race.race_id, Driver.forename, Driver.surname, Driver.nationality, Race.name, Result.points, Result.position, Driver.img_url)
    .join(Result, Result.race_id == Race.race_id)
    .join(Driver, Driver.driver_id == Result.driver_id)
    .filter(Driver.driver_id == driver_id).all()
    )

    driver_race_results = {}

    for i, value in enumerate(race_results):
        list_items = list(value)
        for i, item in enumerate(list_items):
            race = {}
            race_id = str(list_items[0])
            if i == 0: 
                driver_race_results[race_id] = {}
            elif i == 1:
                driver_race_results[race_id]['fname'] = item
            elif i == 2:
                driver_race_results[race_id]['lname'] = item
            elif i == 3:
                driver_race_results[race_id]['nationality'] = item
            elif i == 4:
                driver_race_results[race_id]['race_name'] = item
            elif i == 5:
                driver_race_results[race_id]['points'] = item
            elif i == 6:
                driver_race_results[race_id]['position'] = item
            elif i == 7:
                driver_race_results[race_id]['img_url'] = item

    return jsonify(driver_race_results)  

@app.route("/api/driver-like", methods=["POST"])
def create_user_like():
    """Sign in a user and add to the session if already a user"""

    driver_id = request.json.get("driverId")
    logged_in_email = session.get("user_email")
    print(f"LINE 128 {driver_id}")
    print(logged_in_email)
    user = crud.get_user_by_email(logged_in_email)
    id = user.user_id

    similar_like = Like.query.filter(Like.user_id == id).filter(Like.driver_id == driver_id).all()

    if similar_like == []:
        like = crud.create_like(user.user_id, driver_id)
        db.session.add(like)
        db.session.commit()
        return jsonify(like.to_dict())
    
    return(user.to_dict())

# similar_like = Like.query.filter(Like.driver_id ==1).all()

@app.route("/api/user-like")
def render_user_likes():
    """Sign in a user and add to the session if already a user"""

    logged_in_email = session.get("user_email")

    user = crud.get_user_by_email(logged_in_email)
    user_id = user.user_id
    
    driver_info_per_like = (
    db.session.query(Like.like_id, Driver.forename, Driver.surname, Driver.img_url, Driver.nationality, Driver.driver_id)
    .join(Like, Like.driver_id == Driver.driver_id)
    .filter(Like.user_id == user_id).all()
    )
    
    user_likes = {}
    driver_ids = []
    shared_user_likes = {}
    likes_to_dict = {}
    users = {}


    for i, value in enumerate(driver_info_per_like):
        list_items = list(value)
        for i, item in enumerate(list_items):
            if i == 5:
                driver_ids.append(item)
    
    for id in driver_ids:
        similar_like = Like.query.filter(Like.driver_id ==id).all()
        driver_id = str(id)
        user_ids = []
        print(user_ids)
        for like in similar_like:
            new_like = like.to_dict()
            user_id = like.user_id
            user = crud.get_user_by_id(user_id)
            first_name = user.fname
            print("*****FIRSTNAME****")
            print(first_name)
            user_ids.append(first_name)
            print(user_ids)
            if likes_to_dict.get(driver_id,0) == 0:
                likes_to_dict[driver_id] = [first_name]
            else:
                likes_to_dict[driver_id].append(first_name)


    for i, value in enumerate(driver_info_per_like):
        list_items = list(value)
        for i, item in enumerate(list_items):
            like = {}
            like_id = str(list_items[0])
            if i == 0: 
                user_likes[like_id] = {}
            elif i == 1:
                user_likes[like_id]['fname'] = item
            elif i == 2:
                user_likes[like_id]['lname'] = item
            elif i == 3:
                user_likes[like_id]['img'] = item
            elif i == 4:
                user_likes[like_id]['nationality'] = item
            elif i == 5:
                user_likes[like_id]['id'] = item
                shared_likes = likes_to_dict.get(str(item), 0) 
                if shared_likes != 0:
                    user_likes[like_id]['shared_likes'] = shared_likes
    print("**** USER LIKES *******")
    print(user_likes)


    return jsonify(user_likes)

@app.route("/api/active_drivers")
def active_driver_data():
    """Get active drivers"""
    active_drivers = Driver.query.filter_by(active = 'True').all()
    return jsonify({active_driver.driver_id: active_driver.to_dict() for active_driver in active_drivers})

# Route for recent news 

@app.route("/api/recent-news")
def get_recent_articles():
    """Get recent articles"""
    url =f'https://newsapi.org/v2/everything?q=F1 Racing&from=2022-12-01&sortBy=popularity&apiKey={API_KEY}'

    response = requests.get(url)
    data = response.json()
    news_list = data['articles']

    news_articles = []

    for i in range(len(news_list)):
        article= {
        "title": data['articles'][i]['title'],
        "description": data['articles'][i]['description'],
        "url": data['articles'][i]['url'],
        "url_to_img": data['articles'][i]['urlToImage']
        }
        news_articles.append(article)
    
    return jsonify(news_articles)

@app.route("/api/in-session")
def in_session():
    """Get individual constructor information"""
    in_session = session['user_email']
    ("********IN SESSION")
    user_in_session = {}
    print(in_session)
    if in_session:
        user_in_session['in_session'] = True
    else:
        user_in_session['in_session'] = False
    return jsonify(user_in_session)  

@app.route("/api/log-out", methods=["POST"])
def remove_from_session():
    """Logged out a user and remove them from the flask session"""

    logged_out = request.json.get("removeSession")
    print("*********************LOGGED OUT??!")
    print(logged_out)
    out_of_session = {}
    if logged_out == True:
        out_of_session["remove_session"] = True
        session.clear()

    return jsonify(out_of_session)

@app.route("/api/profile-photo", methods=["POST"])
def cloudinary_photo():
    """Get user information"""
    user_email = session["user_email"]
    print(request)
    profile_photo = request.json.get("profile_picture")
    user = User.query.filter_by(email = user_email).first()
    print("**********************CLOUDINARY")
    print(f'{profile_photo}')
    if profile_photo != None:
        user.img = profile_photo
        db.session.flush()
        db.session.commit()
    return jsonify(user.to_dict())

@app.route("/api/circuits")
def circuit_data():
    """Circuit data"""
    circuits = Circuit.query.all()
    print(circuits)
    return jsonify({circuit.circuit_id: circuit.to_dict() for circuit in circuits})    

@app.route("/api/similar-likes")
def similar_users():
    """Return users that have similar likes to the user"""

    logged_in_email = session.get("user_email")

    user = crud.get_user_by_email(logged_in_email)
    user_id = user.user_id
    
    user_info_per_driver_like = (
    db.session.query(Like.user_id, Driver.driver_id)
    .join(Like, Like.driver_id == Driver.driver_id)
    .filter(Like.user_id == 1).all()
    )
    
    driver_ids = []
    users = {}

    for i, value in enumerate(user_info_per_driver_like):
        list_items = list(value)
        for i, item in enumerate(list_items):
            if i == 1:
                driver_ids.append(item)
    
    for id in driver_ids:
        similar_like = Like.query.filter(Like.driver_id == id).all()
        for like in similar_like:
            user_id = like.user_id
            user = crud.get_user_by_id(user_id)
            first_name = user.fname
            users['id'] = user_id
            users['first_name'] = first_name

    return jsonify(users)

if __name__ == "__main__":
    connect_to_db(app)
    app.run(host="0.0.0.0", debug=True)