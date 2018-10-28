import React, { Component } from "react";
import { Link } from "react-router-dom";
import Layout from "../common/layout";

class Main extends Component {
  render() {
    return (
      <Layout>
        <div className="hello">
          <h1 className="bold">HI. I'M ADAM</h1>
          <div className="sub">
            <h2 className="subhead">
              I AM A <span>BRAND AND WEB</span> DESIGNER
            </h2>
          </div>
        </div>
        <div className="work">
          <div className="work-row">
            <Link to="/portfolio/trailbutter">
              {" "}
              <div className="work-image work-hover trail" />{" "}
            </Link>
            <Link to="/portfolio">
              {" "}
              <div className="work-image work-hover vans" />{" "}
            </Link>
          </div>
          <div className="work-row">
            <Link to="/portfolio">
              {" "}
              <div className="work-image work-hover guitar" />{" "}
            </Link>
            <Link to="/portfolio">
              {" "}
              <div className="work-image work-hover cotton" />{" "}
            </Link>
          </div>
          <div className="work-row">
            <Link to="/portfolio">
              {" "}
              <div className="work-image work-hover local" />{" "}
            </Link>
            <Link to="/portfolio">
              {" "}
              <div className="work-image work-hover white" />{" "}
            </Link>
          </div>
        </div>
        <div className="contact">
          <h1>LET'S CONNECT</h1>
          <p>
            {" "}
            HAVE A PROJECT YOU WANT TO WORK ON, OR JUST WANT TO GRAB COFFEE?
            FEEL FREE TO GET IN TOUCH.
          </p>
          <h2>hello@damnhand.com</h2>
        </div>
      </Layout>
    );
  }
}

export default Main;
