import React, { Component } from "react";
import Chances from "../pages/chances";
import Plan from "../pages/plan";
import Counts from "../pages/counts";

export default class index extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Chances />
        </div>
          <Plan />
          <Counts />
      </div>
    );
  }
}
