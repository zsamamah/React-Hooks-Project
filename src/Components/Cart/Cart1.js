import React, { useState,useEffect } from "react";
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
  const [maxDay, setMaxDay] = useState(y.toISOString().split("T")[0]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);
  const [reserved, setReserved] = useState(JSON.parse(localStorage.getItem(`car${carId}`)));
  const [item, setItem] = useState(localStorage.getItem('selected'))

  useEffect(() => {
    let todayDate = new Date(today)
    let my_array = reserved
    let forDelete=[]
    for(let date in reserved){
      let lastDate = new Date(reserved[date])
      if(lastDate<todayDate){
        forDelete.push(reserved[date])
      }
    }
    for(let date in forDelete){
      let index = my_array.indexOf(forDelete[date])
      my_array.splice(index,1)
    }
    localStorage.setItem(`car${carId}`,JSON.stringify(my_array))
    setReserved(JSON.parse(localStorage.getItem(`car${carId}`)))
  }, [])

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

  const getDaysBetweenDates = (d0, d1) => {
    var msPerDay = 8.64e7;
    var x0 = new Date(d0);
    var x1 = new Date(d1);
    x0.setHours(12,0,0);
    x1.setHours(12,0,0);
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
      localStorage.setItem(`temp`,JSON.stringify(range_dates))
      alert('Done !')
      navigate('/checkout')
    }
    else {
      let reserved_dates = JSON.parse(localStorage.getItem(`car${carId}`));
      let found = false;
      let car_found = [];
      for (let i in reserved_dates) {
        if (range_dates.indexOf(reserved_dates[i]) !== -1) {
          found = true;
          car_found.push(reserved_dates[i]);
        }
      }
      if (!found) {
        localStorage.setItem(`temp`,JSON.stringify(range_dates))
        alert('Done !')
        navigate('/checkout')
      } else {
        alert(`car reserved in ${reserved_dates}`)
      }
    }
  };
  const emptyCart = ()=>{
    localStorage.removeItem('selected');
    setItem(null)
  }

  if(!item)
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
      <div><button type="button" id="removeCart" onClick={emptyCart}><i className="far fa-times-circle fa-2x red"></i></button></div>
        {/* <div id="cart_image"> */}
        <div id="cart_image">
          <img src={cars[carId-1].img} alt="Car" />
        </div>
        {/* </div> */}
        <div id="carDetailsMahdi">
          <p>
            {cars[carId-1].name} {cars[carId-1].model}
          </p>
          <p>{cars[carId-1].price}$ Per day</p>
        </div>
      <form id="booking_Form" onSubmit={inquire}>
          <div className="formGroup">
            <label htmlFor="from_date">From Beginning of : </label>
            <input
              id="from_date"
              type="date"
              min={today}
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
          <button type="submit" id="submitButtonMahdi"><span>Book Now !</span></button>
        </form>
      </div>
      <div>
          <h2>Reserved In : </h2>
        <div id="reservedIn">
        {reserved &&
          reserved.map((el, index) => {
            return <p key={index}>{el}</p>;
          })}
      </div>  
      </div>
      <div>
      </div>
    </div>
    </>
  );
}

export default Cart1;
