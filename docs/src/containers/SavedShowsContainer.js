import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SavedShowsList from '../components/SavedShowsList';
import { removeShow } from '../reducers/showsReducer';

const selectSavedShows = state => state.savedShows;

function SavedShowsContainer() {
    const savedShows = useSelector(selectSavedShows);
    const dispatch = useDispatch();

    const handleClick = show => {
        const removeShowThunk = removeShow(show);
        dispatch(removeShowThunk);
    };

    return(
        <div id="saved-shows">
            <SavedShowsList shows={savedShows} handleClick={handleClick} />
        </div>
    )
}

export default SavedShowsContainer;