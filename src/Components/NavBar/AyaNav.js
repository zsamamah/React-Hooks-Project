import React, { useState } from "react";
import "./ayaNav.css";
import { NavLink,useNavigate } from "react-router-dom";

export default function HandleLogout(){
  let navigate=useNavigate();
  const handleLogoutClick=()=>{
    localStorage.removeItem("currentUser");
    localStorage.setItem("cartKey",JSON.stringify([]));
    navigate("/")
  }
  return <Nav handleLogoutClick={handleLogoutClick}/>
}

function Nav(props){
    const [state,setState] = useState({
        src1: "../assets/images/logoImg.png",
        status: 0,
        class1: "Nav itemList",
        class2: "Nav navList",
        class3: "Nav btns",
        class4: "Nav middleList",
        class5: "Nav rightList",
        class6:"Nav dropIcon",
        class7:"Nav profileDropList"
      })

  let menu = () => {
    if (
      state.class1 === "Nav itemList" &&
      state.class2 === "Nav navList" &&
      state.class3 === "Nav btns"
    ) {
      setState({
        ...state,
        class1: "toggle itemList",
        class2: "toggle navList",
        class3: "toggle btns",
        class4: "toggle itemList",
        class5: "toggle itemList",
        class6 :"toggle dropIcon",
        class7:"toggle profileDropList"
      });
    } else {
      setState({
        ...state,
        class1: "Nav itemList",
        class2: "Nav navList",
        class3: "Nav btns",
        class4: "Nav middleList",
        class5: "Nav rightList",
        class6:"Nav dropIcon",
        class7:"Nav profileDropList"

      });
    }
  };
  let logOut = () => {
    props.handleLogoutClick();
  };
    return (
      <div className="Nav navContainer">
        <div className="Nav logoContainer">
          <NavLink to="/">
            <img
              className="Nav navLogo"
              src={state.src1}
              alt="Site Logo"
            />
          </NavLink>
          <img
            onClick={menu}
            className="menu"
            src="https://img.icons8.com/external-blue-wire-juicy-fish/30/4a90e2/external-bars-ui-elements-blue-wire-blue-wire-juicy-fish-2.png"
            alt="toggleBtn"
          />
          <div className="Nav logoName">Capsule</div>
        </div>
        <ul className={state.class2}>
        <div className={state.class4}>
          <li className={state.class1}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={state.class1}>
            <NavLink to="/store">Store</NavLink>
          </li>
          <li className={state.class1}>
            <NavLink to="/aboutus">About Us</NavLink>
          </li>
          </div>
          <span className={state.class3}>
            {localStorage.getItem("currentUser") !== null ? (
              <div className={state.class5}>
                  {" "}
                <NavLink to="/cart">
                  <li className={state.class1}>
                    <img
                      alt="cart icon"
                      src="https://img.icons8.com/ios/45/4a90e2/shopping-cart.png"
                      />
                  </li>
                </NavLink>
                    <div className={state.class6}>
                    <img
                      alt="profile icon"
                      src="https://img.icons8.com/color/45/000000/test-account.png"
                    /> 
                    <img src="https://img.icons8.com/external-those-icons-fill-those-icons/24/4a90e2/external-down-arrows-those-icons-fill-those-icons-7.png" alt="drop down" /> 
                    <br/>
                <div className={state.class7}>
                  <NavLink to="/profile">
                  <li className={state.class1}>
                    View Profile <br/>
                  </li>
                      </NavLink>
                <li className={state.class1}>
                  <button className="Nav btn" onClick={logOut}>
                    Log Out <br/>
                  </button>
                </li>
                </div>
              </div>
              </div>
            ) : (
              <div>
                <NavLink to="/cart">
                  <li className={state.class1}>
                    <img
                      alt="cart icon"
                      src="https://img.icons8.com/ios/45/4a90e2/shopping-cart.png"
                    />
                  </li>
                </NavLink>
                <li className={state.class1}>
                  <button className="Nav btn">
                    <NavLink to="/login">Log In</NavLink>
                  </button>
                </li>
                <li className={state.class1}>
                  <button className="Nav btn">
                    <NavLink to="/register">Register</NavLink>
                  </button>
                </li>
              </div>
            )}
          </span>
        </ul>
      </div>
    );
  }

