import React, { useState } from "react";
import "./Testimonials.css";
import Jack_Pic from "../../Assets/testimonials/im23.jpg";
import Ali_Pic from "../../Assets/testimonials/im21.jpg";
import Kristeen_Pic from "../../Assets/testimonials/im20.jpg";

function Testimonial(props) {
  const [state, setState] = useState([
    {
      name: "Jack peter",
      text: "‟I am very happy with my first experience with Exotic. Thay have an amazing cars. „",
      image: Jack_Pic,
    },
    {
      name: "Ali naser",
      text: "‟This is my third time of using Exotic cars. Always on time. The car as seen and expected order. „",
      image: Ali_Pic,
    },
    {
      name: "kristeen",
      text: "‟Rented several times and always satisfied. Variety of collections with reasonable prices„",
      image: Kristeen_Pic,
    },
  ]);

  return (
    <div className="testimonials-container">
      <h2 className="home-heading">Testimonials</h2>
      <br /> <pre></pre> <pre></pre>
      <div className="testimonials">
        {state.map((teamInfo, index) => {
          return (
            <div className="people" key={index}>
              <img className="img" alt="Review" src={teamInfo.image} />
              <h4>{teamInfo.name}</h4>
              <p className="testimonials-p">{teamInfo.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonial;
