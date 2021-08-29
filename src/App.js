import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import LoginForm from './components/LoginForm';
import ShowsContainer from './containers/ShowsContainer';
import Footer from './components/Footer';
import { checkForSavedShows } from './reducers/showsReducer';

const selectIsLoggedIn = state => state.isLoggedIn;

function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    // checks if user is logged in
    // if not, shows login ad
    // if (!localStorage.getItem("user")) {
    if (isLoggedIn) {
      console.log("Not logged in");
    // otherwise, pulls user data and shows logout button
    } else {
      console.log("Logged in");
      // dispatch(checkForSavedShows);
    };
  });

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} />
        <Banner />
        <Switch>
          <Route path="/shows">
            <ShowsContainer />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/">
            <h3>Home</h3>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
