import React from 'react';
import { useSelector } from 'react-redux';
import ShowsList from './ShowsList';

const selectSavedShows = state => state.savedShows;

function SavedShows() {
    const savedShows = useSelector(selectSavedShows);

    return(
        <div id="saved-shows">
            <h3>My Shows</h3>
            <ShowsList shows={savedShows} />
        </div>
    )
}

export default SavedShows;