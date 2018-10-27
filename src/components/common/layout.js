import React, { Component } from 'react';
import Footer from './footer';
import Header from './header';

class Layout extends Component {
  render() {
    return (
      <div id="wrapper">
        <Header />
          {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
