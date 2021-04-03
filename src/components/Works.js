import React, { Component } from 'react';

export class Works extends Component {
  render() {
    return (
      <div>
        <div className="bold border-bt "><i className="fas fa-angle-double-right m-4"></i>Works</div>
        
        <div className="row my-4">
          <div className="col-lg-6 box">
            <a href="https://klper.com/" target="_blank" rel="noopener noreferrer">
              <img src="./img/klper.jpg" className="img-fluid p-1" alt="p-1" />
            </a>
          </div>

          <div className="col-lg-6 box">
            
          <div className="border-bt p-2">
            <div className="title black-box text-gray m-1">Klper</div>
            <div className="semi-title ">
           
                <a href="https://youtu.be/0J33xvSl2A0" target="_blank" rel="noopener noreferrer"><i class="black-box fab fa-youtube text-gray"></i></a>
               
                <a href="https://drive.google.com/file/d/1xhLB4ww6zjLjg0-uF9cxjrQRh7hWLx8-/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="black-box fas fa-file-powerpoint text-gray"></i></a>
            </div>
          </div>
            <div className="m-2">
              <div>HTML, CSS, Boots trap, JavaScript jQuery, D3.js</div>
              <div>Kakao Pay API</div>
              <div>SPRING, SPRING Security, JAVA, JSP</div>
              <div>MyBatis, MySQL, AWS</div>
            </div>
            
          </div>

          

        </div>

        <div className="row">
          <div className="col-lg-6 box">
          
            <a href="https://moviest.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <img src="./img/moviest.jpg" className="img-fluid p-1" alt="p-2" />
            </a>
          </div>

          <div className="col-lg-6 box">
            <div className="border-bt p-2">
              <div className="title black-box text-gray m-1">Moviest</div>
                <div className="semi-title d-flex">
                  <a href="https://moviest.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i class="text-gray black-box fab fa-chrome"></i></a>
                  <a href="https://github.com/myojoojang/moviest" target="_blank" rel="noopener noreferrer"><i class="black-box fab fa-github text-gray"></i></a>
                </div>
              </div>

            <div className="p-2">
              <div>Node js, Express js, Passport js</div>
              <div>Mongo DB, Mongoose, Mongo Atlas</div>
              <div>OMDB Movie API</div>
              <div>Bootstrap, CSS, EJS</div>
            </div>

          </div>

        </div >

      </div >

    )
  }
}

export default Works
