import React, { Component } from 'react';
import { Link } from "react-router-dom";

// Images
import logo from '../../images/logo.png';
import pdf from '../../images/ahandermann_resume.pdf';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img alt="DAMN HAND" className="logo" src={logo} />
        <nav>
          <ul>
            <li><Link to="/">WORK</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><a href={pdf} rel="noopener noreferrer" target="_blank">RESUME</a></li>
            <li><Link to="/">CONTACT</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
