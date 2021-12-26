import React from "react";
import "./slider.css";
import cars from "../Shop/cars.json"

export function Slider() {
  return (
    <section className="client pt-3 pb-5">
      <div className="container">
        <div className="row text-center">
          <div className="col-12 text-center">
            <h1 className="display-3 fw-bold text-black home-heading ">
              Featured cars
            </h1>
            <hr
              className="bg-white mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "100px", height: "3px" }}
            />
            {/* <p className="p-text text-white">What we offer</p> */}
          </div>
        </div>
        <div className="row align-items-md-center text-white text-center">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row p-4">
                    <div className="t-card">
                      <img
                        src={cars[10].img}
                        alt={cars[10].name}
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="row">
                      <div className="col-sm-10 text-center ">
                        <h4 className="text-center text-black">
                          <strong>{cars[10].name}-{cars[10].model}-{cars[10].year} </strong>
                        </h4>
                        <p className="testimonial_subtitle text-center">
                          <span className="text-warning">JOD {cars[10].price}</span>
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="carousel-item">
                  <div className="row p-4">
                    <div className="t-card">
                      <img
                        src={cars[0].img}
                        alt={cars[0].name}
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="row">
                      <div className="col-sm-10 text-center">
                        <h4 className="text-center text-black">
                          <strong>{cars[0].name}-{cars[0].model}-{cars[0].year}</strong>
                        </h4>
                        <p className="testimonial_subtitle text-center">
                          <span className="text-warning">JOD {cars[0].price}</span>
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row p-4">
                    <div className="t-card">
                      <img
                        src={cars[1].img}
                        alt={cars[1].name}
                        style={{ width: "100%" }}
                      />

                    </div>
                    <div className="row">
                      <div className="col-sm-10 text-center ">
                        <h4 className="text-center text-black">
                          <strong>{cars[1].name}-{cars[1].model}-{cars[1].year}</strong>
                        </h4>
                        <p className="testimonial_subtitle text-center">
                          <span className="text-warning">JOD {cars[1].price}</span>
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" >
                  <div className="row p-4">
                    <div className="t-card" >
                      <img
                        src={cars[9].img}
                        alt={cars[9].name}
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="row">
                      <div className="col-sm-10 text-center ">
                        <h4 className="text-center text-black">
                      <br/>
                          <strong>{cars[9].name}-{cars[9].model}-{cars[9].year}</strong>
                        </h4>
                        <p className="testimonial_subtitle text-center">
                          <span className="text-warning">JOD {cars[9].price}</span>
                          <br />
                        </p>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="controls push-right">
              <a
                className="left fa fa-chevron-left btn btn-outline-black ps-3 pe-3"
                href="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                {null}
              </a>
              <a
                className="right fa fa-chevron-right btn btn-outline-black ps-3 pe-3"
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
