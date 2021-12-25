import React, { useState } from "react";
import "./Testimonials.css";
import Jack_Pic from '../../Assets/testimonials/im23.jpg';
import Ali_Pic from '../../Assets/testimonials/im21.jpg';
import Kristeen_Pic from '../../Assets/testimonials/im20.jpg';

function Testimonial (props) {
const [state,setState] = useState([
      {
        name: "Jack peter",
        text: "‟I am very happy with my first experience with Platinum. The product was amazing thanks i will order  „",
        image: Jack_Pic,
      },
      {
        name: "Ali naser",
        text: "‟This is my third order. Always on time. The product as seen and expected. Costumer service are prompt  „",
        image: Ali_Pic,
      },
      {
        name: "kristeen",
        text: "‟Ordered several times n always satisfied with my purchases. Variety of collections with reasonable prices„",
        image: Kristeen_Pic,
      },
    ])

    return (
      <div className='testimonials-container'>
        <h2 className="home-heading">Testimonials</h2>

        <div className="testimonials">
          {state.map((teamInfo,index) => {
            return (
              <div key={index} className="people">
                
                <h4>{teamInfo.name}</h4>
                <p className='testimonials-p'>{teamInfo.text}</p>
                  <br/> <pre>
                  </pre> <br />
                <div className="testimonialsLowerDiv">
                <img className="img" alt="Review" src={teamInfo.image} />
                <div className="star">
                <img src="https://img.icons8.com/external-kmg-design-flat-kmg-design/32/000000/external-star-weather-kmg-design-flat-kmg-design.png"/> 
                <img src="https://img.icons8.com/external-kmg-design-flat-kmg-design/32/000000/external-star-weather-kmg-design-flat-kmg-design.png"/>
                <img src="https://img.icons8.com/external-kmg-design-flat-kmg-design/32/000000/external-star-weather-kmg-design-flat-kmg-design.png"/>               </div>
              </div>
              </div>
            );
          })}
      </div>
      </div>
    );
  }
  
  export default Testimonial;
  
  