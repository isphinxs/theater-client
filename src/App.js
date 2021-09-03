import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import ShowsContainer from './containers/ShowsContainer';
import Footer from './components/Footer';

const selectIsLoggedIn = state => state.isLoggedIn;

function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} />
        <Banner />
        <Switch>
          <Route path="/shows">
            <ShowsContainer isLoggedIn={isLoggedIn} />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/signup">
            <SignupForm />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
