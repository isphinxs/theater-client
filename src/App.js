import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import LoginForm from './components/LoginForm';
import ShowsContainer from './containers/ShowsContainer';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
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
