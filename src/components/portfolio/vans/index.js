import React, { Component } from "react";
import Layout from "../../common/layout";
import "../portfolio.css";

class VansProject extends Component {
  render() {
    return (
      <Layout>
        <div className="hello">
          <h1 className="bold">VANS RETAIL</h1>
          <div className="sub">
            <h2 className="subhead color">
              Print Design - The Modern College of Art and Design
            </h2>
          </div>
          <p className="portinfo">
            Project for ym final portfolio in College. I created a seasonal retail campaign for Vans stores. The idea behind the campaign was to take inspiration from old surf posters and art, and market their popular shoe "The Authentic." I used a beachy color scheme with simple, screen printed graphics. As well as creating a custome type for the campaign.
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
