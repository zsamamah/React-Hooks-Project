import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import Image from "../../Assets/cart/cart.png";
import Hero from "../Hero/Hero";

function Cart() {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("order")));
const [coupon, setcoupon] = useState("");
const [subtotal, setSubtotal] = useState(JSON.parse(localStorage.getItem("subTotal")));
const [total, setTotal] = useState(JSON.parse(localStorage.getItem("total")));
const [discounted, setDiscounted] = useState(JSON.parse(localStorage.getItem("discount")));

useEffect(() => {
  subTotal();
    localStorage.setItem("coupon", "cat");
    if (!discounted)
      localStorage.setItem("discount", JSON.stringify(false));
    if (!localStorage.getItem("total")) {
      localStorage.setItem("total", JSON.stringify(subtotal));
      setTotal(JSON.parse(localStorage.getItem("total")) )
    }
})


  const increment= async (product) => {
    let index;
    let prd = JSON.parse(localStorage.getItem("order"));
    for (let obj of prd) {
      if (obj.id === product.id)
        index = prd.indexOf(obj);
    }
    prd[index].counter += 1;
    localStorage.setItem("order", JSON.stringify(prd));
    await setProducts(JSON.parse(localStorage.getItem("order")));
    subTotal();
  }

const decrement = async (product) => {
  let index;
  let prd = JSON.parse(localStorage.getItem("order"));
  for (let obj of prd) {
    if (obj.id === product.id) index = prd.indexOf(obj);
  }
  prd[index].counter -= 1;
  localStorage.setItem("order", JSON.stringify(prd));
  await setProducts(JSON.parse(localStorage.getItem("order")))
  subTotal();
};

const subTotal = async () => {
  let sum = 0;
  if (products)
    products.forEach(
      (product) => (sum = sum + product.counter * product.price)
    );
  localStorage.setItem("subTotal", JSON.stringify(sum));
  setSubtotal(sum);
  if (!discounted)
    await setTotal(JSON.parse(localStorage.getItem("subTotal")))
  else
    await setTotal(0.8 * JSON.parse(localStorage.getItem("subTotal")))
  localStorage.setItem("total", JSON.stringify(total));
};

const handleDelete = async (product) => {
  const newProducts = products.filter(
    (el) => el.id !== product.id
  );
  await setProducts(newProducts)
  localStorage.setItem("order", JSON.stringify(newProducts));
  subTotal();
};
const couponInputHandler = (e) => {
  setcoupon(e.target.value)
};
const couponButtonHandler = () => {
  couponDiscount();
};
const couponDiscount = async () => {
  if (subtotal !== total) return;
  if (coupon === localStorage.getItem("coupon")) {
    let newSubTotal = total - total * 0.2;
    localStorage.setItem("total", JSON.stringify(newSubTotal));
    setTotal(newSubTotal)
    await setDiscounted(true)
    localStorage.setItem("discount", JSON.stringify(discounted));
  }
};
const discountValue = () => {
  if (discounted) {
    return subtotal - 0.8 * subtotal;
  }
};
const redirect = () => {
  if (localStorage.getItem("logged_in")) {
    return "/checkout";
  } else {
    localStorage.setItem("redirectTo", "/checkout");
    return "/account";
  }
};
if (products?.length) {
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
            {JSON.parse(localStorage.getItem("order")).map((product,index) => (
              <tr className="table-row" key={index}>
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
                    onClick={() => decrement(product)}
                    disabled={product.counter === 1}
                  >
                    -
                  </button>
                  {product.counter}
                  <button
                    className="table-button"
                    onClick={() => increment(product)}
                  >
                    +
                  </button>
                </td>

                <td>JOD {product.price * product.counter}</td>
                <td
                  onClick={() => handleDelete(product)}
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
            onChange={(e) => couponInputHandler(e)}
          />
          <button
            className="table-btn"
            onClick={() => couponButtonHandler()}
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
                  JOD {subtotal}
                </td>
              </tr>
              {discounted ? (
                <tr>
                  <td className="table-td">Discount</td>
                  <td className="discount">
                    JOD -{Math.round(discountValue() * 100) / 100}
                  </td>
                </tr>
              ) : (
                ""
              )}
              <tr>
                <td className="table-td">Total</td>
                <td className="table-subtotal">
                  JOD {Math.round(total * 100) / 100}
                </td>
              </tr>
            </table>
            <div className="btn-checkout">
              <Link to={redirect()}>
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

export default Cart