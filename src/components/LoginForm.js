import React, { useState } from 'react';

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [jwt, setJwt] = useState("");
 
    const handleEmailChange = event => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        // debugger;
        fetch("http://localhost:3000/api/v1/auth", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'accepts': 'application/json',
            },
            body: JSON.stringify({ user: { email: email, password: password } })
        })
            .then(resp => resp.json())
            .then(data => {
                setJwt(data);
                // debugger;
                console.log(jwt);
            })
            .catch(error => {
                console.log(error);
            })
    }

    
    return(
        <div id="login-form">
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