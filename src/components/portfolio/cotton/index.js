import React, { Component } from "react";
import Layout from "../../common/layout";
import "../portfolio.css";
import "../../App";

class CottonCraft extends Component {
  render() {
    return (
      <Layout>
        <div className="hello">
          <h1 className="bold">COTTON CRAFT</h1>
          <div className="sub">
            <h2 className="subhead color">
              Brand Design - The Modern College of Art and Design
            </h2>
          </div>
          <p className="portinfo">
            Cotton Craft was an idea for a passion project while in college. I
            love doing vector illustrations and branding, so I threw them
            together to make some awesome pocket tees. I created the branding,
            tags, shirts, patterns and the packaging to ship in. Also, to stand
            out in the mail, we shipped in a patterned poster tube.
          </p>
        </div>
        <div className="project">
          <div className="project-image cotton-1" />
          <div className="project-image cotton-2" />
          <div className="project-image-large cotton-3" />
        </div>
      </Layout>
    );
  }
}

export default CottonCraft;
