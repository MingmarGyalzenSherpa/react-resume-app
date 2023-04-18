import React from "react";
import "../assets/style/Nav.css";

import NavBar from "./NavBar";

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <h1 className="nav__logo">MGS</h1>
        <NavBar />
      </div>
    );
  }
}

export default Nav;
