import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import adminPic from "../../Assets/accounts-assets/admin.png";
import { countries } from "../Checkout/countries";
import "./accounts.css";
import Hero from "../Hero/Hero";

let fnameValid, lnameValid, emailValid, passwordValid, repasswordValid;

function Register() {
  let navigate = useNavigate()


const [fname, setFname] = useState("")
const [lname, setlname] = useState("")
const [country, setcountry] = useState("")
const [phone, setphone] = useState("")
const [img, setimg] = useState("")
const [email, setemail] = useState("")
const [password, setpassword] = useState("")
const [role, setrole] = useState("user")

  const handleSubmit = (e) => {
    if (
      fnameValid &&
      lnameValid &&
      emailValid &&
      passwordValid &&
      repasswordValid
    ) {
      //create user in localStorage
      let user = {
        fname: fname,
        lname: lname,
        country: country,
        phone: phone,
        img: img,
        email: email,
        password: password,
        role: role,
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
        navigate('/account')
      } else {
        let foundEmail = false;
        let myUsers = JSON.parse(localStorage.getItem("users"));
        for (let i = 0; i < myUsers.length; i++) {
          if (myUsers[i].email === email) {
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
          navigate('/account');
        }
      }
    } else {
      e.preventDefault();
      alert("Edit Data!!!!");
    }
  };
  const validator = (e) => {
    switch (e.target.id) {
      case "fname":
        if (e.target.value.length >= 3) {
          fnameValid = true;
          setFname(e.target.value)
          document.getElementById("RU-fname").innerText = "";
        } else {
          fnameValid = false;
          setFname("")
          document.getElementById(
            "RU-fname"
          ).innerHTML = `<i class="fas fa-times"></i> First name must be longer than 3 characters`;
        }
        break;

      case "lname":
        if (e.target.value.length >= 3) {
          lnameValid = true;
          setlname(e.target.value)
          document.getElementById("RU-lname").innerText = "";
        } else {
          lnameValid = false;
          setlname("")
          document.getElementById(
            "RU-lname"
          ).innerHTML = `<i class="fas fa-times"></i> Last name must be longer than 3 characters`;
        }
        break;

      case "country":
        setcountry(e.target.value)
        break;
      
      case "phone":
        setphone(e.target.value)
        break;

      case "img-url":
        setimg(e.target.value)
        break;

      case "email":
        emailValid = true;
        setemail(e.target.value)
        break;

      case "password":
        if (e.target.value.length > 5) {
          passwordValid = true;
          setpassword(e.target.value)
          document.getElementById("RU-password").innerText = "";
        } else {
          passwordValid = false;
          setpassword("")
          document.getElementById(
            "RU-password"
          ).innerHTML = `<i class="fas fa-times"></i> Password must be longer than 5 characters`;
        }
        break;

      case "repassword":
        if (e.target.value === password) {
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
        alert("Check id in register file");
    }
  };

  return (
    <>
      <Hero title="Register Page"/>
      <div id="accounts-form-container">
        <div>
        <h1 id="register_heading">Register</h1>
        <fieldset id="register-fieldset">
            <form onSubmit={handleSubmit}>
              <div id="register-form">
            <div className="formGroupRegisterMahdi">
              <label htmlFor="fname">
                First Name : <span className="accounts-important">*</span>{" "}
              </label>
              
              <input
                type="text"
                id="fname"
                placeholder="Zaid"
                onChange={validator}
                required
              />
              <p className="error" id="RU-fname"></p>
            </div>
            <div className="formGroupRegisterMahdi">
              <label htmlFor="lname">
                Last Name : <span className="accounts-important">*</span>{" "}
              </label>
              <input
                type="text"
                id="lname"
                placeholder="Samamah"
                onChange={validator}
                required
              />
              <p className="error" id="RU-lname"></p>
            </div>
            <div className="formGroupRegisterMahdi">
              <label htmlFor="country">
                Country : <span className="accounts-important">*</span>
              </label>
              <select id="country" className="select-register" onChange={validator} required>
                {countries.map((element, i) => {
                  return <option key={i} value={element.name}>{element.name}</option>;
                })}
              </select>
            </div>
            <div className="formGroupRegisterMahdi">
              <label htmlFor="phone">
                Phone Number : <span className="accounts-important">*</span>
              </label>
              
              <input
                type="tel"
                minLength="10"
                maxLength="14"
                id="phone"
                placeholder="07xxxxxxxx"
                onChange={validator}
                required
              />
            </div>
            <div className="formGroupRegisterMahdi">
              <label htmlFor="img-url">Profile Image : </label>
              
              <input type="url" id="img-url" onChange={validator} />
            </div>
            <div className="formGroupRegisterMahdi">
              <label htmlFor="email">
                Email Address : <span className="accounts-important">*</span>
              </label>
              
              <input
                type="email"
                id="email"
                placeholder="username@domain.com"
                onChange={validator}
                required
              />
            </div>
            <div className="formGroupRegisterMahdi">
              <label htmlFor="password">
                Password : <span className="accounts-important">*</span>
              </label>
              
              <input
                type="password"
                id="password"
                className="register-first-password"
                onChange={validator}
                required
              />
              <p className="error" id="RU-password"></p>
            </div>
            <div className="formGroupRegisterMahdi">
              <label htmlFor="repassword">
                Repeat Password : <span className="accounts-important">*</span>
              </label>
              
              <input
                type="password"
                id="repassword"
                onChange={validator}
                required
              />
              <p className="error" id="RU-repassword"></p>
            </div>
            
              </div>
              <div className="formGroupRegisterMahdi">
              <button type="submit" className="accounts-form-btn">
                Register
              </button>
              <Link to="/account" id="redirect-to-login-mahdi">
              Already Have an account? Sign in here!
          </Link>
                </div>
          </form>
        </fieldset>
      </div>
      </div>
      </>
  )
}

export default Register