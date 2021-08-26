import React, { Component } from 'react';

class LoginForm extends Component {
    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        return(
            <div id="login-form">
                <h3>Sign in to Goodtheater</h3>
                <form onSubmit={this.handleSubmit}>
                    <label for="email">Email address</label>
                    <input type="text" id="email" />
                    <br />
                    <label for="password">Password</label>
                    <input type="password" />
                    <br />
                    <input type="submit" value="Sign in" />
                </form>
            </div>
        )
    }
}

export default LoginForm;