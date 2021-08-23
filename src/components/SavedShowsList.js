import React from 'react';
import { NavLink } from 'react-router-dom';

const SavedShowsList = props => {
    return(
        <div id="shows-list">
            <ul>
                {props.shows.length > 0 ? props.shows.map(show => {
                    return (
                        <li key={show.id}>
                            <NavLink to={`/shows/${show.id}`}>{show.title}</NavLink>
                            <button onClick={() => props.handleClick(show)}>Remove</button>
                        </li>
                    )
                }) : <li>Loading</li>}
            </ul>
        </div>
    )
}

export default SavedShowsList;