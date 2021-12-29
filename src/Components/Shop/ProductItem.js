import React from "react";
import { useNavigate } from "react-router";
import { GiGearStickPattern } from "react-icons/gi";
import { IoColorPaletteOutline } from "react-icons/io5";
import { MdAirlineSeatReclineNormal } from "react-icons/md";

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
  gear,
}) {
  let navigate = useNavigate();

  const toBook = (id) => {
    localStorage.setItem("selected", id);
    navigate("/cart");
  };

  return (
    <div className="shop-card shop-text-center" key={id}>
      <img src={src} alt={alt} className="shop-card-img" />
      <div className="car-data">
        <div>
          <p className="shop-card-label">
            {name} - {model} - {year}
          </p>
        </div>
        <div>
          <p>
            <GiGearStickPattern /> {gear}
          </p>
        </div>
        <div>
          <p>
            <IoColorPaletteOutline /> {color}
          </p>
        </div>
        <div>
          <p>
            <MdAirlineSeatReclineNormal /> {seats} Seats
          </p>
        </div>
        <p className="shop-card-price"> Price: JOD {price}</p>
        <button
          id={id}
          type="submit"
          className="shop-card-btn"
          onClick={() => toBook(id)}
        >
          View deal
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
