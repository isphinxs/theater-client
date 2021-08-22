import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return(
        <div id="navbar">
            <ul>
                <li id="logo"><NavLink to="/">good<span className="bold">theater</span></NavLink></li>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/shows/saved" exact>My Shows</NavLink></li>
                <li><NavLink to="/shows" exact>Browse</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar;