"""CRUD operations."""

from model import db, User, Driver, Race, Constructor, Result, SprintResult, Like, Circuit, connect_to_db

def create_user(fname, lname, email, password):
    """Create and return a new user."""

    user = User(fname = fname,lname = lname, email=email, password=password)

    return user

def create_like(user_id, driver_id):
    """Create and return a new user."""

    like = Like(user_id = user_id, driver_id = driver_id)

    return like

def get_user_by_email(email):
    """Return a user by email."""

    return User.query.filter(User.email == email).first()

# def verify_user_in_session(email):
#     """Return a user by email."""

#     return session["user_email"] 

def create_driver(driver_id, driver_api_ref, number, code, forename, surname, dob, nationality, url, img_url):
    """Create and return a new driver."""

    driver = Driver(
        driver_id = driver_id,
        driver_api_ref=driver_api_ref,
        number=number,
        code=code,
        forename=forename,
        surname = surname,
        dob = dob,
        nationality = nationality,
        url = url,
        img_url = img_url,
    )

    return driver

def create_race(race_id, year, round, circuit_id, name, date, time, url , fp1_date, fp1_time, fp2_date, fp2_time, fp3_date, fp3_time, quali_date, quali_time, sprint_date, sprint_time):
    """Create and return a new driver."""

    race = Race(
        race_id = race_id,
        year=year,
        round=round,
        circuit_id=circuit_id,
        name=name,
        date = date,
        time = time,
        url = url,
        fp1_date = fp1_date,
        fp1_time = fp1_time,
        fp2_date = fp2_date,
        fp2_time = fp2_time,
        fp3_date = fp3_date,
        fp3_time = fp3_time,
        quali_date = quali_date,
        quali_time = quali_time,
        sprint_date = sprint_date,
        sprint_time = sprint_time,
    )

    return race

def create_constructor(constructor_id, constructor_api_ref, name, nationality, url):
    """Create and return a new driver."""

    constructor = Constructor(
        constructor_id = constructor_id,
        constructor_api_ref= constructor_api_ref,
        name=name,
        nationality=nationality,
        url=url,
    )

    return constructor

def create_result(result_id, race_id, driver_id, constructor_id ,number, grid, position, position_text, position_order, points, laps, time, milliseconds, fastest_lap, rank, fastest_lap_time, fastest_lap_speed, status_id):
    """Create and return a new result"""

    result = Result(
        result_id = result_id,
        race_id = race_id,
        driver_id = driver_id,
        constructor_id= constructor_id,
        number = number,
        grid=grid,
        position=position,
        position_text = position_text,
        position_order = position_order,
        points = points,
        laps = laps,
        time = time,
        milliseconds = milliseconds,
        fastest_lap = fastest_lap,
        rank = rank,
        fastest_lap_time = fastest_lap_time,
        fastest_lap_speed = fastest_lap_speed,
        status_id = status_id
    )

    return result

def create_sprint_result(result_id,race_id,driver_id,constructor_id,number,grid,position,position_text,position_order,points,laps,time,milliseconds,fastest_lap,fastest_lap_time,status_id):
    """Create and return a new sprint result"""

    result = SprintResult(
        result_id = result_id,
        race_id = race_id,
        driver_id = driver_id,
        constructor_id= constructor_id,
        number = number,
        grid=grid,
        position=position,
        position_text = position_text,
        position_order = position_order,
        points = points,
        laps = laps,
        time = time,
        milliseconds = milliseconds,
        fastest_lap = fastest_lap,
        fastest_lap_time = fastest_lap_time,
        status_id = status_id
    )

    return result

def get_constructor_by_id(id):
    """Return a user by email."""

    return Constructor.query.filter(Constructor.constructor_id == id).first()

def get_driver_by_id(id):
    """Return a user by email."""

    return Driver.query.filter(Driver.driver_id == id).first()

def create_circuit(circuit_id,circuit_ref,name,location,country,lat,lng,alt,url):
    """Create and return a circuit."""

    circuit = Circuit(
        circuit_id = circuit_id,
        circuit_ref = circuit_ref,
        name = name,
        location = location,
        country = country,
        lat = lat,
        lng = lng,
        alt = alt,
        url = url
    )

    return circuit

if __name__ == "__main__":
    from server import app

    connect_to_db(app)