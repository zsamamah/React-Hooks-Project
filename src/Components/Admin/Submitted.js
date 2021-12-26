import React, { useState } from "react";
import Hero from "../Hero/Hero";
import cars from '../Shop/cars.json'
import './admin.css'

function Submitted() {
  const [status, setStatus] = useState(JSON.parse(localStorage.getItem("submittedOrders")))
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('logged_in')))
if(localStorage.getItem('submittedOrders')&&user.role==="admin")
return (
  <>
  <Hero title="Submitted Orders"/>
  <div className="grid-orders">
    {status&&status.map(
      (order, indx) => {
        return (
          <div key={indx} className="orderCars">
            <div>
                Full Name : 
                {order.fname} {order.lname}
            </div>
            <div>
                Email Address : {order.email}
            </div>
            <div>
               Phone number :  {order.phone}
            </div>
            <div>Car: {cars[order.carID-1].name} {cars[order.carID-1].model}</div>
            <div>Total: {order.total}</div>
            <div>Payment Method : {order.payment}</div>
          </div>
        );
      }
    )}
  </div>
  </>
);
else{
  return(
    <>
    <Hero title="Orders"/>
    <div id="no_orders">
    <h1>{(user.role==="admin")?'No Submitted orders yet':'You don`t have access'}</h1>
    </div>
    </>
  )
}
}

export default Submitted