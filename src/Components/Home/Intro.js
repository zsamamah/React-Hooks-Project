import React from "react";
import { Component } from "react";
import "./Intro.css";
import { Link } from "react-router-dom";

class Intro extends Component {
  render() {
    return (
      <section className="Home">
        <div className="main">
          <h1 class="intro-h">Platinum store</h1>
          <p class="intro-p">
            <span className="intro-text">Platinum </span>is a store of computers, mobile devices and accessories in Jordan.<br/> Our advantages strong execlusive offers on the latest products and shipping your purchases.
          </p>
          <Link to="/shop">
            <button className="intro-button">Shop Now</button>
          </Link>
        </div>
      </section>
    );
  }
}
export default Intro;
