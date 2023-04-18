import React from "react";

import BioDescription from "./BioDescription";

import "../assets/style/Bio.css";

import bioImg from "../assets/img/bio-image.jpg";

class Bio extends React.Component {
  render() {
    return (
      <div className="bio">
        <div className="bio__img-wrapper">
          <img src={bioImg} alt="bio-img"></img>
        </div>
        <BioDescription />
      </div>
      
    );
  }
}

export default Bio;
