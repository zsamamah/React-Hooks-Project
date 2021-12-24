import React, { useState } from "react";
import { useNavigate } from "react-router";

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
    let foundi;
    let found = false;

    for (let index = 0; index < btn.length; index++) {
      if (btn[index].id == id) {
        foundi = index;
      }
    }
    btn[foundi].style.backgroundColor = "grey";

    if (!localStorage.getItem("selected")) {
      selected.push(id);
      localStorage.setItem("selected", selected);
    } else {
      const prevSelected = [...localStorage.getItem("selected")];
      prevSelected.forEach((carID) => {
        if (carID === id) {
          found = true;
        } else if (carID !== id && !found) {
          found = false;
        }
      });
      if (!found) {
        const newSelect = [];
        newSelect.push(localStorage.getItem("selected"), id);
        localStorage.setItem("selected", newSelect);
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
