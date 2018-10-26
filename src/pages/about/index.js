import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import logo from '../../images/logo.png';
import me from '../../images/me.png';
import pdf from '../../images/ahandermann_resume.pdf';

class About extends Component {
  render() {
    return (
      <div id="wrapper">
        <div>
          <img classNameName="logo" src={logo} />
          <nav>
            <ul>
              <li><Link to="/">WORK</Link></li>
              <li><Link to="/about">ABOUT</Link></li>
              <li><a href={pdf} target="_blank">RESUME</a></li>
              <li><Link to="/">CONTACT</Link></li>
            </ul>
            <a className="drop-nav fa fa-bars" aria-hidden="true"></a>
          </nav>
        </div>
        <div className="about">
          <img src={me} className="me" />
          <div className="bio">
            <h1 className="bold">HI.I'M ADAM</h1>
            <p className="portinfo">I'm a designer, skater, and musician living in Portland, Oregon. I'm passionate about making things look cool,  and am always learning new skills. I've worked with brand such as Nike, Trail Butter, Pair of Theives, and Boss. </p>
            <h2>hello@damnhand.com</h2>
          </div>
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

export default About;
