import React, { Component } from 'react'



export class Profile extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">

          <div className="col-lg-6 box">
            <div className="border-bt semi-title">
              <div className="p-4">
                <div>Hi, I'm MJ.</div>
                I design & build digital products.
              </div>
            </div>

            <div >
              <div className="bold border-bt"><span className="mx-4"><i className="fas fa-angle-double-right bold"></i>ABOUT</span></div>
              <div className="p-4 capitalize">
                <div>Creative Front-End Developer experience in blending the art of design with skill of programming to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging. Passionate about aesthetics and UI design.</div>
              </div>
            </div>
          </div>



          <div className="col-lg-6 box p-0 mt-2 my-lg-0">
            <div className="p-4">
              <div className="text-right p-2 bold black-box text-gray "><i className="fas fa-angle-double-right bold"></i>SKILL-SET</div>



              <div className="semi-title d-flex justify-content-around my-3">

                <i className="fab fa-html5"></i>
                <i className="fab fa-css3-alt"></i>
                <i className="fab fa-js"></i>
                <i className="fab fa-react"></i>
                <i className="fab fa-vuejs"></i>
                <i className="fab fa-node"></i>
                <i className="fas fa-pencil-ruler"></i>


              </div>
              <div>
                HTML, CSS/SASS
              </div>


              <div>
                JavaScript/ES6, Front End frameworks (React, Vue), Webpack, Babel
              </div>

              <div>
                Data visualization skills w/ Kibana and Chart.js
                <div>
                  Node.js, MySql, Elastic Search
                </div>

                <div>
                  Responsive UI Design, Google material Design,Vuetify, Bootstrap
                </div>

                <div>
                  Adobe Photoshop, Illustlator, Indesign, XD
                </div>

              </div>

            </div>
            <div className="border-bt">
              <div className="text-center my-2">
                <a href="#scroll-to">
                  <i className="fas fa-angle-double-down bold"></i>
                </a>
              </div>
            </div>

          </div>


        </div>


      </div>

    )
  }
}

export default Profile
