import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import About from './about';
import Main from './main';
import Portfolio from './portfolio';
import './App.css';

library.add(fab, fas);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/" exact component={Main} />
            <Route path="/about" exact component={About} />
            <Route path="/portfolio" exact component={Portfolio} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
