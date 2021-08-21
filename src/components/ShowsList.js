import React from 'react';

const ShowsList = props => {
    return(
        <div id="shows-list">
            <ul>
                {props.shows.map(show => <li key={show.id}>{show.title}</li>)}
            </ul>
        </div>
    )
}

export default ShowsList;