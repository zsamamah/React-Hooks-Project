import React, { Component } from "react";
import Hero from "../Hero/Hero";

class Submitted extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             status: JSON.parse(localStorage.getItem("submittedOrders"))
        }
    }
    
    handleChangeRole=  (e,i)=>{
        let array1=this.state.status
        array1[i].status=e.target.value;
        localStorage.setItem("submittedOrders",JSON.stringify(array1));
        this.setState({status:array1})
    }
  render() {
    if(localStorage.getItem('submittedOrders'))
    return (
      <>
      <Hero title="Submitted Orders"/>
      <div className="grid-orders">
        {JSON.parse(localStorage.getItem("submittedOrders")).map(
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
                <div>
                   <table>
                      <tr>
                        <td>{order.orders.itemName}</td>
                        <td>{order.orders.price}</td>
                      </tr>
                    </table>
                    
                </div>
                <div>
                    Payment Method : {order.payment} <br/>
                    Subtotal : {order.subTotal} <br/>
                    Coupon : {order.coupon} <br/>
                    Discount : {order.discount} <br/>
                    Total : {order.price}
                </div>
                <div>
                    Deliver to : 
                    {order.country} , {order.state} , {order.streetAddress}
                </div>
                <div>
                <select value={order.status}  name="status" onChange={(e)=>this.handleChangeRole(e,indx)}>
                        <option value={order.status}>{order.status}</option>
                        <option value={order.status==="Pending"? "Delivered":"Pending"}>{order.status==="Delivered"? "Pending":"Delivered"}</option>
                </select>
                </div>
              </div>
            );
          }
        )}
      </div>
      </>
    );
    else
    return(<h1>No Submitted orders yet</h1>)
  }
}

export default Submitted;
