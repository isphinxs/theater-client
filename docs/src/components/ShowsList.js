import React from 'react';
import { NavLink } from 'react-router-dom';

const ShowsList = props => {
    return(
        <div id="shows-list">
            <ul>
                <h3>Shows</h3>
                {props.shows ? props.shows.map(show => <li key={show.id}><NavLink to={`/shows/${show.id}`} className="gr-link">{show.title}</NavLink></li>) : <li>Loading</li>}
            </ul>
        </div>
    )
}

export default ShowsList;