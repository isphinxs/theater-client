import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Show from '../components/Show';
import ShowsList from '../components/ShowsList';

function ShowsContainer() {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/shows")
            .then(resp => resp.json())
            .then(data => {
                setShows(data);
            });
    }, []);

    return(
        <Router>
            <div id="shows-container">
                <Switch>
                    <Route path="/shows/:id" component={(routeInfo) => {
                        const routeId = parseInt(routeInfo.match.params.id);
                        const show = shows.find(s => s.id === routeId);
                        return show ? <Show show={show} /> : null;
                    }} />
                    <Route path="/shows" component={() => <ShowsList shows={shows} />} />
                </Switch>
                    
            </div>
        </Router>
    )
}

export default ShowsContainer;