import React, { useState, useEffect } from 'react';
import Show from '../components/Show';

function ShowsContainer() {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/shows")
            .then(resp => resp.json())
            .then(data => {
                setShows(data);
            });
    }, []);

    // debugger;
    return(
        <div id="shows-container">
            <h1>Shows Container</h1>
            {shows && shows.length > 0 ? shows.map(show => <Show show={show} />) : null}
        </div>
    )
}

export default ShowsContainer;