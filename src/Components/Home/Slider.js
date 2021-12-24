import React, { Component } from 'react';
import './slider.css';
import product1 from '../../Assets/Slider/product1.png';
import product2 from '../../Assets/Slider/product2.png';
import product3 from '../../Assets/Slider/product3.png';
import product4 from '../../Assets/Slider/product4.png';

export class Slider extends Component {
  render() {
    return (
      <section class="client pt-3 pb-5">
        <div class="container">
          <div class="row text-center">
            <div class="col-12 text-center">
              <h1 class="display-3 fw-bold text-black">Featured Products</h1>
              <hr
                class="bg-white mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "100px", height: "3px" }}
              />
              {/* <p class="p-text text-white">What we offer</p> */}
            </div>
          </div>
          <div class="row align-items-md-center text-white text-center">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <div
                id="carouselExampleCaptions"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="row p-4">
                      <div class="t-card">
                        <img
                          src={product1} alt="laptop hp" style={{ width: '100%' }} />
                        {/* <p class="lh-lg text-center">
                          HP 15.6"Laptop intel core i3 8GB Memory 256GB   SSD"

                        </p> */}
                      </div>
                      <div class="row">
                        <div class="col-sm-10 text-center ">
                          <h4 class="text-center text-black"><strong >HP Laptop </strong></h4>
                          <p class="testimonial_subtitle text-center">
                            <span class="text-warning">JOD450</span><br />

                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="carousel-item">
                    <div class="row p-4">
                      <div class="t-card">
                        <img
                          src={product3} alt="iPhone 13 pro" style={{ width: '100%' }} />
                        {/* <p class="lh-lg text-center">
                          HP 15.6"Laptop intel core i3 8GB Memory 256GB   SSD"

                        </p> */}
                      </div>
                      <div class="row">
                        <div class="col-sm-10 text-center ">
                          <h4 class="text-center text-black"><strong >iPhone 13 pro</strong></h4>
                          <p class="testimonial_subtitle text-center">
                            <span class="text-warning">JOD500</span><br />

                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="row p-4">
                      <div class="t-card">
                        <img
                          src={product4} alt="iPhone 11" style={{ width: '100%' }} />
                        {/* <p class="lh-lg text-center">
                          HP 15.6"Laptop intel core i3 8GB Memory 256GB   SSD"

                        </p> */}
                      </div>
                      <div class="row">
                        <div class="col-sm-10 text-center ">
                          <h4 class="text-center text-black"><strong >iPhone 11</strong></h4>
                          <p class="testimonial_subtitle text-center">
                            <span class="text-warning">JOD350</span><br />

                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="carousel-item">
                    <div class="row p-4">
                      <div class="t-card">
                        <img
                          src={product2} alt="laptop hp" style={{ width: '100%' }} />
                        {/* <p class="lh-lg">
                          HP pavilion Aero Laptop13
                        </p> */}
                      </div>
                      <div class="row">
                        <div class="col-sm-10 text-center">
                          <h4 class="text-center text-black"><strong>HP Laptop</strong></h4>
                          <p class="testimonial_subtitle text-center">
                            <span class="text-warning">JOD400</span><br />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="controls push-right">
                <a
                  class="left fa fa-chevron-left btn btn-outline-black ps-3 pe-3"
                  href="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >{null}</a>
                <a
                  class="right fa fa-chevron-right btn btn-outline-black ps-3 pe-3"
                  href="#carouselExampleCaptions"
                  data-bs-slide="next"
                >{null}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Slider
