import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import Image from "../../Assets/cart/cart.png";
import Hero from "../Hero/Hero";
class Cart extends React.Component {
  state = {
    products: JSON.parse(localStorage.getItem("order")),
    coupon: "",
    subtotal: JSON.parse(localStorage.getItem("subTotal")),
    total: JSON.parse(localStorage.getItem("total")),
    discounted: JSON.parse(localStorage.getItem("discount")),
  };
  async componentDidMount() {
    await this.subTotal();
    localStorage.setItem("coupon", "cat");
    if (!this.state.discounted)
      localStorage.setItem("discount", JSON.stringify(false));
    if (!localStorage.getItem("total")) {
      localStorage.setItem("total", JSON.stringify(this.state.subtotal));
      this.setState({ total: JSON.parse(localStorage.getItem("total")) });
    }
  }

  increment = async (product) => {
    let index;
    let prd = JSON.parse(localStorage.getItem("order"));
    for (let obj of prd) {
      if (obj.id === product.id) index = prd.indexOf(obj);
    }
    prd[index].counter += 1;
    localStorage.setItem("order", JSON.stringify(prd));
    await this.setState({
      products: JSON.parse(localStorage.getItem("order")),
    });
    this.subTotal();
  };

  decrement = async (product) => {
    let index;
    let prd = JSON.parse(localStorage.getItem("order"));
    for (let obj of prd) {
      if (obj.id === product.id) index = prd.indexOf(obj);
    }
    prd[index].counter -= 1;
    localStorage.setItem("order", JSON.stringify(prd));
    await this.setState({
      products: JSON.parse(localStorage.getItem("order")),
    });
    this.subTotal();
  };

  subTotal = async () => {
    let sum = 0;
    // this.state.products?.forEach((product) => (sum = sum + (product.counter*product.price)));
    if (this.state.products)
      this.state.products.forEach(
        (product) => (sum = sum + product.counter * product.price)
      );
    localStorage.setItem("subTotal", JSON.stringify(sum));
    this.setState({ subtotal: sum });
    if (!this.state.discounted)
      await this.setState({
        total: JSON.parse(localStorage.getItem("subTotal")),
      });
    else
      await this.setState({
        total: 0.8 * JSON.parse(localStorage.getItem("subTotal")),
      });
    localStorage.setItem("total", JSON.stringify(this.state.total));
  };

  handleDelete = async (product) => {
    const newProducts = this.state.products.filter(
      (el) => el.id !== product.id
    );
    await this.setState({ products: newProducts });
    localStorage.setItem("order", JSON.stringify(newProducts));
    this.subTotal();
  };
  couponInputHandler = (event) => {
    this.setState({ coupon: event.target.value });
  };
  couponButtonHandler = () => {
    this.couponDiscount();
  };
  couponDiscount = async () => {
    if (this.state.subtotal !== this.state.total) return;
    if (this.state.coupon === localStorage.getItem("coupon")) {
      let newSubTotal = this.state.total - this.state.total * 0.2;
      localStorage.setItem("total", JSON.stringify(newSubTotal));
      this.setState({ total: newSubTotal });
      await this.setState({ discounted: true });
      localStorage.setItem("discount", JSON.stringify(this.state.discounted));
    }
  };
  discountValue = () => {
    if (this.state.discounted) {
      return this.state.subtotal - 0.8 * this.state.subtotal;
    }
  };
  redirect = () => {
    if (localStorage.getItem("logged_in")) {
      return "/checkout";
    } else {
      localStorage.setItem("redirectTo", "/checkout");
      return "/account";
    }
  };
  render() {
    if (this.state.products?.length) {
      return (
        <>
          <Hero title="Cart Page" />
          <section className="cart-container">
            <table className="table-products">
              <thead className="table-head">
                <tr className="table-header">
                  <th></th>
                  <th></th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {JSON.parse(localStorage.getItem("order")).map((product) => (
                  <tr className="table-row">
                    <td></td>
                    <td>
                      <img
                        src={product.img}
                        alt="product item"
                        className="image-table"
                      />
                    </td>
                    <td className="title-products">{product.itemName}</td>
                    <td>JOD {product.price}</td>

                    <td>
                      <button 
                        className="table-button2"
                        onClick={() => this.decrement(product)}
                        disabled={product.counter === 1}
                      >
                        -
                      </button>
                      {product.counter}
                      <button
                        className="table-button"
                        onClick={() => this.increment(product)}
                      >
                        +
                      </button>
                    </td>

                    <td>JOD {product.price * product.counter}</td>
                    <td
                      onClick={() => this.handleDelete(product)}
                      className="table-Delete"
                    >
                      Delete
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="table-footer">
              <input
                type="text"
                className="table-input"
                placeholder="Coupon Code"
                onKeyUp={(event) => this.couponInputHandler(event)}
              />
              <button
                className="table-btn"
                onClick={() => this.couponButtonHandler()}
              >
                Apply coupon
              </button>
            </div>

            <div className="cart-total">
              <div className="cart-totals">
                <h3 className="table-title">Cart Totals</h3>
                <table className="table-total">
                  <tr>
                    <td className="table-td">Subtotal</td>
                    <td className="table-subtotal">
                      JOD {this.state.subtotal}
                    </td>
                  </tr>
                  {this.state.discounted ? (
                    <tr>
                      <td className="table-td">Discount</td>
                      <td className="discount">
                        JOD -{Math.round(this.discountValue() * 100) / 100}
                      </td>
                    </tr>
                  ) : (
                    ""
                  )}
                  <tr>
                    <td className="table-td">Total</td>
                    <td className="table-subtotal">
                      JOD {Math.round(this.state.total * 100) / 100}
                    </td>
                  </tr>
                </table>
                <div className="btn-checkout">
                  <Link to={this.redirect()}>
                    <button className="table-button">
                      Proceed to checkout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </>
      );
    } else {
      return (
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
      );
    }
  }
}

export default Cart;
