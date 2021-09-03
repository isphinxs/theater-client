import React from 'react';
import { NavLink } from 'react-router-dom';
import loading from '../loading.svg';

const SavedShowsList = props => {
    return(
        <div id="shows-list">
            <ul>
                {props.shows && props.shows.length > 0 ? props.shows.map(show => {
                    return (
                        <li key={show.id}>
                            <NavLink to={`/shows/${show.id}`}>{show.title}</NavLink>
                            <button onClick={() => props.handleClick(show)}>Remove</button>
                        </li>
                    )
                }) : <li><img className="illustration" src={loading} /></li>}
            </ul>
        </div>
    )
}

export default SavedShowsList;