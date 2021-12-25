import React, { useState } from "react";
import "./Ourteam.css";
import zaid_pic from '../../Assets/team/im11.jpg';
import aya_pic from '../../Assets/team/im10.webp';
import tharaa_pic from '../../Assets/team/im1.jpg';
import mahdi_pic from '../../Assets/team/im16.jpg';
import shatnawi_pic from '../../Assets/team/im23.jpg';
function Team (props) {
const [state,setState] = useState([ { name: "Zaid Samamah", title: "Scrum Master", image: zaid_pic ,class:"rightC"},
    { name: "Tharaa Ibrahim", title: "Product Owner", image: tharaa_pic,class:"leftC" },
    { name: "Aya Mohammad", title: "Web Developer", image: aya_pic,class:"rightC"},
    { name: "Mahdi Suleiman", title: "Web Developer", image: mahdi_pic,class:"leftC" },
    { name: "Abdelrahman Shatnawi", title: "Web Developer", image: shatnawi_pic ,class:"leftC" }])
    
    return (
      <section class="client pt-3 pb-5">
          <div class="container">
        <div>
        <h2 className="home-heading">Our Team</h2>
      <div className='ourteam-container'>
        <div className="memberContainer">
          <div class="row text-center">
            <div class="col-12 text-center">
              <h1 class="display-3 fw-bold text-black home-heading ">Featured Products</h1>
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
                data-bs-ride="carousel">
                <div class="carousel-inner">
                {state.map((teamInfo,index) => {
                return (
                  <div class="carousel-item active">
                    <div class="row p-4">
                      <div class="t-card">
                        <img
                          src={shatnawi_pic} alt="laptop hp" style={{ width: '100%' }} />
                       
                      </div>
              
                      <div class="row">
                        <div class="col-sm-10 text-center ">
              <div id={index}  className={teamInfo.class}>
                <img width="100%" src={teamInfo.image} alt="Team Member" className='ourteam-img'/>
                <div className="colNum2"> 
                  <h4>{teamInfo.name}</h4>
                <p>{teamInfo.title}</p>
                <a
                  id="contactIcon"
                  href="https://www.facebook.com/"
                  ><i className="fab fa-facebook-f"></i></a>
                <a
                  id="contactIcon"
                  href="https://www.linkedin.com/"
                  ><i className="fab fa-linkedin-in"></i></a>
                <a
                  id="contactIcon"
                  href="https://www.twitter.com/"
                  ><i className="fab fa-twitter"></i></a>
              </div>
              </div>
          {/* </p> */}

                        </div>
                      </div>
                    </div>
                  </div>

                  
                  );
                })}
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
          
      </div>
      </div>
      </div>
      </section>
    );
  }
  export default Team;
  