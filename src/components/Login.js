import React from 'react';
import { NavLink } from 'react-router-dom';

function Login() {
    return(
        <div id="login">
            <h3>Discover &amp; see more</h3>
            <button id="google">Continue with Google</button>
            <button id="auth">Sign up with email</button>
            <h5>Already a member? <NavLink to="/login">Sign in</NavLink></h5>
        </div>
    )
}

export default Login;