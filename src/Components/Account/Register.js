import React, { Component } from "react";
import { Link } from "react-router-dom";
import adminPic from "../../Assets/accounts-assets/admin.png";
import { countries } from "../Checkout/countries";
import "./accounts.css";
import Hero from "../Hero/Hero";

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      country:"",
      phone:"",
      img: "",
      email: "",
      password: "",
      role: "user",
    };
  }

  handleSubmit = (e) => {
    if (
      fnameValid &&
      lnameValid &&
      emailValid &&
      passwordValid &&
      repasswordValid
    ) {
      //create user in localStorage
      let user = {
        fname: this.state.fname,
        lname: this.state.lname,
        country: this.state.country,
        phone: this.state.phone,
        img: this.state.img,
        email: this.state.email,
        password: this.state.password,
        role: this.state.role,
      };
      if (!localStorage.getItem("users")) {
        let users = [];
        let adminUser = {
          fname: "admin",
          lname: "admin",
          country:"Jordan",
          phone:"0777777777",
          img: adminPic,
          email: "admin@admin.com",
          password: "123321",
          role: "admin",
        };
        users.push(adminUser);
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Successfully registration !");
      } else {
        let foundEmail = false;
        let myUsers = JSON.parse(localStorage.getItem("users"));
        for (let i = 0; i < myUsers.length; i++) {
          if (myUsers[i].email === this.state.email) {
            foundEmail = true;
            break;
          }
        }
        if (foundEmail) {
          e.preventDefault();
          alert("Email Found !");
        } else {
          myUsers.push(user);
          localStorage.setItem("users", JSON.stringify(myUsers));
        }
      }
    } else {
      e.preventDefault();
      alert("Edit Data!!!!");
    }
  };
  validator = (e) => {
    switch (e.target.id) {
      case "fname":
        if (e.target.value.length >= 3) {
          fnameValid = true;
          this.setState({ fname: e.target.value });
          document.getElementById("RU-fname").innerText = "";
        } else {
          fnameValid = false;
          this.setState({ fname: "" });
          document.getElementById(
            "RU-fname"
          ).innerHTML = `<i class="fas fa-times"></i> First name must be longer than 3 characters`;
        }
        break;

      case "lname":
        if (e.target.value.length >= 3) {
          lnameValid = true;
          this.setState({ lname: e.target.value });
          document.getElementById("RU-lname").innerText = "";
        } else {
          lnameValid = false;
          this.setState({ lname: "" });
          document.getElementById(
            "RU-lname"
          ).innerHTML = `<i class="fas fa-times"></i> Last name must be longer than 3 characters`;
        }
        break;

      case "country":
        this.setState({country:e.target.value})
        break;
      
      case "phone":
        this.setState({phone:e.target.validator})
        break;

      case "img-url":
        this.setState({ img: e.target.value });
        break;

      case "email":
        emailValid = true;
        this.setState({ email: e.target.value });
        break;

      case "password":
        if (e.target.value.length > 5) {
          passwordValid = true;
          this.setState({ password: e.target.value });
          document.getElementById("RU-password").innerText = "";
        } else {
          passwordValid = false;
          this.setState({ password: "" });
          document.getElementById(
            "RU-password"
          ).innerHTML = `<i class="fas fa-times"></i> Password must be longer than 5 characters`;
        }
        break;

      case "repassword":
        if (e.target.value === this.state.password) {
          repasswordValid = true;
          document.getElementById("RU-repassword").innerText = "";
        } else {
          repasswordValid = false;
          document.getElementById(
            "RU-repassword"
          ).innerHTML = `<i class="fas fa-times"></i> Password don't match!`;
        }
        break;

      default:
        alert("Impossible Error");
    }
  };
  render() {
    return (
      <>
      <Hero title="Register Page"/>
      <div id="accounts-form-container">
        <div>
        <h1>Register</h1>
        <fieldset id="register-fieldset">
          <form action="/" id="register-form" onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="fname">
                First Name : <span className="accounts-important">*</span>{" "}
              </label>
              <br />
              <input
                type="text"
                id="fname"
                placeholder="Zaid"
                onChange={this.validator}
                required
              />
              <p className="error" id="RU-fname"></p>
            </div>
            <div>
              <label htmlFor="lname">
                Last Name : <span className="accounts-important">*</span>{" "}
              </label>
              <br />
              <input
                type="text"
                id="lname"
                placeholder="Samamah"
                onChange={this.validator}
                required
              />
              <p className="error" id="RU-lname"></p>
            </div>
            <div>
              <label htmlFor="country">
                Country : <span className="accounts-important">*</span>
              </label>
              <br />
              <select id="country" class="select-register" onChange={this.validator} required>
                {countries.map((element, i) => {
                  return <option key={i} value={element.name}>{element.name}</option>;
                })}
              </select>
            </div>
            <div>
              <label htmlFor="phone">
                Phone Number : <span className="accounts-important">*</span>
              </label>
              <br />
              <input
                type="tel"
                minLength="10"
                maxLength="14"
                id="phone"
                placeholder="07xxxxxxxx"
                required
              />
            </div>
            <div>
              <label htmlFor="img-url">Profile Image : </label>
              <br />
              <input type="url" id="img-url" onChange={this.validator} />
            </div>
            <div>
              <label htmlFor="email">
                Email Address : <span className="accounts-important">*</span>
              </label>
              <br />
              <input
                type="email"
                id="email"
                placeholder="username@domain.com"
                onChange={this.validator}
                required
              />
            </div>
            <div>
              <label htmlFor="password">
                Password : <span className="accounts-important">*</span>
              </label>
              <br />
              <input
                type="password"
                id="password"
                className="register-first-password"
                onChange={this.validator}
                required
              />
              <p className="error" id="RU-password"></p>
            </div>
            <div>
              <label htmlFor="repassword">
                Repeat Password : <span className="accounts-important">*</span>
              </label>
              <br />
              <input
                type="password"
                id="repassword"
                onChange={this.validator}
                required
              />
              <p className="error" id="RU-repassword"></p>
            </div>
            <div>
              <button type="submit" className="accounts-form-btn">
                Register
              </button>
              <br />
              <br/>
              <Link to="/account">
              Already Have an account? Sign in here!
          </Link>
            </div>
          </form>
        </fieldset>
      </div>
      </div>
      </>
    );
  }
}
let fnameValid, lnameValid, emailValid, passwordValid, repasswordValid;
export default Register;
