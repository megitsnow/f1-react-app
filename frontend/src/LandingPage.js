import React from 'react'

function LandingPage(props) {
    return (
        <div className = "landing">
            <div className = "landingPageDiv">
                <h2 className = "landingPageText">Your Favorite Place for All Things Formula One</h2>
                <p className = "landingPageParagraph">Welcome to the F1 Fan App. Like your favorite drivers, explore historical constructor information, receive tailored news, and more! If you have an account, please <a className = "landingLinks" href = "/log-in">Log In</a> or if you are a new user <a className = "landingLinks" href = "/sign-up">Sign  Up</a></p>
                {/* <Link to={`/drivers/${id}`}><img src = {img} className = "driverImage"/></Link> */}
            </div>
        </div>
    );
}

export default LandingPage;