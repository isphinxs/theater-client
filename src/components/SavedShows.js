import React from 'react';
import { useSelector } from 'react-redux';
import SavedShowsList from './SavedShowsList';

const selectSavedShows = state => state.savedShows;

function SavedShows() {
    const savedShows = useSelector(selectSavedShows);

    const handleClick = () => {
        console.log("Clicked")
    };

    return(
        <div id="saved-shows">
            <h3>My Shows</h3>
            <SavedShowsList shows={savedShows} handleClick={handleClick} />
        </div>
    )
}

export default SavedShows;