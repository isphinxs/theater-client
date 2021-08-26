import React, { Component } from 'react';

class LoginForm extends Component {
    state = {
        email: "",
        password: ""
    }

    handleEmailChange = event => {
        this.setState({ email: event.target.value });
    }

    handlePasswordChange = event => {
        this.setState({ password: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        // debugger;
    }

    render() {
        return(
            <div id="login-form">
                <h3>Sign in to Goodtheater</h3>
                <form onSubmit={this.handleSubmit}>
                    <label for="email">Email address</label>
                    <input 
                        type="text" 
                        id="email" 
                        onChange={event => this.handleEmailChange(event)}
                        value={this.state.email}
                    />
                    <br />
                    <label for="password">Password</label>
                    <input 
                        type="password" 
                        id="password"
                        onChange={event => this.handlePasswordChange(event)}
                        value={this.state.password}
                    />
                    <br />
                    <input type="submit" value="Sign in" />
                </form>
            </div>
        )
    }
}

export default LoginForm;