import React, { Component } from "react";
import Footer from "./footer";
import Header from "./header";
import "./header.css";

class Layout extends Component {
  render() {
    return (
      <div id="wrapper">
        <Header className="mainnav" />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
