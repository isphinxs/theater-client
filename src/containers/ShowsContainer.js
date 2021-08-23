import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Show from '../components/Show';
import ShowsList from '../components/ShowsList';
import SavedShows from '../components/SavedShows';
import { saveShow } from '../reducers/showsReducer';

const selectShows = state => state.shows;

function ShowsContainer() {
    const shows = useSelector(selectShows);
    const dispatch = useDispatch();

    const handleClick = show => {
        const saveShowThunk = saveShow(show);
        dispatch(saveShowThunk);
    }

    return(
        <div id="shows-container">
            <Switch>
                <Route exact path="/shows" component={() => <ShowsList shows={shows} />} />
                <Route path="/shows/saved" component={() => <SavedShows />} />
                <Route path="/shows/:id" component={(routeInfo) => {
                    const routeId = parseInt(routeInfo.match.params.id);
                    const show = shows.find(s => s.id === routeId);
                    return show ? <Show show={show} handleClick={handleClick} /> : null;
                }} />
            </Switch>
        </div>
    )
}

export default ShowsContainer;