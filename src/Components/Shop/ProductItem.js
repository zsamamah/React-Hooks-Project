import React, { useState } from "react";
import { useNavigate } from "react-router";
import {GiGearStickPattern} from 'react-icons/gi';
import {IoColorPaletteOutline} from 'react-icons/io5';
import {MdAirlineSeatReclineNormal} from 'react-icons/md'

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
  gear
}) {
  let navigate = useNavigate();

  // const toBook = (id) => {
  //   let btn = document.querySelectorAll(".shop-card-btn");
  //   let bookingMsg = document.getElementsByClassName("bookingMsg");
  //   let foundi;
  //   let found = false;
  //   let selectedItem;

  //   for (let index = 0; index < btn.length; index++) {
  //     if (btn[index].id === id) {
  //       foundi = index;
  //     }
  //   }
  //   btn[foundi].style.backgroundColor = "grey";

  //   if (!localStorage.getItem("selectedItem")) {
  //     selected.push(id);
  //     localStorage.setItem("selectedItem", selected);
  //     selectedItem = id;
  //     localStorage.setItem("selected", selectedItem);
  //     navigate("/cart");
  //   } else {
  //     const prevSelected = [...localStorage.getItem("selectedItem")];
  //     prevSelected.forEach((carID) => {
  //       if (carID === id) {
  //         found = true;
  //         bookingMsg[id - 1].style.display = "block";
  //       } else if (carID !== id && !found) {
  //         found = false;
  //       }
  //     });
  //     if (!found) {
  //       const newSelect = [];
  //       newSelect.push(localStorage.getItem("selectedItem"), id);
  //       localStorage.setItem("selectedItem", newSelect);
  //       selectedItem = id;
  //       localStorage.setItem("selected", selectedItem);
  //       navigate("/cart");
  //     }
  //   }
  // };

  const toBook = (id)=>{
    localStorage.setItem('selected',id);
    navigate('/cart')
  }

  return (
    <div className="shop-card shop-text-center" key={id}>
      <img src={src} alt={alt} className="shop-card-img" />
      <div className="car-data">
        <div>
        <p className="shop-card-label">
          {name} - {model} - {year}
        </p>
        </div>
        <div><p><GiGearStickPattern/> {gear}</p></div>
        <div><p><IoColorPaletteOutline/> {color}</p></div>
        <div><p><MdAirlineSeatReclineNormal/> {seats} Seats</p></div>
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
          View Deal
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
