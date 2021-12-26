import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cars from "../Shop/cars.json";
import Image from "../../Assets/cart/cart1.png";
import Hero from "../Hero/Hero";
import "./cart1.css";
import './Cart.css'
import { useNavigate } from "react-router-dom";

function Cart1() {
    let navigate = useNavigate();
  let x = new Date();
  let y = new Date();
  y.setDate(y.getDate() + 7);
  const [carId, setCarId] = useState(localStorage.getItem("selected"));
  const [today, setToday] = useState(x.toISOString().split("T")[0]);
  const [thisDay, setThisDay] = useState(x.toISOString().split("T")[0]);
  const [maxDay, setMaxDay] = useState(y.toISOString().split("T")[0]);
  const [from_time, setfrom_time] = useState(null);
  const [to_time, setTo_time] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);
  const [reserved, setReserved] = useState(
    JSON.parse(localStorage.getItem(`car${carId}`))
  );

  const handleDate = (e) => {
    switch (e.target.id) {
      case "from_date":
        setSelectedDate(e.target.value);
        break;
      case "to_date":
        setSelectedDate2(e.target.value);
        break;
      default:
        alert("check date");
    }
  };

  const handleTime = (e) => {
    switch (e.target.id) {
      case "from_time":
        setfrom_time(e.target.value);
        break;
      case "to_time":
        setTo_time(e.target.value);
        break;
      default:
        alert("check time");
    }
  };

  const getDaysBetweenDates = (d0, d1) => {
    var msPerDay = 8.64e7;
    // Copy dates so don't mess them up
    var x0 = new Date(d0);
    var x1 = new Date(d1);
    // Set to noon - avoid DST errors
    x0.setHours(12, 0, 0);
    x1.setHours(12, 0, 0);

    // Round to remove daylight saving errors
    return Math.round((x1 - x0) / msPerDay);
  };

  const inquire = (e) => {
    e.preventDefault();
    if(!localStorage.getItem('logged_in')){
      localStorage.setItem('redirectTo','/checkout')
      navigate('/account')
    }
    let from = new Date(selectedDate);
    let to = new Date(selectedDate2);
    let days = getDaysBetweenDates(from, to);
    let range_dates = [];
    for (let i = 0; i <= days; i++){
      range_dates.push(from.toISOString().split("T")[0]);
      from.setDate(from.getDate() + 1);
    }

    if (!localStorage.getItem(`car${carId}`)) {
    //   localStorage.setItem(`car${carId}`, JSON.stringify(range_dates));
      localStorage.setItem(`temp`,JSON.stringify(range_dates))
      alert('Done !')
      navigate('/checkout')
    } else {
      let reserved_dates = JSON.parse(localStorage.getItem(`car${carId}`));
      let found = false;
      let car_found = [];
      for (let i in reserved_dates) {
        if (range_dates.indexOf(reserved_dates[i]) !== -1) {
          found = true;
          car_found.push(reserved_dates[i]);
          // break;
        }
      }
      if (!found) {
        // reserved_dates.push(selectedDate);
        // localStorage.setItem(`car${carId}`, JSON.stringify(reserved_dates));
        localStorage.setItem(`temp`,JSON.stringify(range_dates))
        alert('Done !')
        navigate('/checkout')
      } else {
        alert(`car reserved in ${reserved_dates}`)
      }
    }
  };

  if(!localStorage.getItem('selected'))
  return(
    <>
    <Hero title="Cart Page" />
    <div className="empty-container">
      <div className="title-cart">Your cart is currently empty</div>
      <img src={Image} alt="empty cart" className="cart-img" />
      <Link to="/shop">
        <button className="table-button3">Back to shopping</button>
      </Link>
    </div>
  </>
  )
  else
  return (
    <>
      <Hero title="Cart Page" />
    <div className="cartCont">
      <div id="selected_car">
        <div>
          <img src={cars[carId-1].img} alt="Car" />
        </div>
        <div id="carDetailsMahdi">
          <p>
            {cars[carId-1].name} {cars[carId-1].model}
          </p>
          <p>{cars[carId-1].price}$ Per day</p>
        </div>
      {/* </div> */}
      <form id="booking_Form" onSubmit={inquire}>
        {/* <div > */}
          <div className="formGroup">
            <label htmlFor="from_date">From Beginning of : </label>
            <input
              id="from_date"
              type="date"
              min={x.toISOString().split("T")[0]}
              max={maxDay}
              onChange={handleDate}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="to_date">To the end of : </label>
            <input
              id="to_date"
              type="date"
              min={selectedDate}
              onChange={handleDate}
              required
            />
          </div>
        {/* </div> */}
        {/* <div> */}
          <button type="submit" id="submitButtonMahdi"><span>Book Now !</span></button>
        {/* </div> */}
        </form>
      </div>
        <div id="reservedIn">
          <h2>Reserved In : </h2>
        {reserved &&
          reserved.map((el, index) => {
            return <p key={index}>{el}</p>;
          })}
      </div>  
    </div>
    </>
  );
}

export default Cart1;
