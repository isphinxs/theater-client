import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './Login';

const selectUser = state => state.user;

function Navbar() {
    const user = useSelector(selectUser);
    return(
        <div id="navbar">
            <ul>
                <li id="logo"><NavLink to="/">good<span className="bold">theater</span></NavLink></li>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/shows/saved" exact>My Shows</NavLink></li>
                <li><NavLink to="/shows" exact>Browse</NavLink></li>
                { !user && <Login /> }
            </ul>
        </div>
    );
}

export default Navbar;