import { render } from "@testing-library/react";
import { NavLink, Link } from "react-router-dom";
import React , {useState,useEffect} from "react";
import './NavBar.css';
import $ from 'jquery';
import logo from '../../logo.png'

export default function NavBarAdmin(props) {
  const [state,setState]=useState({ loggedin: localStorage.getItem("logged_in")})
  useEffect(() => {
    $(window).scroll(function () {
      if ($(this).scrollTop() >= 50) {
        $("#navBar").addClass("noTransparrent");
        $(".casting-color").removeClass("text-light");
      } else {
        $("#navBar").removeClass("noTransparrent");
        $(".casting-color").addClass("text-light");
      }
    }, [])
    
    const logout = () => {
      localStorage.removeItem("logged_in");
      setState({});
      props.handleChangeRole();
      return "/";
    }
    
    return (
      <nav
      id="navBar"
      className="navbar navbar-expand-lg navbar-light fixed-top "
      >
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav mx-auto mb-2 mb-lg-0 casting-color"
              id="custom-ul"
              >
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link text-light casting-color active"
                  aria-current="page"
                  >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/users" className="nav-link text-light casting-color">
                  Users
                </Link>
              </li>
              <li className="nav-item">
              <Link to={logout} >Log out !</Link>
              </li>
              <li className="nav-item">
                <Link to="/orders" className="nav-link text-light casting-color">
                  Orders
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  )
}

