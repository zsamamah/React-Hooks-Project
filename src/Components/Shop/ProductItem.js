import React, { Component } from "react";

export class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.item.id,
      img: this.props.item.img,
      itemName: this.props.item.itemName,
      price: this.props.item.price,
      counter: 1,
    };
  }

  orders = [];
  minuseClick = () => {
    let btn = document.querySelectorAll(".shop-card-btn");
    let foundi;
    for (let index = 0; index < btn.length; index++) {
      if (btn[index].id == this.props.num) {
        foundi = index;
      }
    }
    btn[foundi].style.backgroundColor = "rgb(3, 169, 244)";

    if (this.state.counter === 1) {
      this.setState({ counter: 1 });
    } else {
      this.setState({ counter: this.state.counter - 1 });
    }
  };

  plusClick = () => {
    let btn = document.querySelectorAll(".shop-card-btn");
    let foundi;
    for (let index = 0; index < btn.length; index++) {
      if (btn[index].id == this.props.num) {
        foundi = index;
      }
    }
    btn[foundi].style.backgroundColor = "rgb(3, 169, 244)";

    this.setState({ counter: this.state.counter + 1 });
  };

  toCart = () => {
    let btn = document.querySelectorAll(".shop-card-btn");
    let foundi;
    for (let index = 0; index < btn.length; index++) {
      if (btn[index].id == this.props.num) {
        foundi = index;
      }
    }

    btn[foundi].style.backgroundColor = "grey";
    let storageProducts = JSON.parse(localStorage.getItem("order"));
    let found = false,
      index;
    if (storageProducts) {
      for (let i = 0; i < storageProducts.length; i++) {
        found = false;
        if (storageProducts[i].id === this.state.id) {
          found = true;
          index = i;
          break;
        }
      }
      if (found) {
        storageProducts[index] = this.state;
        localStorage.setItem("order", JSON.stringify(storageProducts));
      } else {
        storageProducts.push(this.state);
        localStorage.setItem("order", JSON.stringify(storageProducts));
      }
    } else {
      localStorage.setItem("order", JSON.stringify([this.state]));
    }
  };

  deleteCard = () => {
    this.props.deleteCard(this.props.num);
  };

  render() {
    // const { img, itemName, price } = this.state.;
    return (
        <div className="shop-card shop-text-center">
          <img src={this.state.img} alt="shop card" className="shop-card-img" />
          <p className="shop-card-label">{this.props.item.itemName}</p>
          <p className="shop-card-price">JOD {this.props.item.price}</p>
          {!this.props.showDelete && (
            <>
              <div className="counterShop">
                <i className="far fa-minus-square" onClick={this.minuseClick}></i>
                <p>{this.state.counter}</p>
                <i className="far fa-plus-square" onClick={this.plusClick}></i>
              </div>
              <button
                id={this.props.num}
                type="submit"
                className="shop-card-btn"
                onClick={this.toCart}
              >
                Add To Cart
              </button>
            </>
          )}
          {this.props.showDelete && (
            <button className="deleteBtn" onClick={this.deleteCard}>
              Delete Card
            </button>
          )}
        </div>
    );
  }
}

export default ProductItem;
