import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Works from './components/Works'

import './App.css';

function App() {
  return (
    <React.Fragment>
       
        <div className="main">
          <Navbar />
          <Profile/>
          <Works />
         
        </div>
    
     

     
    </React.Fragment>
  );
}

export default App;
