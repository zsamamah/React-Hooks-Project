import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './checkout.css'
import Hero from '../Hero/Hero';
import Image from "../../Assets/cart/cart.png";
import cars from '../Shop/cars.json';

export default function Checkout (){
       const loggedIn=JSON.parse(localStorage.getItem('logged_in'));
       const mycar=cars[localStorage.getItem('selected')-1];

       const[userData,setUserData]=useState({
        fname:loggedIn.fname,
        lname:loggedIn.lname,
        email:loggedIn.email,
        phone:loggedIn.phone,
        pickup_time:null,
        unti_time:null,
        cashMsg1:'flex',
        cashMsg2:'none',
        redirect:null,
       })

       const [coupon, setCoupon] = useState("cat")
       const [couponHandler, setCouponHandler] = useState(null)
       const [discount, setDiscount] = useState(0)

       let subtotal;

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
        let days = JSON.parse(localStorage.getItem('temp'))
        subtotal = (mycar.price)*(days.length)
        return subtotal;
    }

    const finalTotal = ()=>{
        return subtotal - discount;
    }

   const handleSubmit=()=>{
        const checkoutInfo={
            fname:userData.fname,
            lname:userData.lname,
            payment: userData.cashMsg1==="flex"? "Cash":"Credit Card",
            status:"Pending",
            phone:userData.phone,
            email:userData.email
        }

        let ordersArr =JSON.parse(localStorage.getItem('submittedOrders'));
        if(ordersArr){
            ordersArr.push(checkoutInfo)
            localStorage.setItem('submittedOrders',JSON.stringify(ordersArr));
        }else{
            localStorage.setItem('submittedOrders',JSON.stringify([checkoutInfo]));
        }

        let dates = JSON.parse(localStorage.getItem(`car${mycar.id}`))
        let new_dates = JSON.parse(localStorage.getItem('temp'));
        if(!dates){
            localStorage.setItem(`car${mycar.id}`,JSON.stringify(new_dates))
        }
        else{
            let new_array = [...dates,...new_dates]
            localStorage.setItem(`car${mycar.id}`,JSON.stringify(new_array))
        }
        
        localStorage.removeItem('selected');
        localStorage.removeItem('temp');

        setUserData((prev)=>{
            return {...prev,redirect:true}
        })
       
    }

    const couponInputHandler = (e) => {
        setCouponHandler(e.target.value)
      };

    const couponDiscount = async () => {
        if(couponHandler===coupon){
            setDiscount(totalPrice()*0.1)
            document.getElementById('error_coupon').innerText="";
        }
        else{
            document.getElementById('error_coupon').innerHTML=`<i class="fas fa-times"></i> Wrong Coupon Code`
        }
      };

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
                    <form onSubmit={handleSubmit}>
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
                                    <p>Phone</p>
                                    <input placeholder='Phone' onChange={handleChange} required name="phone" type="tel" value={userData.phone}/>
                                    </label>
                                    <label>
                                    <p>Email address</p>
                                    <input placeholder='Email address' onChange={handleChange} required type="email" name="email" value={userData.email}/>
                                </label>
                                <label>
                                    <p>Pickup Time</p>
                                <input type='time' name="pickup_time" onChange={handleChange} required/>
                                </label>
                                <label>
                                    <p>Recieving Time</p>
                                    <input type='time' name='unti_time' onChange={handleChange} required/>
                                </label>
                            </div>
                        </div>
                <div className='checkout-right'>
            <div className="table-footer">
          <input
            type="text"
            className="table-input"
            placeholder="Coupon Code"
            onChange={(e) => couponInputHandler(e)}
          />
          <button
            className="table-btn"
            type='button'
            onClick={couponDiscount}
          >
            Apply coupon
          </button>
          <p id="error_coupon"></p>
        </div>
                    <div className="checkout-summary">
                        <table>
                            <thead>
                                <tr className="table-grey">
                                    <th >Product</th>
                                    <th >Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>   
                                <tr>
                                    <td className="table-grey">Subtotal</td>
                                    <td>JOD {totalPrice()}</td>
                                </tr>
                                <tr>
                                    <td>Discount</td>
                                    <td className="discount">JOD {discount}</td>
                                    
                                </tr>
                                <tr>
                                    <td className="table-grey">Total</td>
                                    <td>JOD {finalTotal()}</td>
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="checkout-payment">
                        <div className='radios'>
                            <input onChange={handlePayment} type="radio" name="method" id="cash" value="cash" defaultChecked/>
                            <label htmlFor="cash">Cash on delivery</label>
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
