import React, { Component } from "react";
import Chances from "../pages/chances";
import EducationalCarousel from "../pages/Carousel";
import Compensation from "../pages/Compensation";

export default class index extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <EducationalCarousel />
          <Chances />
          <Compensation />
        </div>
      </div>
    );
  }
}
