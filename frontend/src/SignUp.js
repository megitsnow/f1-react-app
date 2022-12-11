import React from 'react';

function SignUpForm(props) {
    const {handleSignUpChange, handleSignUpSubmit, formData}= props
    
    return (
        <div>
        <form className="form" onSubmit={handleSignUpSubmit}>
            <input 
                type="text" 
                placeholder="First Name"
                name="fname"
                onChange={handleSignUpChange}
                value={formData.fname}
            />
            <input 
                type="text" 
                placeholder="Last Name"
                name="lname"
                onChange={handleSignUpChange}
                value={formData.lname}
            />
            <input 
                type="email" 
                placeholder="Email address"
                name="email"
                onChange={handleSignUpChange}
                value={formData.email}
            />
            <input 
                type="password" 
                placeholder="Password"
                name="password"
                onChange={handleSignUpChange}
                value={formData.password}
            />
            <input 
                type="password" 
                placeholder="Confirm password"
                name="passwordConfirm"
                onChange={handleSignUpChange}
                value={formData.passwordConfirm}
            />
            
            <button>
                Sign up
            </button>
        </form>
    </div>
    );
    }

export default SignUpForm;