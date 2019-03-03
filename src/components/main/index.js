import React, { Component } from "react";
import { Link } from "react-router-dom";
import Layout from "../common/layout";

class Main extends Component {
  render() {
    return (
      <Layout>
        <div className="hello homehello">
          <h1 className="bold">HI. I'M ADAM</h1>
          <div className="sub">
            <h2 className="subhead">
              I AM A <span>BRAND AND WEB</span> DESIGNER
            </h2>
          </div>
        </div>
        <div className="work" id="work">
          <div className="work-row">
            <Link to="/portfolio/trailbutter">
              {" "}
              <div className="work-image work-hover trail" />{" "}
            </Link>
            <Link to="/portfolio/vans">
              {" "}
              <div className="work-image work-hover vans" />{" "}
            </Link>
          </div>
          <div className="work-row">
            <Link to="/portfolio/guitar">
              {" "}
              <div className="work-image work-hover guitar" />{" "}
            </Link>
            <Link to="/portfolio/cotton">
              {" "}
              <div className="work-image work-hover cotton" />{" "}
            </Link>
          </div>
          <div className="work-row">
            <Link to="/portfolio/local">
              {" "}
              <div className="work-image work-hover local" />{" "}
            </Link>
            <Link to="/portfolio/white">
              {" "}
              <div className="work-image work-hover white" />{" "}
            </Link>
          </div>
        </div>
        <div className="contact" id="contact">
          <h1>LET'S CONNECT</h1>
          <p>
            {" "}
            Have a project you want to work on, or want to grab coffee? Fell
            free to get in touch!
          </p>
          <a
            className="helloemail"
            href="mailto:hello@damnhand.com?Subject=Hello%20again"
            target="_top"
          >
            <h2>hello@damnhand.com</h2>
          </a>
        </div>
      </Layout>
    );
  }
}

export default Main;
