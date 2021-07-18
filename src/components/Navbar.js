import React, { Component } from 'react';

export class Navbar extends Component {
  render() {
    return (
      <div className='Header'>
        <div className='row mx-2 title'>
          <div className="col-12 col-md-6 text-left">MJ JANG. <span className="bold">Frontend Dev</span></div>


          <div className='semi-title d-flex text-right d-md-block col-md-6 my-auto'>


            <span>
              <a href="https://github.com/myojoojang" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
            </span>

            <span>
              <a href="https://www.linkedin.com/in/myojoo-jang-0127/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            </span>


          </div>
        </div>

      </div>
    )
  }
}

export default Navbar;
