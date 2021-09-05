import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Show from '../components/Show';
import ShowsList from '../components/ShowsList';
import SavedShows from './SavedShowsContainer';
import { saveShow, checkForSavedShows } from '../reducers/showsReducer';
import AlertDismissible from '../components/AlertDismissible';
import Error from '../components/Error';

const selectShows = state => state.shows;

function ShowsContainer(props) {
    const [success, setSuccess] = useState(false);
    const shows = useSelector(selectShows);
    const dispatch = useDispatch();

    const handleClick = show => {
        const saveShowThunk = saveShow(show);
        dispatch(saveShowThunk);
        setSuccess(true);
    }

    useEffect(() => {
        if (props.isLoggedIn) {
            dispatch(checkForSavedShows);
        }
    }, [dispatch, props.isLoggedIn])

    return(
        <div id="shows-container">
            { success && <AlertDismissible message={"Show successfully added"} variant="primary" /> }
            <Switch>
                <Route exact path="/shows" component={() => <ShowsList shows={shows} />} />
                <Route path="/shows/saved" component={() => <SavedShows isLoggedIn={props.isLoggedIn} />} />
                <Route path="/shows/:id" component={(routeInfo) => {
                    const routeId = parseInt(routeInfo.match.params.id);
                    const show = shows.find(s => s.id === routeId);
                    return show ? <Show show={show} handleClick={handleClick} isLoggedIn={props.isLoggedIn} /> : <Error />;
                }} />
            </Switch>
        </div>
    )
}

export default ShowsContainer;