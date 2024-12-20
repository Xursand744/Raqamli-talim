import React, { Component } from "react";
import Chances from "./chances";
import Plan from "./plan";
import Counts from "./counts";
import Compensation from "./Compensation";
import Darection from "./darection";
import School from "./School";
import Rate from "./Rate";
import SuccessHistory from "./SuccessHistory";
import Join from "./Join";
import Footer from "./Footer";
import Test from "./test";

export default function HomePage() {
  return (
    <div>
        <Test />
      <div className="container">
        <Chances />
      </div>
      <Plan />
      <Compensation />
      <Counts />
      <Rate />
      <Darection />

      <div className="container">
        <SuccessHistory />
      </div>

      <School />
      <Join />
      <Footer />
    </div>
  );
}
