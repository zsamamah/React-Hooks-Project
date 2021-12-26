import React, { useState } from "react";
import "./Service.css";

function Service (props) {
  const [state,setState] = useState([
            {
              icon: "fas fa-shopping-cart",
              service: "Online Booking ",
      
              description: "Add to your cart and you will receive it within 2 day",
            },
            {
              icon: "fas fa-dollar-sign",
              service: "Best Price Locally",
              description: "Enjoy the coupons and best prices in your store",
            },
            {
              icon: "fab fa-telegram",
              service: "Find your car in any place",
              description: "Find your car all around the world",
            },
            {
              icon: "far fa-envelope",
              service: "Contact US",
              description: "For complaints and suggstion contact us on email",
            },
          ])

          return (
            <div className="serviceContainer">
        {state.map((serv,index) => {
          return (
            <div className="serviceList" key={index}>
              <i className={serv.icon} id="icons"></i>
              <h2 className="service-title">{serv.service}</h2>
              <p className="service-paragraph">{serv.description}</p>
            </div>
          );
        })}
      </div>
    );
  }
export default Service;
 
  