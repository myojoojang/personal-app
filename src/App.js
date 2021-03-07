import React from 'react';

import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile'
import Works from './components/Works';
import Default from './components/Default';

import './App.css';

function App() {
  return (
    <React.Fragment>
       
        <div className="main">
          <Navbar />
            <Switch>
              <Route exact path='/' component={Profile} />
              <Route exact path='/works' component={Works} />
              <Route component={Default} />
            </Switch>
         
        </div>
        <div className="text-container">
          <div className="text-wrapper">
            <div className="text-1 text text-center">/</div>
            <div className="text-2 text text-center">/</div>
            <div className="text-3 text text-center">/</div>
            <div className="text-4 text text-center">/</div>
            <div className="text-5 text text-center">/</div>
            <div className="text-6 text text-center">MJ Jang Portfolio</div>
            <div className="text-7 text text-center">/</div>
            <div className="text-8 text text-center">/</div>
            <div className="text-9 text text-center">/</div>
            <div className="text-10 text text-center">/</div>
            <div className="text-11 text text-center">/</div>

          </div>

        </div>
     

     
    </React.Fragment>
  );
}

export default App;
