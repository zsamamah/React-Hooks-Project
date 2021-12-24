import React from "react";
import "./admin.css";

function Admin() {
  const deleteCard = (index1) => {
    this.deleted = JSON.parse(localStorage.getItem("items"));
    this.deleted.splice(index1, 1);
    localStorage.setItem("items", JSON.stringify(this.deleted));
    this.setState({
      items: JSON.parse(localStorage.getItem("items")),
    });
  };
  return (
    <p>hahahah</p>
  )
}

export default Admin