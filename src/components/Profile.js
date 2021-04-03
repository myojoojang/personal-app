import React, { Component } from 'react'



export class Profile extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">

          <div className="col-lg-4 box">
            <div className="border-bt semi-title">
              <div className="p-4">
                <div>Hi, I'm MJ.</div>
                I design & build digital products.
              </div>
            </div>

            <div >
            <div className="bold border-bt"><i className="fas fa-angle-double-right m-4"></i>ABOUT</div>
            <div className="p-4 capitalize">
              <div>Creative Front-End Developer experience in blending the art of design with skill of programming to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging. Passionate about aesthetics and UI design.</div>
            </div>
            </div>
           
          </div>
          <div className="col-lg-4 box mt-2 my-lg-0 p-0 pointer">
            
          </div>
          <div className="col-lg-4 box p-0 mt-2 my-lg-0">
           

          <div className="p-4">
            <div className="text-right p-2 bold black-box text-gray "><i className="fas fa-angle-double-right mx-4"></i>SKILLS</div>



            <div className="semi-title d-flex justify-content-around my-3">
              <i className="fab fa-html5"></i>
              <i className="fab fa-js-square"></i>
              <i className="fab fa-react"></i>
              <i className="fab fa-vuejs"></i>
              <i className="fab fa-node"></i>
              <i className="fas fa-pencil-ruler"></i>
           

            </div>
              <div>
                <i className="fas fa-square p-1"></i>
                   HTML, CSS/SASS
              </div>

                   
              <div>
                <i className="fas fa-square p-1"></i>
                JavaScript/ES6, Front End frameworks (React, Vue), Webpack, Babel
              </div>
                  
              <div>
              <i className="fas fa-square p-1"></i>

              Data visualization skills w/ Kibana, Chart.js and D3.js
              </div>

              <div>
              <i className="fas fa-square p-1"></i>

                Node.js, MySql, MongoDB, Elastic Search
              </div>

              <div>
                <i className="fas fa-square p-1"></i>
                  Google material Design, Responsive UI Design, Vuetify, Bootstrap
              </div>

              <div>
              <i className="fas fa-square p-1"></i>
                Adobe Photoshop, Illustlator, Indesign, XD
              </div>
              
            </div>

          </div>


        </div>
      
        <div className="border-bt">
          <div className="text-center my-2">

          <i className="fas fa-angle-double-down bold"></i>
          </div>
        </div>
      
        
      </div>

    )
  }
}

export default Profile
