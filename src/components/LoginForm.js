import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { saveUser } from '../reducers/showsReducer';

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
 
    const handleEmailChange = event => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        const saveUserThunk = saveUser(email, password);
        dispatch(saveUserThunk);
    }

    return(
        <div className="user-form">
            <h3>Sign in to Goodtheater</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email address</label>
                <input 
                    type="text" 
                    id="email" 
                    onChange={event => handleEmailChange(event)}
                    value={email}
                />
                <br />
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password"
                    onChange={event => handlePasswordChange(event)}
                    value={password}
                />
                <br />
                <input type="submit" value="Sign in" />
            </form>
            <br />
            <h5>Or, <NavLink to="/signup" className="gr-link">sign up here</NavLink></h5>
        </div>
    )
}

export default LoginForm;