import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Login from './Login';

// const selectUser = state => state.user;

function Navbar(props) {
    // const user = useSelector(selectUser);
    const dispatch = useDispatch();

    // let user = localStorage.getItem("user");

    const handleClick = event => {
        // event.preventDefault();
        // debugger;
        console.log("Logging out!")
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        dispatch({ type: 'user/logout' });
    }

    debugger;
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