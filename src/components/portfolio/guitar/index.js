import React, { Component } from "react";
import Layout from "../../common/layout";
import "../portfolio.css";

class ProGuitarShop extends Component {
  render() {
    return (
      <Layout>
        <div className="hello">
          <h1 className="bold">Pro Guitar Shop Branding</h1>
          <div className="sub">
            <h2 className="subhead color">
              Brand Design - Tone Report Weekly
            </h2>
          </div>
          <p className="portinfo">
            While working at The Great Society, I have the opportunity to work
            with Trail Butter on refreashing their packaging. I wanted their
            package to feel adventurous and tied to its outdoor origin, while
            also appealing to their primary customer and selling location, Whole
            Foods.
          </p>
        </div>
        <div className="project">
          <div className="project-image pgs-1" />
          <div className="project-image pgs-2" />
          <div className="project-image-large pgs-3" />
        </div>
      </Layout>
    );
  }
}

export default ProGuitarShop;
