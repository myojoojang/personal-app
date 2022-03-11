import React, { Component } from 'react';

export class Works extends Component {
  render() {
    return (
      <div>
        <section id="scroll-to">
          <div className="bold border-bt"><span className="mx-2"> <i className="fas fa-angle-right bold"></i>Works</span></div>
        </section>


        {/*  */}
        <div className="row my-4">
          <div className="col-lg-6 box">
            <a href="https://cointrackerbymj.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img src="./img/coin.png" className="img-fluid p-1" alt="p-1" />
            </a>
          </div>

          <div className="col-lg-6 box">
            <div className="border-bt">
              <div className="bold black-box text-gray m-1">Coin Tracker</div>
              <div className="bold d-flex">
                <a href="https://cointrackerbymj.netlify.app/" target="_blank" rel="noopener noreferrer"><i className="fas fa-window-maximize"></i></a>
                <a href="https://github.com/myojoojang/dashboard" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
              </div>
            </div>

            <div className="p-2">
              <div>VUE</div>
              <div>Ag-grid</div>
              <div>Chart.js</div>
              <div>Axios</div>
              <div>The CoinGecko data market API</div>
            </div>
          </div>
        </div>

        <div className="row my-4">
          <div className="col-lg-6 box">
            <a href="https://metropolitan-exp.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img src="./img/mtplt.png" className="img-fluid p-1" alt="p-1" />
            </a>
          </div>

          <div className="col-lg-6 box">
            <div className="border-bt">
              <div className="bold black-box text-gray m-1">The Metropolitan Museum Explorer</div>
              <div className="bold d-flex">
                <a href="https://metropolitan-exp.netlify.app/" target="_blank" rel="noopener noreferrer"><i className="fas fa-window-maximize"></i></a>
                <a href="https://github.com/myojoojang/mtpl-museum" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
              </div>
            </div>

            <div className="p-2 ">
              <div>VUE</div>
              <div>Vuetify</div>
              <div>Axios</div>
              <div>The Metropolitan Museum of Art Collection API</div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="row my-4">
          <div className="col-lg-6 box">

            <a href="https://neoness.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img src="./img/neoness.png" className="img-fluid p-1" alt="p-1" />
            </a>
          </div>

          <div className="col-lg-6 box">
            <div className="border-bt">
              <div className="bold black-box text-gray m-1">The NEONESS SHOP</div>
              <div className="bold d-flex">
                <a href="https://neoness.netlify.app/" target="_blank" rel="noopener noreferrer"><i className="fas fa-window-maximize"></i></a>
                <a href="https://github.com/myojoojang/ecommerce_shop" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
              </div>
            </div>

            <div className="p-2 ">
              <div>React</div>
              <div>React Hook</div>
              <div>Commerce.js, Stripe.js</div>
              <div>Mterial-ui, Styled-components.js</div>
            </div>

          </div>

        </div>

        {/*  */}
        <div className="row my-4">
          <div className="col-lg-6 box">
            <a href="https://nasaapiexp.netlify.app/#/" target="_blank" rel="noopener noreferrer">
              <img src="./img/nasaapi.png" className="img-fluid p-1" alt="p-2" />
            </a>
          </div>
          <div className="col-lg-6 box">
            <div className="border-bt">
              <div className="bold black-box text-gray m-1">NASA API EXPERIMENT</div>
              <div className="bold d-flex">
                <a href="https://nasaapiexp.netlify.app/#/" target="_blank" rel="noopener noreferrer"><i className="fas fa-window-maximize"></i></a>
                <a href="https://github.com/myojoojang/nasaapi" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
              </div>
            </div>

            <div className="p-2">
              <div>VUE</div>
              <div>Vuetify</div>
              <div>Axios</div>
              <div>NASA OPEN API</div>
              <div>Chart.js</div>
            </div>
          </div>
        </div>
        {/*  */}

        <div className="row  my-4">
          <div className="col-lg-6 box">
            <a href="https://moviest.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <img src="./img/moviest.jpg" className="img-fluid p-1" alt="p-2" />
            </a>
          </div>

          <div className="col-lg-6 box">
            <div className="border-bt">
              <div className="bold black-box text-gray m-1">Moviest</div>
              <div className="bold d-flex">
                <a href="https://moviest.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i className="fas fa-window-maximize"></i></a>
                <a href="https://github.com/myojoojang/moviest" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
              </div>
            </div>

            <div className="p-2">
              <div>Node js, Express js, Passport js</div>
              <div>Mongo DB, Mongoose, Mongo Atlas</div>
              <div>OMDB Movie API</div>
              <div>Bootstrap, CSS, EJS</div>
            </div>
          </div>
        </div>
        </div>
      </div>

    )
  }
}

export default Works
