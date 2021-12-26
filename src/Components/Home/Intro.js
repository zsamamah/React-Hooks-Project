import React from "react";
import "./Intro.css";
import { Link } from "react-router-dom";

function Intro() {
  return (
    <section className="Home">
      <div className="overlay">
        <div className="main">
          <h1 class="intro-h">Exotic Car</h1>
          <p class="intro-p">
            TRY <span className="intro-text">"a104"</span> COUPON WITH OUR CAR
            RENTAL OFFERS JUST FOR YOU!
            <br />
            Save 10% on your next daily or monthly car rental with these deals
            and offers.
          </p>
          <Link to="/shop">
            <button className="intro-button">View Gallery</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Intro;
