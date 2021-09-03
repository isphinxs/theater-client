import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveUser } from '../reducers/showsReducer';

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
 
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
        history.push("/shows/saved");
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
        </div>
    )
}

export default LoginForm;