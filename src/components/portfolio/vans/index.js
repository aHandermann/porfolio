import React, { Component } from "react";
import Layout from "../../common/layout";
import "../profolio.css";
import "../../App";

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
            While working at The Great Soceity, I have the oportunity to work
            with Trail Butter on refreashing their packaging. I wanted their
            package to feel adventourous and tie to it's outdoor origin, while
            also apealing to their primary customer and selling location, Whole
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
