import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import logo from '../../images/logo.png';
import pdf from '../../images/ahandermann_resume.pdf';

class Portfolio extends Component {
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
        <div class="hello">
            <h1 class="bold">TRAIL BUTTER</h1>
            <div class="sub">
              <h2 class="subhead color">Package Design - The Great Soceity</h2>
            </div>
            <p class="portinfo">Nullam id dolor id nibh ultricies vehicula ut id elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
        </div>
        <div class="project">
          <a href="#"> <div class="work-image trail"></div> </a>
          <a href="#"> <div class="work-image trail-2"></div> </a>
          <a href="#"> <div class="work-image-large trail-3"></div> </a>
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

export default Portfolio;
