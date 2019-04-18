import React, { Component } from "react";
import Layout from "../common/layout";
import me from "../../images/me.png";

class About extends Component {
  render() {
    return (
      <Layout>
        <div className="about">
          <img alt="Adam" src={me} className="me" />
          <div className="bio">
            <h1 className="bold">HI. I'M ADAM</h1>
            <p className="portinfo">
              I'm a designer, skater, and musician living in Portland, Oregon.
              I'm passionate about making things look cool, and am always
              learning new skills. I've worked with brand such as Nike, Trail
              Butter, Pair of Thieves, and Boss.{" "}
            </p>
            <h2>hello@damnhand.com</h2>
          </div>
        </div>
      </Layout>
    );
  }
}

export default About;
