import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./checkout.css";
import Hero from "../Hero/Hero";
import Image from "../../Assets/cart/cart.png";
import cars from "../Shop/cars.json";

export default function Checkout() {
  let navigate = useNavigate();
  const loggedIn = localStorage.getItem("logged_in")
    ? JSON.parse(localStorage.getItem("logged_in"))
    : { fname: "", lname: "", email: "", phone: "" };
  const mycar = cars[localStorage.getItem("selected") - 1];

  useEffect(() => {
    if (!localStorage.getItem("logged_in")) {
      navigate("/account");
    }
  }, []);

  const [userData, setUserData] = useState({
    fname: loggedIn.fname,
    lname: loggedIn.lname,
    email: loggedIn.email,
    phone: loggedIn.phone,
    pickup_time: null,
    until_time: null,
    cashMsg1: "flex",
    cashMsg2: "none",
    redirect: null,
  });

  const [coupon, setCoupon] = useState("a104");
  const [couponHandler, setCouponHandler] = useState(null);
  const [discount, setDiscount] = useState(0);

  let subtotal;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserData((prev) => {
      return { ...prev, [id]: value };
    });
  };

  const handlePayment = (e) => {
    const { value } = e.target;
    if (value === "cash") {
      setUserData((prev) => {
        return { ...prev, cashMsg1: "flex", cashMsg2: "none" };
      });
    } else {
      setUserData((prev) => {
        return { ...prev, cashMsg1: "none", cashMsg2: "flex" };
      });
    }
  };

  const totalPrice = () => {
    let days = JSON.parse(localStorage.getItem("temp"));
    subtotal = mycar.price * days.length;
    return subtotal;
  };

  const finalTotal = () => {
    return subtotal - discount;
  };

  const handleSubmit = () => {
    let duration = JSON.parse(localStorage.getItem("temp"));
    const checkoutInfo = {
      fname: userData.fname,
      lname: userData.lname,
      payment: userData.cashMsg1 === "flex" ? "Cash" : "Credit Card",
      status: "Pending",
      phone: userData.phone,
      email: userData.email,
      carID: localStorage.getItem("selected"),
      pickup_Duration: `${duration[0]} : ${duration[duration.length - 1]}`,
      pickup_time: userData.pickup_time,
      until_time: userData.until_time,
    };

    let ordersArr = JSON.parse(localStorage.getItem("submittedOrders"));
    if (ordersArr) {
      ordersArr.push(checkoutInfo);
      localStorage.setItem("submittedOrders", JSON.stringify(ordersArr));
    } else {
      localStorage.setItem("submittedOrders", JSON.stringify([checkoutInfo]));
    }

    let dates = JSON.parse(localStorage.getItem(`car${mycar.id}`));
    let new_dates = JSON.parse(localStorage.getItem("temp"));
    if (!dates) {
      localStorage.setItem(`car${mycar.id}`, JSON.stringify(new_dates));
    } else {
      let new_array = [...dates, ...new_dates];
      localStorage.setItem(`car${mycar.id}`, JSON.stringify(new_array));
    }

    // if(!localStorage.getItem('rentedCars')){
    //     let arr=[];
    //     arr.push(localStorage.getItem('selected'))
    //     localStorage.setItem('rentedCars',JSON.stringify(arr))
    // }
    // else{
    //     let arr = JSON.parse(localStorage.getItem('rentedCars'))
    //     arr.push(localStorage.getItem('selected'))
    //     localStorage.setItem('rentedCars',JSON.stringify(arr))
    // }

    localStorage.removeItem("selected");
    localStorage.removeItem("temp");

    setUserData((prev) => {
      return { ...prev, redirect: true };
    });
  };

  const couponInputHandler = (e) => {
    setCouponHandler(e.target.value);
  };

  const couponDiscount = async () => {
    if (couponHandler === coupon) {
      setDiscount(totalPrice() * 0.1);
      document.getElementById("error_coupon").innerText = "";
    } else {
      document.getElementById(
        "error_coupon"
      ).innerHTML = `<i class="fas fa-times"></i> Wrong Coupon Code`;
    }
  };

  return (
    <>
      {userData.redirect ? (
        <>
          <Hero title="Checkout Page" />
          <div className="empty-container">
            <div>Your car is rented successfully !</div>
            <Link to="/shop">
              <button className="table-button3">Continue Shopping</button>
            </Link>
          </div>
        </>
      ) : userData.length !== 0 ? (
        <>
          <Hero title="Checkout Page" />
          <div className="checkout-container">
            <div className="checkout-summary">
              <table>
                <tbody>
                  <tr>
                    <td className="table-grey">Rent Price</td>
                    <td>JOD {totalPrice()}</td>
                  </tr>
                  <tr>
                    <td>Discount</td>
                    <td className="discount">JOD {discount}</td>
                  </tr>
                  <tr>
                    <td className="table-grey">After Discount</td>
                    <td>JOD {finalTotal()}</td>
                  </tr>
                </tbody>
              </table>
              <input
                type="text"
                className="table-input"
                placeholder="Coupon Code"
                onChange={(e) => couponInputHandler(e)}
              />
              <button
                className="table-btn"
                type="button"
                onClick={couponDiscount}
              >
                Apply Coupon
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="checkout-left">
                <h3>Billing details</h3>
                <div className="left-container">
                  <label>
                    <p>First Name:</p>
                    <input
                      placeholder="First Name"
                      type="text"
                      id="fname"
                      value={userData.fname}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    <p>Last Name:</p>
                    <input
                      placeholder="Last Name"
                      type="text"
                      id="lname"
                      onChange={handleChange}
                      value={userData.lname}
                    />
                  </label>
                  <label>
                    <p>Phone</p>
                    <input
                      placeholder="Phone"
                      onChange={handleChange}
                      required
                      id="phone"
                      type="tel"
                      value={userData.phone}
                    />
                  </label>
                  <label>
                    <p>Email address</p>
                    <input
                      placeholder="Email address"
                      onChange={handleChange}
                      required
                      type="email"
                      id="email"
                      value={userData.email}
                    />
                  </label>
                  <label>
                    <p>Pickup Time</p>
                    <input
                      type="time"
                      id="pickup_time"
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label>
                    <p>Recieving Time</p>
                    <input
                      type="time"
                      id="until_time"
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <p id="error_coupon"></p>
                <div className="checkout-payment">
                  <p>Pay With</p>
                  <div className="radios">
                    <input
                      onChange={handlePayment}
                      type="radio"
                      name="method"
                      id="cash"
                      value="cash"
                      defaultChecked
                    />
                    <label htmlFor="cash">Cash on delivery</label>
                  </div>
                  <div className="radios">
                    <input
                      onChange={handlePayment}
                      type="radio"
                      name="method"
                      id="credit-cards"
                      value="credit-cards"
                    />
                    <label htmlFor="credit-cards">Credit Card</label>
                  </div>
                  <div className="payment-msg-container1">
                    <div
                      className="payment-msg"
                      id="two"
                      style={{ display: userData.cashMsg2 }}
                    >
                      <label>
                        <p>Card Number</p>
                        <input
                          type="number"
                          placeholder="xxxx-xxxx-xxxx-xxxx"
                        ></input>
                      </label>
                      <label>
                        <p>Name on card</p>
                        <input type="text" placeholder="First Last"></input>
                      </label>
                      <label>
                        <p>Expiry Date</p>
                        <input type="month" placeholder="Month Year"></input>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="orderBtn">
                  <button type="submit" id="placeOrder">
                    Checkout
                  </button>
                </div>
              </div>
            </form>
          </div>
        </>
      ) : (
        <>
          <Hero title="Checkout Page" />
          <div className="empty-container">
            <div className="title-cart">Your cart is currently empty</div>
            <img src={Image} alt="empty cart" className="cart-img" />
            <Link to="/shop">
              <button className="table-button3">Back to shopping</button>
            </Link>
          </div>
        </>
      )}{" "}
    </>
  );
}
