import React, { Component } from "react";
import "./accounts.css";
import Login from './Login'
import { Routes, Route } from "react-router-dom";
import Register from ".Register";

export class Accounts extends Component {
  render() {
    return (
      <div id="accounts-form-container">
        <div>
            <Routes>
              <Route path="/account" element={<Login/>} />
              <Route path="/register" element={<Register />} />
            </Routes>
        </div>
      </div>
    );
  }
}
export default Accounts;
