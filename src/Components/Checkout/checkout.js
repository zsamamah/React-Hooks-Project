import React, { Component, useState } from 'react'
import {countries} from './countries'
import { Link } from "react-router-dom";
import './checkout.css'
import Hero from '../Hero/Hero';
import Image from "../../Assets/cart/cart.png";

export default function Checkout (){
       const loggedIn=JSON.parse(localStorage.getItem('logged_in'));
       const order=JSON.parse(localStorage.getItem('order'));

       const[userData,setUserData]=useState({
        fname:loggedIn.fname,
        lname:loggedIn.lname,
        email:loggedIn.email,
        phone:loggedIn.phone,
        country:loggedIn.country,
        cashMsg1:'flex',
        cashMsg2:'none',
        redirect:null,
       })

     const handleChange=(e)=>{
          const {name,value}=e.target;
          setUserData((prev)=>{
              return {...prev,[name]:value}
          })
    }

    const handlePayment= (e)=>{
        const {value}=e.target;
        if( value==="cash"){
            setUserData((prev)=>{
                return {...prev,cashMsg1:"flex",cashMsg2:'none'}
            })
           
         }else{
            setUserData((prev)=>{
                return {...prev,cashMsg1:"none",cashMsg2:'flex'}
            })
         }
 
     }

    const totalPrice = ()=>{
        let sum=0;
        for(let obj of order){
            sum+=obj.counter*obj.price;
        }
        return sum;
    }

   const handleSubmit=(e)=>{
        e.preventDefault()
        const checkoutInfo={
            fname:userData.fname,
            lname:userData.lname,
            country:userData.country,
            streetAddress:e.target.streetAddress.value,
            town:e.target.town.value,
            userData: e.target.userData.value,
            zip: e.target.zip.value,
            price:JSON.parse(localStorage.getItem('total')),
            coupon:"cat",
            discount:JSON.parse(localStorage.getItem('total'))-JSON.parse(localStorage.getItem('subTotal')),
            payment: userData.cashMsg1==="flex"? "Cash":"Credit Card",
            status:"Pending",
            phone:userData.phone,
            email:userData.email,
            orders:order,
            subTotal:JSON.parse(localStorage.getItem('subTotal'))
        }

        let ordersArr =JSON.parse(localStorage.getItem('submittedOrders'));
        if(ordersArr){
            ordersArr.push(checkoutInfo)
            localStorage.setItem('submittedOrders',JSON.stringify(ordersArr));
        }else{
            localStorage.setItem('submittedOrders',JSON.stringify([checkoutInfo]));
        }
        localStorage.removeItem('order');
        localStorage.removeItem('subTotal');
        localStorage.removeItem('total');
        localStorage.removeItem('discount');
        localStorage.removeItem('coupon');
        setUserData((prev)=>{
            return {...prev,redirect:true}
        })
       
    }





    return (
        <>
           {userData.redirect ? <>
           <Hero title="Checkout Page"/>
            <div className="empty-container">
            <div>Your order is submitted, it will be delivered within 2 to three weeks!</div>
            <Link to="/shop">
              <button className="table-button3">continue shopping</button>
            </Link>
          </div>
          </> : userData.length !=0 ?  <>
            <Hero title="Checkout Page"/>
            <div className='checkout-container'>
                    <form action='' onSubmit={handleSubmit}>
                        <div className='checkout-left'>
                                <div className='left-container'>

                                <h3>Billing details</h3>
                                <div className='checkout-adjacent'>
                                    <label>
                                        <p>First Name:</p>
                                        <input placeholder='First Name' type="text" name="fname" value={userData.fname} onChange={handleChange}/>
                                    </label>
                                    <label>
                                        <p>Last Name:</p>
                                        <input placeholder='Last Name' type="text" name="lname" onChange={handleChange} value={userData.lname}/>
                                    </label>
                                </div>
                                <label>
                                    <p>Country/Region</p>
                                    <select value={userData.country}  onChange={handleChange} required name="country">

                                        {countries.map((element,i)=>{return<option key={i}>{element.name}</option>
                                        })}
                                    </select>
                                </label>
                                <label>
                                    <p>Street Adress:</p>
                                    <input placeholder='Street Address' required type="text" name="streetAddress"></input>
                                </label>
                                <label>
                                    <p>Town/City</p>
                                    <input placeholder='Town/City' required type="text" name="town"></input>
                                </label>
                                <label>
                                    <p>State/Governorate</p>
                                    <input placeholder='State/Governorate' required type="text" name="state"></input>
                                </label>
                                <label>
                                    <p>Postcode / ZIP</p>
                                    <input placeholder='Postcode / ZIP' required type="text" name="zip"></input>
                                </label>
                                <label>
                                    <p>Phone</p>
                                    <input placeholder='Phone' onChange={handleChange} required name="phone" type="tel" value={userData.phone}/>
                                    </label>
                                    <label>
                                    <p>Email address</p>
                                    <input placeholder='Email address' onChange={handleChange} required type="email" name="email" value={userData.email}/>
                                </label>
                            </div>
                        </div>
                <div className='checkout-right'>
                    <div className="checkout-summary">
                        <table>
                            <thead>
                                <tr className="table-grey">
                                    <th >Product</th>
                                    <th >Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>   
                                {order.map((element,i)=>
                                    <tr>
                                    <td>{element.itemName}</td>
                                    <td>JOD {element.price*element.counter}</td>
                                    </tr>
                                    )}
                                <tr>
                                    <td className="table-grey">Subtotal</td>
                                    <td>JOD {totalPrice()}</td>
                                </tr>
                                <tr>
                                    <td>Discount</td>
                                    <td className="discount">JOD {Math.round(JSON.parse(localStorage.getItem('total')-JSON.parse(localStorage.getItem('subTotal'))) * 100) / 100}</td>
                                    
                                </tr>
                                <tr>
                                    <td className="table-grey">Total</td>
                                    <td>JOD {Math.round((JSON.parse(localStorage.getItem('total'))) * 100) / 100}</td>
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="checkout-payment">
                        <div className='radios'>
                            <input onChange={handlePayment} type="radio" name="method" id="cash" value="cash" defaultChecked/>
                            <label htmlFor="cash">Cash on delivery</label>
                        </div>
                        <div className="payment-msg-container">
                            <p className="payment-msg" id="one" style={{display:userData.cashMsg1}}>Pay with cash upon delivery</p>
                        </div>
                        <div className='radios'>
                            <input onChange={handlePayment} type="radio" name="method" id="credit-cards" value="credit-cards"/>
                            <label htmlFor="credit-cards" >Credit Card</label>
                        </div>
                        <div className="payment-msg-container1">


                            <div className="payment-msg" id="two" style={{display:userData.cashMsg2}}>
                                <label>
                                    <p>Card Number</p>
                                    <input type="number" placeholder='xxxx-xxxx-xxxx-xxxx'></input>
                                </label>
                                <label>
                                    <p>Name on card</p>
                                    <input type="text" placeholder='First Last'></input>
                                </label>
                                <label>
                                    <p>Expiry Date</p>
                                    <input type="month" placeholder='Month Year'></input>
                                </label>
                            </div>
                        </div>
                        <div className="orderBtn">
                            <button type="submit" id="placeOrder">Checkout</button>
                        </div>
                    </div>

                </div>
                </form>
            </div>
            </> : <>
            <Hero title="Checkout Page"/>
            <div className="empty-container">
              <div className="title-cart">Your cart is currently empty</div>
              <img src={Image} alt="empty cart" className="cart-img" />
              <Link to="/shop">
                <button className="table-button3">Back to shopping</button>
              </Link>
            </div>
            </> }  </>
        )
      

}
