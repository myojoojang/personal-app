import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Profile extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row my-4">

          <div className="col-lg-4 box p-0">
            <div className="border-bt p-2 title">
              <div>Hi, I'm MJ.</div>
              I design & build digital products.
            </div>

            <div className="p-2 semi-title border-bt ">
              Creative Front-End Developer experience in blending the art of design
with skill of programming to deliver an immersive and engaging user
experience through efficient website development, proactive feature
optimization, and relentless debugging. Passionate about aesthetics and
UI design.
            </div>
            <div className="p-2">
              <div className='mt-2'><span className="text-gray"><i className="black-box fas fa-file"></i></span>CV <a href="https://drive.google.com/file/d/11eDlftSM6Etd9JIQZCikUVJ0DwvRMmwl/view?usp=sharing" target="_blank" rel="noopener noreferrer"> ENG</a></div>
              <div className='mt-2'><span className="text-gray"><i className="black-box fas fa-envelope"></i></span> mjjang0127@gmail.com</div>
              <div className='mt-2'><span className="text-gray"><i className="black-box fab fa-github"></i></span> <a href="https://github.com/myojoojang" target="_blank" rel="noopener noreferrer">https://github.com/myojoojang</a> </div>
            
            </div>

          </div>
          <div className="col-lg-4 box mt-2 my-lg-0 p-0">
            <Link to="/works">

              <img src="./img/main.jpg" alt="main" className="img-fluid p-2" />

              <div className="semi-title black-box text-gray m-2 p-0">Check my work</div>
            </Link>
          </div>
          <div className="col-lg-4 box p-0 mt-2 my-lg-0">
            <div className="semi-title border-bt p-2">ABOUT</div>
            <div className="border-bt p-4">
              <div className="title text-gray d-flex justify-content-around py-2 mb-2"><i className="black-box fas fa-arrows-alt"></i> <i className="black-box fas fa-comments"></i> <i className="black-box fas fa-crop-alt"></i></div>
              <div><i className="fas fa-square-full"></i>Strong knowledge of responsive and adaptive display techniques. </div>
              <div><i className="fas fa-square-full"></i>Interpersonal savvy and communication skills.</div>
              <div><i className="fas fa-square-full"></i>Strong preference for easy to use, intuitive UX/UI.</div>
              <div><i className="fas fa-square-full"></i>Design skill with graphic software / Adobe Creative Suite.</div>

            </div>

            <div className="p-4">
              <div className="black-box text-gray p-2 my-2">
                HTML, CSS/SASS, Bootstrap, JavaScript/ES6, Webpack, Babel, Front End frameworks (React, Vue)
                  </div>
                  <div className="black-box text-gray p-2 my-2">
                  Google material Design, Responsive UI Design
                  </div>
                  <div className="black-box text-gray p-2 my-2">
                  Data visualization skills using tools like Elastic Search, Kibana, Chart.js and D3.js
                  </div>
              <div className="black-box text-gray p-2 my-2">
                Node.js, MySql, MongoDB, Elastic Search
                  </div>
              <div className="black-box text-gray p-2 my-2">
              Adobe Photoshop, Illustlator, Indesign, XD
                 </div>
              <div className="text-right p-2 black-box text-gray semi-title">SKILLS</div>
            </div>

          </div>


        </div>

      </div>

    )
  }
}

export default Profile
