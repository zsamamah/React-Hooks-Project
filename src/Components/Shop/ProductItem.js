import React,{useState} from "react";

export function ProductItem (props) {
  const [state, setState]=useState({id: props.item.id,
        img: props.item.img,
        itemName: props.item.itemName,
        price: props.item.price,
        counter: 1,})
        
        let orders = [];
        const minusClick = () => {
          let btn = document.querySelectorAll(".shop-card-btn");
          let foundi;
          for (let index = 0; index < btn.length; index++) {
            if (btn[index].id == props.num) {
        foundi = index;
      }
    }
    btn[foundi].style.backgroundColor = "rgb(3, 169, 244)";
    
    if (state.counter === 1) {
      setState({ ...state,counter: 1 });
    } else {
      setState({  ...state,counter: state.counter - 1 });
    }
  };

  const plusClick = () => {
    let btn = document.querySelectorAll(".shop-card-btn");
    let foundi;
    for (let index = 0; index < btn.length; index++) {
      if (btn[index].id == props.num) {
        foundi = index;
      }
    }
    btn[foundi].style.backgroundColor = "rgb(3, 169, 244)";
    
    setState({  ...state,counter: state.counter + 1 });
  };
  
  const toCart = () => {
    let btn = document.querySelectorAll(".shop-card-btn");
    let foundi;
    for (let index = 0; index < btn.length; index++) {
      if (btn[index].id == props.num) {
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
        if (storageProducts[i].id === state.id) {
          found = true;
          index = i;
          break;
        }
      }
      if (found) {
        storageProducts[index] = state;
        localStorage.setItem("order", JSON.stringify(storageProducts));
      } else {
        storageProducts.push(state);
        localStorage.setItem("order", JSON.stringify(storageProducts));
      }
    } else {
      localStorage.setItem("order", JSON.stringify([state]));
    }
  };
  
  const deleteCard = () => {
    props.deleteCard(props.num);
  };
  
  // const { img, itemName, price } = state.;
  return (
    <div className="shop-card shop-text-center">
          <img src={state.img} alt="shop card" className="shop-card-img" />
          <p className="shop-card-label">{props.item.itemName}</p>
          <p className="shop-card-price">JOD {props.item.price}</p>
          {!props.showDelete && (
            <>
              <div className="counterShop">
                <i className="far fa-minus-square" onClick={minusClick}></i>
                <p>{state.counter}</p>
                <i className="far fa-plus-square" onClick={plusClick}></i>
              </div>
              <button
                id={props.num}
                type="submit"
                className="shop-card-btn"
                onClick={toCart}
                >
                Add To Cart
              </button>
            </>
          )}
          {props.showDelete && (
            <button className="deleteBtn" onClick={deleteCard}>
              Delete Card
            </button>
          )}
        </div>
    );
  }
  
  export default ProductItem;
  
  