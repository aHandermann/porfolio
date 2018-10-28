import React, { Component } from "react";
import Layout from "../../common/layout";
import "../profolio.css";
import "../../App";

class TrialButter extends Component {
  render() {
    return (
      <Layout>
        <div className="hello">
          <h1 className="bold">TRAIL BUTTER</h1>
          <div className="sub">
            <h2 className="subhead color">
              Package Design - The Great Soceity
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
          <div className="project-image trail-1" />
          <div className="project-image trail-2" />
          <div className="project-image-large trail-3" />
        </div>
      </Layout>
    );
  }
}

export default TrialButter;
