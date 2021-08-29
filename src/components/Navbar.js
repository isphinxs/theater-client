import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Login from './Login';

function Navbar(props) {
    const dispatch = useDispatch();

    const handleClick = event => {
        console.log("Logging out!")
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        dispatch({ type: 'user/logout' });
    }

    return(
        <div id="navbar">
            <ul>
                <li id="logo"><NavLink to="/">good<span className="bold">theater</span></NavLink></li>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/shows/saved" exact>My Shows</NavLink></li>
                <li><NavLink to="/shows" exact>Browse</NavLink></li>
                { !props.isLoggedIn && <Login /> }
                { props.isLoggedIn && <li><NavLink to="/" onClick={handleClick}>Log Out</NavLink></li>}
            </ul>
        </div>
    );
}

export default Navbar;