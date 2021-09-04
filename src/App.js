import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import ShowsContainer from './containers/ShowsContainer';
import Footer from './components/Footer';
import AlertDismissible from './components/AlertDismissible';
import Error from './components/Error';

const selectIsLoggedIn = state => state.isLoggedIn;
const selectError = state => state.error;

function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const error = useSelector(selectError);

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} />
        <Banner />
        {/* <AlertDismissible message={error} /> */}
        <Switch>
          <Route path="/shows">
            <ShowsContainer isLoggedIn={isLoggedIn} />
          </Route>
          <Route path="/login">
            { isLoggedIn ? <Redirect to="/shows/saved" /> : <LoginForm /> }
          </Route>
          <Route path="/signup">
            <SignupForm />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
