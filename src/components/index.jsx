import React, { Component } from "react";
import Chances from "../pages/chances";
import Plan from "../pages/plan";
import Counts from "../pages/counts";
import EducationalCarousel from "../pages/Carousel";
import Compensation from "../pages/Compensation";
import Darection from "../pages/darection";
import School from "../pages/School";
import Rate from "../pages/Rate";
import SuccessHistory from "../pages/SuccessHistory";
import Join from "../pages/Join";
import Footer from "../pages/Footer";

export default class index extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <EducationalCarousel />
          <Chances />
          <Plan />
          <Compensation />
        </div>
        <Plan />
        <Counts />
        <Plan />
        <Counts />
        <Darection />

        <Rate />
        <div className="container">
          <SuccessHistory />
          <Join />
        </div>
        <Footer />
        <Counts />
        <Rate />
        <Darection />
        <Plan />

        <School />
      </div>
    );
  }
}
