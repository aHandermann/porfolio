import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <a className="icon" href="https://www.instagram.com/damn_hand/"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
        <a className="icon" href="https://dribbble.com/ahandermann"><FontAwesomeIcon icon={['fab', 'dribbble']} /></a>
        <a className="icon" href="https://twitter.com/adamhandermann"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
        <a className="icon" href="mailto:hello@damnhand.com?Subject=Hello%20again" target="_top"><FontAwesomeIcon icon={['fas', 'envelope']} /></a>
      </div>
    );
  }
}

export default Footer;
