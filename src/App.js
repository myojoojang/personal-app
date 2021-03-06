import React from 'react';

import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile'
import Works from './components/Works';
import Contact from './components/Contact';
import Default from './components/Default';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Profile} />
        <Route exact path='/works' component={Works} />
        <Route exact path='/contact' component={Contact} />
        <Route component={Default} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
