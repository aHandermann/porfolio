import React, { Component } from "react";
import Layout from "../../common/layout";
import "../profolio.css";
import "../../App";

class LocalApp extends Component {
  render() {
    return (
      <Layout>
        <div className="hello">
          <h1 className="bold">Local App</h1>
          <div className="sub">
            <h2 className="subhead color">
              UX Design - The Modern College of Art and Design
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
          <div className="project-image local-1" />
          <div className="project-image local-2" />
          <div className="project-image-large local-3" />
        </div>
      </Layout>
    );
  }
}

export default LocalApp;
