import React, { Component } from "react";
import Layout from "../../common/layout";
import "../portfolio.css";
import "../../App";

class CottonCraft extends Component {
  render() {
    return (
      <Layout>
        <div className="hello">
          <h1 className="bold">12 MUSKETEERS </h1>
          <div className="sub">
            <h2 className="subhead color">ILLUSTRATION - 12 MUSKETEERS</h2>
          </div>
          <p className="portinfo">
            12 Musketeers is a yearly calendar run by alumni of the Modern
            College of Art and Design. The theme changes every year and this
            year the theme was CMYKliche. I was asked to create an illustration
            for the month of October. Inspired by cliche Halloween flash tattoo
            sheets, and horror imagery, I created various Halloween graphics and
            put them together in tattoo flash style.
          </p>
        </div>
        <div className="project">
          <div className="project-image musket-1" />
          <div className="project-image musket-2" />
          <div className="project-image-large musket-3" />
        </div>
      </Layout>
    );
  }
}

export default CottonCraft;
