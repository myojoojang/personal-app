import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <div className='Header'>
        <div className='row px-2 title'>
          <div className="col-12 col-md-6 text-left">MJ JANG.</div><div className='semi-title text-right d-none d-md-block col-md-6'>FrontEnd Developer</div>
        </div>
        <nav className="navbar navbar-expand-md p-0">
          <div className="collapse navbar-collapse d-flex">
            <ul className="navbar-nav px-2 px-md-0 w-100">
              <li className="nav-item">
                <Link to='/' className="nav-link">profile</Link>
              </li>
              <li className="nav-item">
                <Link to='/works' className="nav-link">works</Link>
              </li>

             
            </ul>
          </div>

        </nav>

      </div>
    )
  }
}

export default Navbar;
