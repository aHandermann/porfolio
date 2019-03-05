import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import ScrollToTop from "./common/scroll_to_top";
import About from "./about";
import Main from "./main";
import Portfolio from "./portfolio";
import TrialButter from "./portfolio/trailbutter";
import VansProject from "./portfolio/vans";
import CalendarIllustration from "./portfolio/musket";
import PosterWall from "./portfolio/poster";
import ProGuitarShop from "./portfolio/guitar";
import CottonCraft from "./portfolio/cotton";
import LocalApp from "./portfolio/local";
import WhiteProject from "./portfolio/white";
import "./App.css";

library.add(fab, fas);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ScrollToTop>
              <Route path="/" exact component={Main} />
              <Route path="/about" exact component={About} />
              <Route path="/portfolio" exact component={Portfolio} />

              {/* portfolio pages */}
              <Route
                path="/portfolio/trailbutter"
                exact
                component={TrialButter}
              />
              <Route path="/portfolio/vans" exact component={VansProject} />
              <Route
                path="/portfolio/musket"
                exact
                component={CalendarIllustration}
              />
              <Route path="/portfolio/poster" exact component={PosterWall} />
              <Route path="/portfolio/guitar" exact component={ProGuitarShop} />
              <Route path="/portfolio/cotton" exact component={CottonCraft} />
              <Route path="/portfolio/local" exact component={LocalApp} />
              <Route path="/portfolio/white" exact component={WhiteProject} />
            </ScrollToTop>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
