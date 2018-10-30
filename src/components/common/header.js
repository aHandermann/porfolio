import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./header.css";

// Images
import logo from "../../images/logo.png";
import pdf from "../../images/ahandermann_resume.pdf";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img alt="DAMN HAND" className="logo" src={logo} />
        <nav className="mainnav">
          <ul>
            <li>
              <Link className="worknav" to="/#work">
                WORK
              </Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <a href={pdf} rel="noopener noreferrer" target="_blank">
                RESUME
              </a>
            </li>
            <li>
              <Link className="contactnav" to="/#contact">
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
