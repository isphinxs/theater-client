import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SavedShowsList from './SavedShowsList';
import { removeShow } from '../reducers/showsReducer';

const selectSavedShows = state => state.savedShows;

function SavedShows() {
    const savedShows = useSelector(selectSavedShows);
    const dispatch = useDispatch();

    const handleClick = show => {
        // dispatch({ type: "shows/removeShow", payload: show})
        const removeShowThunk = removeShow(show, savedShows);
        dispatch(removeShowThunk);
    };

    return(
        <div id="saved-shows">
            <h3>My Shows</h3>
            <SavedShowsList shows={savedShows} handleClick={handleClick} />
        </div>
    )
}

export default SavedShows;