import React, { Component } from "react";
import Products from "../Shop/Products";
import Hero from "../Hero/Hero";
import './admin.css';

export default class AddField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: JSON.parse(localStorage.getItem("items")),
      textarea:""
    };
  }

  handleTextArea=(e)=>{
    this.setState({textarea:e.target.value})
  }

  addItem = (e) => {
    e.preventDefault();
    let cardStorage = [];
    !localStorage.getItem("items")
      ? localStorage.setItem("items", JSON.stringify(cardStorage))
      : (cardStorage = JSON.parse(localStorage.getItem("items")));
    cardStorage = cardStorage
      ? cardStorage
      : JSON.parse(localStorage.getItem("items"));
    cardStorage.push({
      itemName: e.target.heading.value,
      text: this.state.textarea,
      img: e.target.image.value,
      alt: e.target.alt.value,
      price: e.target.price.value,
      id: e.target.id.value,
    });
    localStorage.setItem("items", JSON.stringify(cardStorage));
    this.props.handleChangeitem()
  };

  render() {
    return (
      <>
      <Hero title="Add Products"/>
        <form className="AddForm" onSubmit={this.addItem}>
          <input
            required
            type="text"
            name="heading"
            placeholder="Product Name"
            className="btn border-dark"
          />
          <textarea
            required
            cols="23"
            row="8"
            name="text" value={this.state.textarea}
            placeholder="Product Description" onChange={this.handleTextArea}
            className="btn border-dark"



          />
          <input required type="url" name="image" placeholder="Image URL" className="btn border-dark"
 />
          <input required type="text" name="alt" placeholder="Alt for Image" className="btn border-dark"
 />
          <input
            required
            type="number"
            name="price"
            placeholder="Enter Price"
            className="btn border-dark"

          />
          <input
            required
            type="number"
            name="id"
            placeholder="Enter Product ID"
            className="btn border-dark"
          />
          <button type="submit" className="btn bg-primary text-white fw-bold">Add Card</button>
        </form>
        <Products showDelete={true} deleteCard={this.props.deleteCard} items={this.props.items} />

      </>
    );
  }
}
