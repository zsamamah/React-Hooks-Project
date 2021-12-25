import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export function ProductItem({
  id,
  name,
  price,
  src,
  model,
  seats,
  color,
  year,
  alt,
}) {
  let navigate = useNavigate();
  let selected = [];

  const toBook = (id) => {
    let btn = document.querySelectorAll(".shop-card-btn");
    let bookingMsg = document.getElementsByClassName("bookingMsg");
    let foundi;
    let found = false;
    let selectedItem;

    for (let index = 0; index < btn.length; index++) {
      if (btn[index].id == id) {
        foundi = index;
      }
    }
    btn[foundi].style.backgroundColor = "grey";

    if (!localStorage.getItem("selectedItem")) {
      selected.push(id);
      localStorage.setItem("selectedItem", selected);
      selectedItem = id;
      localStorage.setItem("selected", selectedItem);
      navigate("/cart");
    } else {
      const prevSelected = [...localStorage.getItem("selectedItem")];
      prevSelected.forEach((carID) => {
        if (carID === id) {
          found = true;
          bookingMsg[id - 1].style.display = "block";
        } else if (carID !== id && !found) {
          found = false;
        }
      });
      if (!found) {
        const newSelect = [];
        newSelect.push(localStorage.getItem("selectedItem"), id);
        localStorage.setItem("selectedItem", newSelect);
        selectedItem = id;
        localStorage.setItem("selected", selectedItem);
        navigate("/cart");
      }
    }
  };
  return (
    <div className="shop-card shop-text-center" key={id}>
      <img src={src} alt={alt} className="shop-card-img" />
      <div className="car-data">
        <p className="shop-card-label">
          {name} - {model} - {year}
        </p>
        <p>Color: {color}</p>
        <p>Seats:{seats}</p>
        <p className="shop-card-price"> Price: JOD {price}</p>
        <p className="bookingMsg" id={id}>
          You Already Booked This Car
        </p>
        <button
          id={id}
          type="submit"
          className="shop-card-btn"
          onClick={() => toBook(id)}
        >
          Book
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
