import React, { useState } from "react";
import Products from "../Shop/Products";
import Hero from "../Hero/Hero";
import './admin.css';

function AddField(props) {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem("items")))
  const [textarea, settextarea] = useState("")

  const handleTextArea=(e)=>{
    settextarea(e.target.value)
  }

  const addItem = (e) => {
    e.preventDefault();
    let cardStorage = [];
    !localStorage.getItem("items")? localStorage.setItem("items", JSON.stringify(cardStorage)) : (cardStorage = JSON.parse(localStorage.getItem("items")));
    cardStorage = cardStorage ? cardStorage : JSON.parse(localStorage.getItem("items"));
    cardStorage.push({
      itemName: e.target.itemName.value,
      model: e.target.model.value,
      description: textarea,
      img: e.target.image.value,
      alt: e.target.alt.value,
      price: e.target.price.value,
      id: e.target.id.value,
    });
    localStorage.setItem("items", JSON.stringify(cardStorage));
    props.handleChangeitem()
  };
  return (
    <>
      <Hero title="Add Products"/>
        <form className="AddForm" onSubmit={addItem}>
          <input
            required
            type="text"
            name="itemName"
            placeholder="car Name"
            className="btn border-dark"
          />
          <input
            required
            type="text"
            name="model"
            placeholder="Car Model"
            className="btn border-dark"
          />
          <textarea
            required
            cols="23"
            row="8"
            name="description" value={textarea}
            placeholder="Product Description" onChange={handleTextArea}
            className="btn border-dark"
          />
          <input required type="url" name="image" placeholder="Image URL" className="btn border-dark"/>
          <input required type="text" name="alt" placeholder="Alt for Image" className="btn border-dark"/>
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
        <Products showDelete={true} deleteCard={props.deleteCard} items={props.items} />
      </>
  )
}

export default AddField