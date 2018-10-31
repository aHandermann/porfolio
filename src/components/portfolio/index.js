import React, { Component } from "react";
import Layout from "../common/layout";

class Portfolio extends Component {
  render() {
    return (
      <Layout>
        <div class="hello">
          <h1 class="bold">TRAIL BUTTER</h1>
          <div class="sub">
            <h2 class="subhead color">Package Design - The Great Society</h2>
          </div>
          <p class="portinfo">
            While working at The Great Society, I have the opportunity to work
            with Trail Butter on refreashing their packaging. I wanted their
            package to feel adventurous and tied to its outdoor origin, while
            also appealing to their primary customer and selling location, Whole
            Foods.
          </p>
        </div>
        <div class="project">
          <div class="work-image trail" />
          <div class="work-image trail-2" />
          <div class="work-image-large trail-3" />
        </div>
      </Layout>
    );
  }
}

export default Portfolio;
