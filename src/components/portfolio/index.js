import React, { Component } from 'react';
import Layout from '../common/layout';

class Portfolio extends Component {
  render() {
    return (
      <Layout>
        <div class="hello">
            <h1 class="bold">TRAIL BUTTER</h1>
            <div class="sub">
              <h2 class="subhead color">Package Design - The Great Soceity</h2>
            </div>
            <p class="portinfo">Nullam id dolor id nibh ultricies vehicula ut id elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
        </div>
        <div class="project">
          <div class="work-image trail"></div>
          <div class="work-image trail-2"></div>
          <div class="work-image-large trail-3"></div>
        </div>
      </Layout>
    );
  }
}

export default Portfolio;
