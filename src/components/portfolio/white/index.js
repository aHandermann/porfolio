import React, { Component } from "react";
import Layout from "../../common/layout";
import "../profolio.css";
import "../../App";

class WhiteProject extends Component {
  render() {
    return (
      <Layout>
        <div className="hello">
          <h1 className="bold">WHITE POMADE</h1>
          <div className="sub">
            <h2 className="subhead color">
              Package Design - The Modern College of Art and Design
            </h2>
          </div>
          <p className="portinfo">
            For my final portfolio at college, I wanted to create a limited
            edition package for a pomade called White. The concept I wanted to
            go with was simple, make everything white. I embossing and light
            grey to define shapes and important information, and even took
            photography of people covered in white paint.
          </p>
        </div>
        <div className="project">
          <div className="project-image white-1" />
          <div className="project-image white-2" />
          <div className="project-image-large white-3" />
        </div>
      </Layout>
    );
  }
}

export default WhiteProject;
