import React, { Component } from 'react'
import {countries} from './countries'
import { Link } from "react-router-dom";
import './checkout.css'
import Hero from '../Hero/Hero';
import Image from "../../Assets/cart/cart.png";


export default class Checkout extends Component {
    constructor(props){
        super(props)
        this.loggedIn=JSON.parse(localStorage.getItem('logged_in'));
        this.state={
            fname:this.loggedIn.fname,
            lname:this.loggedIn.lname,
            email:this.loggedIn.email,
            phone:this.loggedIn.phone,
            country:this.loggedIn.country,
            cashMsg1:'flex',
            cashMsg2:'none',
            redirect:null,
        }
        this.order=JSON.parse(localStorage.getItem('order'));

    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }


    handleSubmit=(e)=>{
        e.preventDefault()
        this.checkoutInfo={
            fname:this.state.fname,
            lname:this.state.lname,
            country:this.state.country,
            streetAddress:e.target.streetAddress.value,
            town:e.target.town.value,
            state: e.target.state.value,
            zip: e.target.zip.value,
            price:JSON.parse(localStorage.getItem('total')),
            coupon:"cat",
            discount:JSON.parse(localStorage.getItem('total'))-JSON.parse(localStorage.getItem('subTotal')),
            payment: this.state.cashMsg1==="flex"? "Cash":"Credit Card",
            status:"Pending",
            phone:this.state.phone,
            email:this.state.email,
            orders:this.order,
            subTotal:JSON.parse(localStorage.getItem('subTotal'))
        }

        
        let ordersArr =JSON.parse(localStorage.getItem('submittedOrders'));
        if(ordersArr){
            ordersArr.push(this.checkoutInfo)
            localStorage.setItem('submittedOrders',JSON.stringify(ordersArr));
        }else{
            localStorage.setItem('submittedOrders',JSON.stringify([this.checkoutInfo]));
        }
        localStorage.removeItem('order');
        localStorage.removeItem('subTotal');
        localStorage.removeItem('total');
        localStorage.removeItem('discount');
        localStorage.removeItem('coupon');
        this.setState({redirect:true});
    }

    handlePayment= (e)=>{
       if( e.target.value==="cash"){
           this.setState({cashMsg1:"flex",cashMsg2:'none'});

        }else{
            this.setState({cashMsg1:'none',cashMsg2:'flex'})
        }

    }

    totalPrice = ()=>{
        let sum=0;
        for(let obj of this.order){
            sum+=obj.counter*obj.price;
        }
        return sum;
    }
    render() {
        if(this.state.redirect)
        return (
            <>
            <Hero title="Checkout Page"/>
            <div className="empty-container">
            <div>Your order is submitted, it will be delivered within 2 to three weeks!</div>
            <div className="checkout-orderDetails">
                <ul>
                    {/* {()=>{
                        for(let prop of this.checkoutInfo){
                            return (
                                <li>{prop}</li>
                            )
                        }
                    }} */}
                </ul>
            </div>
            <Link to="/shop">
              <button className="table-button3">continue shopping</button>
            </Link>
          </div>
          </>
        )

        if(this.order.length!=0)
        return (
            <>
            <Hero title="Checkout Page"/>
            <div className='checkout-container'>
                    <form action='' onSubmit={this.handleSubmit}>
                        <div className='checkout-left'>
                                <div className='left-container'>

                                <h3>Billing details</h3>
                                <div className='checkout-adjacent'>
                                    <label>
                                        <p>First Name:</p>
                                        <input placeholder='First Name' type="text" name="fname" value={this.state.fname} onChange={this.handleChange}/>
                                    </label>
                                    <label>
                                        <p>Last Name:</p>
                                        <input placeholder='Last Name' type="text" name="lname" onChange={this.handleChange} value={this.state.lname}/>
                                    </label>
                                </div>
                                <label>
                                    <p>Country/Region</p>
                                    <select value={this.state.country}  onChange={this.handleChange} required name="country">

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
                                    <input placeholder='Phone' onChange={this.handleChange} required name="phone" type="tel" value={this.state.phone}/>
                                    </label>
                                    <label>
                                    <p>Email address</p>
                                    <input placeholder='Email address' onChange={this.handleChange} required type="email" name="email" value={this.state.email}/>
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
                                {this.order.map((element,i)=>
                                    <tr>
                                    <td>{element.itemName}</td>
                                    <td>JOD {element.price*element.counter}</td>
                                    </tr>
                                    )}
                                <tr>
                                    <td className="table-grey">Subtotal</td>
                                    <td>JOD {this.totalPrice()}</td>
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
                            <input onChange={this.handlePayment} type="radio" name="method" id="cash" value="cash" defaultChecked/>
                            <label htmlFor="cash">Cash on delivery</label>
                        </div>
                        <div className="payment-msg-container">
                            <p className="payment-msg" id="one" style={{display:this.state.cashMsg1}}>Pay with cash upon delivery</p>
                        </div>
                        <div className='radios'>
                            <input onChange={this.handlePayment} type="radio" name="method" id="credit-cards" value="credit-cards"/>
                            <label htmlFor="credit-cards" >Credit Card</label>
                        </div>
                        <div className="payment-msg-container1">


                            <div className="payment-msg" id="two" style={{display:this.state.cashMsg2}}>
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
            </>
        )
        else
        return(
            <>
            <Hero title="Checkout Page"/>
            <div className="empty-container">
              <div className="title-cart">Your cart is currently empty</div>
              <img src={Image} alt="empty cart" className="cart-img" />
              <Link to="/shop">
                <button className="table-button3">Back to shopping</button>
              </Link>
            </div>
            </>
        )
    }
}
