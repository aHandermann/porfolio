import React, { Component } from "react";
import Layout from "../../common/layout";
import "../profolio.css";
import "../../App";

class ProGuitarShop extends Component {
  render() {
    return (
      <Layout>
        <div className="hello">
          <h1 className="bold">Pro Guitar Shop Branding</h1>
          <div className="sub">
            <h2 className="subhead color">
              Brand Design - Tone Report Weekley
            </h2>
          </div>
          <p className="portinfo">
            While working at The Great Soceity, I have the oportunity to work
            with Trail Butter on refreashing their packaging. I wanted their
            package to feel adventourous and tie to it's outdoor origin, while
            also apealing to their primary customer and selling location, Whole
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
