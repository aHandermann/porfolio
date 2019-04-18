import React, { Component } from "react";
import Layout from "../../common/layout";
import "../portfolio.css";

class ProGuitarShop extends Component {
  render() {
    return (
      <Layout>
        <div className="hello">
          <h1 className="bold guitarhello">PRO GUITAR SHOP</h1>
          <div className="sub">
            <h2 className="subhead color">Brand Design - Tone Report Weekly</h2>
          </div>
          <p className="portinfo">
            Our parent company at Tone Report Weekley, Pro Guitar Shop had a
            very dated brand. I set out to update the branding while still
            pulling heritage from the original mark and the owner of the shop. I
            keep the black and gold colors and a "P" icon. I came up with a
            solution that includes the letters PGS in the mark as well as
            resembling&nbsp;a&nbsp;guitar&nbsp;stock.
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
