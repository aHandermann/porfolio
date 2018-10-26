import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import logo from '../../images/logo.png';
import pdf from '../../images/ahandermann_resume.pdf';

class Main extends Component {
  render() {
    return (
      <div id="wrapper">
        <div id="home" className="home">
          <div>
            <img className="logo" src={logo} />
            <nav>
              <ul>
                <li><a href="javascript:void(0)" onClick="goToByScroll('work')">WORK</a></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><a href={pdf} target="_blank">RESUME</a></li>
                <li><a href="javascript:void(0)" onClick="goToByScroll('contact')">CONTACT</a></li>
              </ul>
              <a className="drop-nav fa fa-bars" aria-hidden="true"></a>

            </nav>
            <div className="hello">
              <h1 className="bold">HI. I'M ADAM</h1>
              <div className="sub">
                <h2 className="subhead">I AM CURRENTLY <span>ACCEPTING</span> FREELANCE WORK</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="work">
          <div className="work-row">
            <Link to="/portfolio"> <div className="work-image work-hover trail"></div> </Link>
            <Link to="/portfolio"> <div className="work-image work-hover vans"></div> </Link>
          </div>
          <div className="work-row">
            <Link to="/portfolio"> <div className="work-image work-hover guitar"></div> </Link>
            <Link to="/portfolio"> <div className="work-image work-hover cotton"></div> </Link>
          </div>
          <div className="work-row">
            <Link to="/portfolio"> <div className="work-image work-hover local"></div> </Link>
            <Link to="/portfolio"> <div className="work-image work-hover white"></div> </Link>
          </div>
        </div>
        <div className="contact">
          <h1>LET'S CONNECT</h1>
          <p> HAVE A PROJECT YOU WANT TO WORK ON, OR JUST WANT TO GRAB COFFEE? FEEL FREE TO GET IN TOUCH.</p>
          <h2>hello@damnhand.com</h2>
        </div>
        <div className="footer">
          <a className="icon" href="https://www.instagram.com/damn_hand/"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
          <a className="icon" href="https://dribbble.com/ahandermann"><FontAwesomeIcon icon={['fab', 'dribbble']} /></a>
          <a className="icon" href="https://twitter.com/adamhandermann"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
          <a className="icon" href="mailto:hello@damnhand.com?Subject=Hello%20again" target="_top"><FontAwesomeIcon icon={['fas', 'envelope']} /></a>
        </div>
      </div>
    );
  }
}

export default Main;
