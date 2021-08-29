import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createUser } from '../reducers/showsReducer';

function SignupForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
 
    const handleNameChange = event => {
        setName(event.target.value);
    }

    const handleEmailChange = event => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        const createUserThunk = createUser(name, email, password);
        dispatch(createUserThunk);
        history.push("/");
    }

    return(
        <div className="user-form">
            <h3>Sign up for Goodtheater</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    onChange={event => handleNameChange(event)}
                    value={name}
                />
                <br />
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

export default SignupForm;