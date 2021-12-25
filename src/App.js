import React,{useState} from "react";
import { Routes as Switch, Route } from "react-router-dom";
import Checkout from "./Components/Checkout/checkout";
import Shop from "./Components/Shop/Shop";
import Login from "./Components/Account/Login";
import Register from "./Components/Account/Register";
import Home from './Components/Home/Home'
import Cart1 from "./Components/Cart/Cart1";
import AddField from "./Components/Admin/addField";
import NotFound from "./Components/NotFound/notfound";
import UsersContainer from "./Components/Admin/usersContainer";
import Submitted from "./Components/Admin/Submitted";
import Navbar from "./Components/NavBar/Navbar";
import AyaNav from './Components/NavBar/AyaNav'
import Footer from './Components/Footer/Footer';
import Footer2 from './Components/Footer/Footer2';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem("logged_in")))
const [items, setitems] = useState(JSON.parse(localStorage.getItem("items")))
  const handleChangeitem=()=>{
    setitems(JSON.parse(localStorage.getItem('items')))
  }

  const handleChangeRole = () => {
    setIsLoggedIn(JSON.parse(localStorage.getItem("logged_in")))
  };
  const deleteCard = (index1) => {
    let deleted = JSON.parse(localStorage.getItem("items"));
    deleted.splice(index1, 1);
    localStorage.setItem("items", JSON.stringify(deleted));
    setitems(JSON.parse(localStorage.getItem("items")))
  };
  return (
    <>
            {/* <Navbar loggedIn={isLoggedIn}/> */}
            <AyaNav/>
            <Switch>
            <Route
                path="/products"
                element={<AddField items={items} deleteCard={deleteCard} handleChangeitem={handleChangeitem}/>}
              />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/orders" element={<Submitted />} />
              <Route path="/" element={<Home />} />
              <Route
                path="/account"
                element={<Login handleChangeRole={handleChangeRole} />}
              />
              <Route path="/register" element={<Register />} />
              <Route path="/cart" element={<Cart1 />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="*" element={<NotFound />} />
            </Switch>
            <Footer2/>
          </>
  )
}

export default App