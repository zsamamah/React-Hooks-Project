import React, { Component } from "react";
import "./Service.css";

class Service extends Component {
    constructor(props) {
        super(props)
        this.state = [
            {
              icon: "fas fa-shopping-cart",
              service: "Easy shopping",
      
              description: "Add to your cart and you will receive it within 2 day",
            },
            {
              icon: "fas fa-dollar-sign",
              service: "Best Price Locally",
              description: "Enjoy the coupons and best prices in your store",
            },
            {
              icon: "fab fa-telegram",
              service: "Technical support",
              description: "1-year technical support for any laptop or mobile",
            },
            {
              icon: "far fa-envelope",
              service: "Contact US",
              description: "For complaints and suggstion contact us on email",
            },
          ];
    }
    
  render() {
    return (
      <div className="serviceContainer">
        {this.state.map((serv) => {
          return (
            <div className="serviceList">
              <i className={serv.icon} id="icons"></i>
              <h2 className="service-title">{serv.service}</h2>
              <p className="service-paragraph">{serv.description}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Service;