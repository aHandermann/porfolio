import React, { Component } from "react";
import Layout from "../../common/layout";
import "../portfolio.css";

class ProGuitarShop extends Component {
  render() {
    return (
      <Layout>
        <div className="hello">
          <h1 className="bold guitarhello">POSTER WALL</h1>
          <div className="sub">
            <h2 className="subhead color">PRINT DESIGN - NIKE VALIANT LABS</h2>
          </div>
          <p className="portinfo">
            While working at Nike, my team (Nike Valiant Labs) wanted to add
            something to make our space pop. I designed a series of posters
            based on our teams values. Ranging from illustation to typography.
            After finishing the designs we got them printed I used wheat paste
            to apply the posers to wall.
          </p>
        </div>
        <div className="project">
          <div className="project-image post-1" />
          <div className="project-image post-2" />
          <div className="project-image-large post-3" />
        </div>
      </Layout>
    );
  }
}

export default ProGuitarShop;
