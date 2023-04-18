import React from "react";
import "../assets/style/NavBar.css";

class NavBar extends React.Component {
  constructor() {
    super();
    this.navItems = [
      "Home",
      "Portfolio",
      "Skills",
      "Education",
      "Vlogs",
      "About",
    ];
    console.log(this.navItems);
  }

  render() {
    return (
      <nav>
        <ul>
          {this.navItems.map((item, i) => {
            console.log(i + " " + this.navItems.length);
            return i === this.navItems.length - 1 ? (
              <li key={item}>{item} </li>
            ) : (
              <li key={item}>{item} /</li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default NavBar;
