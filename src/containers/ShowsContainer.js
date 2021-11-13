import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import ShowView from '../components/shows/ShowView';
import ShowsList from '../components/ShowsList';
import SavedShows from './SavedShowsContainer';
import EditShowForm from '../components/shows/EditShowForm';
import ReviewShowForm from '../components/shows/ReviewShowForm';
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
                <Route exact path="/shows" render={() => <ShowsList shows={shows} />} />
                <Route path="/shows/saved" render={() => <SavedShows isLoggedIn={props.isLoggedIn} />} />
                <Route exact path="/shows/:id" component={(routeInfo) => {
                    const routeId = parseInt(routeInfo.match.params.id);
                    const show = shows.find(s => s.id === routeId);
                    return show ? <ShowView show={show} handleClick={handleClick} isLoggedIn={props.isLoggedIn} /> : <Error />;
                }} />
                <Route path="/shows/:id/edit" component={(routeInfo) => {
                    const routeId = parseInt(routeInfo.match.params.id);
                    const show = shows.find(s => s.id === routeId);
                    return show ? <EditShowForm show={show} /> : <Error />;
                }} />
                <Route path="/shows/:id/review" component={(routeInfo) => {
                    { if (!props.isLoggedIn) <Redirect to="/login" /> }                        
                    const routeId = parseInt(routeInfo.match.params.id);
                    const show = shows.find(s => s.id === routeId);
                    return show ? <ReviewShowForm show={show} /> : <Error />
                }} />
            </Switch>
        </div>
    )
}

export default ShowsContainer;