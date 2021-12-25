import React, { useState } from "react";
import "./ayaNav.css";
import { NavLink,useNavigate } from "react-router-dom";
import Logo from "../../logoNav2.png";

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

  const [isLogged, setIsLogged] = useState('Login')
  React.useEffect(() => {
    if(localStorage.getItem('logged_in')){
      setIsLogged('Account');
    }
    else{
      setIsLogged('Login')
    }
  })
    return (
      <div className="Nav navContainer">
        <div className="Nav logoContainer">
          <NavLink to="/">
            <img
              className="Nav navLogo"
              src={Logo}
              alt="Site Logo"
            />
          </NavLink>
          <img
            onClick={menu}
            className="menu"
            src="https://img.icons8.com/external-blue-wire-juicy-fish/30/4a90e2/external-bars-ui-elements-blue-wire-blue-wire-juicy-fish-2.png"
            alt="toggleBtn"
          />
          {/* <div className="Nav logoName">Capsule</div> */}
        </div>
        <ul className={state.class2}>
        <div className={state.class4}>
          <li className={state.class1}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={state.class1}>
            <NavLink to="/shop">Store</NavLink>
          </li>
          <li className={state.class1}>
            <NavLink to="/cart">Cart</NavLink>
          </li>
          <li className={state.class1}>
            <NavLink to="/account">{isLogged}</NavLink>
          </li>
          </div>
        </ul>
      </div>
    );
  }

