import React, { Component } from "react";
import Layout from "../../common/layout";
import "../portfolio.css";

class TrialButter extends Component {
  render() {
    return (
      <Layout>
        <div className="hello">
          <h1 className="bold">TRAIL BUTTER</h1>
          <div className="sub">
            <h2 className="subhead color">
              Package Design - The Great Society
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
          <div className="project-image trail-1" />
          <div className="project-image trail-2" />
          <div className="project-image-large trail-3" />
        </div>
      </Layout>
    );
  }
}

export default TrialButter;
