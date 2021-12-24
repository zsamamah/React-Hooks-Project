import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import Checkout from "./Components/Checkout/checkout";
import Shop from "./Components/Shop/Shop";
import Login from "./Components/Account/Login";
import Register from "./Components/Account/Register";
import Home from './Components/Home/Home'
import Cart from "./Components/Cart/Cart";
import AddField from "./Components/Admin/addField";
import NotFound from "./Components/NotFound/notfound";
import UsersContainer from "./Components/Admin/usersContainer";
import Submitted from "./Components/Admin/Submitted";
import Navbar from "./Components/NavBar/Navbar";
import Footer from './Components/Footer/Footer'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: JSON.parse(localStorage.getItem("logged_in")),
      items: JSON.parse(localStorage.getItem("items")),
    };
  }
  handleChangeitem=()=>{
    this.setState({items:JSON.parse(localStorage.getItem('items'))})
  }

  handleChangeRole = () => {
    this.setState({
      isLoggedIn: JSON.parse(localStorage.getItem("logged_in")),
    });
  };
  deleteCard = (index1) => {
    this.deleted = JSON.parse(localStorage.getItem("items"));
    this.deleted.splice(index1, 1);
    localStorage.setItem("items", JSON.stringify(this.deleted));
    this.setState({
      items: JSON.parse(localStorage.getItem("items")),
    });
  };

  render() {
        return (
          <>
            <Navbar loggedIn={this.state.isLoggedIn}/>
            <Switch>
            <Route
                path="/products"
                element={<AddField items={this.state.items} deleteCard={this.deleteCard} handleChangeitem={this.handleChangeitem}/>}
              />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/orders" element={<Submitted />} />
              <Route path="/" element={<Home />} />
              <Route
                path="/account"
                element={<Login handleChangeRole={this.handleChangeRole} />}
              />
              <Route path="/register" element={<Register />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="*" element={<NotFound />} />
            </Switch>
            <Footer/>
          </>
        );
  }
}

export default App;
