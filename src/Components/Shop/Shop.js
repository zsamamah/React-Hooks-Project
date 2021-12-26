import React, { useState } from "react";
import "./Shop.css";
import ProductItem from "./ProductItem";
import cars from "./cars.json";

export function Shop() {
  const [carArray, setCarArray] = useState(cars);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [value, setValue] = useState("");

  const categoryHandle = (category) => {
    switch (category) {
      case "Mercedes":
        setCarArray(cars.filter((car) => car.name === "Mercedes"));
        setSelectedCategory("Mercedes");
        break;
      case "Audi":
        setCarArray(cars.filter((car) => car.name === "Audi"));
        setSelectedCategory("Audi");
        break;
      case "Toyota":
        setCarArray(cars.filter((car) => car.name === "Toyota"));
        setSelectedCategory("Toyota");
        break;
      case "Mitsubishi":
        setCarArray(cars.filter((car) => car.name === "Mitsubishi"));
        setSelectedCategory("Mitsubishi");
        break;
      case "Fiat":
        setCarArray(cars.filter((car) => car.name === "Fiat"));
        setSelectedCategory("Fiat");
        break;
      default:
        setCarArray(cars);
        setSelectedCategory("");
    }
  };
  const handleChange = (e) => {
    setValue(e.target.value);
    switch (e.target.value) {
      case "Low price":
        setCarArray(
          carArray.sort((firstCar, nextCar) =>
            firstCar.price > nextCar.price ? 1 : -1
          )
        );
        break;
      case "High price":
        setCarArray(
          carArray.sort((firstCar, nextCar) =>
            nextCar.price > firstCar.price ? 1 : -1
          )
        );

        break;

      default:
        setCarArray(carArray);
        break;
    }
  };
  return (
    <>
      <div className="hero-gallery">
        <h1> Exotic Gallery</h1>
      </div>
      <div className="shop-container">
        <div className="categories-container">
          <p>Categories</p>
          <ul className="categories">
            <li onClick={() => categoryHandle("")}>All Cars</li>

            <li onClick={() => categoryHandle("Mercedes")}>Mercedes</li>
            <li onClick={() => categoryHandle("Audi")}>Audi</li>
            <li onClick={() => categoryHandle("Toyota")}>Toyota</li>
            <li onClick={() => categoryHandle("Mitsubishi")}>Mitsubishi</li>
            <li onClick={() => categoryHandle("Fiat")}>Fiat</li>
          </ul>
          <p>Price Filter</p>
          <select id="rating-filter" value={value} onChange={handleChange}>
            <option
              style={{ background: "white", color: "black" }}
              value="Sort"
            >
              Sort
            </option>
            <option
              style={{ background: "white", color: "black" }}
              value="Low price"
            >
              Low to High
            </option>
            <option
              style={{ background: "white", color: "black" }}
              value="High price"
            >
              High to Low
            </option>
          </select>
        </div>
        <div className="car-gallery">
          <p>Gallery/{selectedCategory}</p>
          {carArray.map((car) => {
            return (
              <ProductItem
                key={car.id}
                id={car.id}
                name={car.name}
                price={car.price}
                src={car.img}
                model={car.model}
                seats={car.seats}
                gear={car.gear}
                color={car.color}
                year={car.year}
                alt={car.alt}
                gear={car.gear}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Shop;
