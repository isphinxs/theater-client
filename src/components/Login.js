import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

function Login() {
    const history = useHistory();

    const handleClick = event => {
        if (event.target.id === 'google') {
            // handle google login
        };
        if (event.target.id === 'auth') {
            history.push('/signup');
        }
    }

    return(
        <div id="login">
            <h3>Discover &amp; see more</h3>
            {/* <button id="google" onClick={handleClick}>Continue with Google</button> */}
            <button id="auth" onClick={handleClick}>Sign up with email</button>
            <h5>Already a member? <NavLink to="/login">Sign in</NavLink></h5>
        </div>
    )
}

export default Login;