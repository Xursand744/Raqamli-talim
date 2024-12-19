import React, { Component } from "react";
import Chances from "../pages/chances";
import EducationalCarousel from "../pages/Carousel";

export default class index extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <EducationalCarousel />
          <Chances />
        </div>
      </div>
    );
  }
}
