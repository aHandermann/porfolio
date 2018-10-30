import React, { Component } from "react";
import Layout from "../../common/layout";
import "../portfolio.css";

class VansProject extends Component {
  render() {
    return (
      <Layout>
        <div className="hello">
          <h1 className="bold">Vans Retail</h1>
          <div className="sub">
            <h2 className="subhead color">
              Print Design - The Modern College of Art and Design
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
          <div className="project-image vans-1" />
          <div className="project-image vans-2" />
          <div className="project-image-large vans-3" />
        </div>
      </Layout>
    );
  }
}

export default VansProject;
