import React from 'react';
import './Style.css';

function SignUpForm(props) {
    const {handleSignUpChange, handleSignUpSubmit, formData}= props
    
    return (
        <div className = "sign-up">
        <div className = "form">
        <form onSubmit={handleSignUpSubmit}>
            <div>
                <input className = "input-fields"
                    type="text" 
                    placeholder="First Name"
                    name="fname"
                    onChange={handleSignUpChange}
                    value={formData.fname}
                />
            </div>
            <div>
                <input className = "input-fields"
                    type="text" 
                    placeholder="Last Name"
                    name="lname"
                    onChange={handleSignUpChange}
                    value={formData.lname}
                />
            </div>
            <div>
                <input className = "input-fields"
                    type="email" 
                    placeholder="Email address"
                    name="email"
                    onChange={handleSignUpChange}
                    value={formData.email}
                />
            </div>
            <div>
                <input className = "input-fields"
                    type="password" 
                    placeholder="Password"
                    name="password"
                    onChange={handleSignUpChange}
                    value={formData.password}
                />
            </div>
            <div>
                <input className = "input-fields"
                    type="password" 
                    placeholder="Confirm password"
                    name="passwordConfirm"
                    onChange={handleSignUpChange}
                    value={formData.passwordConfirm}
                />
            </div>
            <div>
                <button className = "sign-up-button">
                    Sign up
                </button>
            </div>
        </form>
        </div>
    </div>
    );
    }

export default SignUpForm;