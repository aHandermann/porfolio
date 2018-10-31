import React, { Component } from "react";
import Layout from "../../common/layout";
import "../portfolio.css";

class LocalApp extends Component {
  render() {
    return (
      <Layout>
        <div className="hello">
          <h1 className="bold">LOCAL APP</h1>
          <div className="sub">
            <h2 className="subhead color">
              UX Design - The Modern College of Art and Design
            </h2>
          </div>
          <p className="portinfo">
            While in college, I had an idea for an app to help people get more
            invovled in their local music scene. The app was called local, you
            could use to look up local shows near you that are going on that
            night, that week, or that month. You can even follow you favotire
            venues to make sure you don't miss any good shows. I created a logo
            and branding for the app, as well as designed
            various&nbsp;screens,&nbsp;and&nbsp;advertisments.
          </p>
        </div>
        <div className="project">
          <div className="project-image local-1" />
          <div className="project-image local-2" />
          <div className="project-image-large local-3" />
        </div>
      </Layout>
    );
  }
}

export default LocalApp;
