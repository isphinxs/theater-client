import React from 'react';
import { NavLink } from 'react-router-dom';

const ShowsList = props => {
    return(
        <div id="shows-list">
            <ul>
                {props.shows ? props.shows.map(show => <li key={show.id}><NavLink to={`shows/${show.id}`}>{show.title}</NavLink></li>) : <li>Loading</li>}
            </ul>
        </div>
    )
}

export default ShowsList;