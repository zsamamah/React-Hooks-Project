import React from "react";
import "./slider.css";
import product1 from "../../Assets/Slider/product1.png";
import product2 from "../../Assets/Slider/product2.png";
import product3 from "../../Assets/Slider/product3.png";
import product4 from "../../Assets/Slider/product4.png";
import cars from "../Shop/cars.json"

export function Slider() {
  return (
    <section class="client pt-3 pb-5">
      <div class="container">
        <div class="row text-center">
          <div class="col-12 text-center">
            <h1 class="display-3 fw-bold text-black home-heading ">
              Featured cars
            </h1>
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
                        src={cars[10].img}
                        alt={cars[10].name}
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div class="row">
                      <div class="col-sm-10 text-center ">
                        <h4 class="text-center text-black">
                          <strong>{cars[10].name}-{cars[10].model}-{cars[10].year} </strong>
                        </h4>
                        <p class="testimonial_subtitle text-center">
                          <span class="text-warning">JOD {cars[10].price}</span>
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>


                <div class="carousel-item">
                  <div class="row p-4">
                    <div class="t-card">
                      <img
                        src={cars[0].img}
                        alt={cars[0].name}
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div class="row">
                      <div class="col-sm-10 text-center">
                        <h4 class="text-center text-black">
                          <strong>{cars[0].name}-{cars[0].model}-{cars[0].year}</strong>
                        </h4>
                        <p class="testimonial_subtitle text-center">
                          <span class="text-warning">JOD {cars[0].price}</span>
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row p-4">
                    <div class="t-card">
                      <img
                        src={cars[1].img}
                        alt={cars[1].name}
                        style={{ width: "100%" }}
                      />

                    </div>
                    <div class="row">
                      <div class="col-sm-10 text-center ">
                        <h4 class="text-center text-black">
                          <strong>{cars[1].name}-{cars[1].model}-{cars[1].year}</strong>
                        </h4>
                        <p class="testimonial_subtitle text-center">
                          <span class="text-warning">JOD {cars[1].price}</span>
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item" >
                  <div class="row p-4">
                    <div class="t-card" >
                      <img
                        src={cars[9].img}
                        alt={cars[9].name}
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div class="row">
                      <div class="col-sm-10 text-center ">
                        <h4 class="text-center text-black">
                      <br/>
                          <strong>{cars[9].name}-{cars[9].model}-{cars[9].year}</strong>
                        </h4>
                        <p class="testimonial_subtitle text-center">
                          <span class="text-warning">JOD {cars[9].price}</span>
                          <br />
                        </p>
                        <br />
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
              >
                {null}
              </a>
              <a
                class="right fa fa-chevron-right btn btn-outline-black ps-3 pe-3"
                href="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                {null}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
