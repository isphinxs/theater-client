import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Login from './Login';

function Navbar(props) {
    const path = useLocation().pathname;
    const [display, setDisplay] = useState(
        path === "/" ? true : false
    )
    const dispatch = useDispatch();

    const handleClick = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        dispatch({ type: 'user/logout' });
    }

    useEffect(() => {
        setDisplay(path === "/" ? true : false)
    })

    return(
        <div id="navbar">
            <ul>
                <li id="logo"><NavLink to="/">good<span className="bold">theater</span></NavLink></li>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/shows/saved" exact>My Shows</NavLink></li>
                <li><NavLink to="/shows" exact>Browse</NavLink></li>
                { !props.isLoggedIn && display && <Login /> }
                { props.isLoggedIn && <li><NavLink to="/" onClick={handleClick}>Log Out</NavLink></li>}
            </ul>
        </div>
    );
}

export default Navbar;