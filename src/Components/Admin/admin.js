import React, { Component } from "react";
import "./admin.css";

export default class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // items: JSON.parse(localStorage.getItem("items")),
    };
  }

  deleteCard = (index1) => {
    this.deleted = JSON.parse(localStorage.getItem("items"));
    this.deleted.splice(index1, 1);
    localStorage.setItem("items", JSON.stringify(this.deleted));
    this.setState({
      items: JSON.parse(localStorage.getItem("items")),
    });
  };



  render() {

    return(<p>hahahah</p>)
  }
}