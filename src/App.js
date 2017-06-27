import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Cytoscape from "./Cytoscape";

class App extends Component {
  state = {
    data: {}
  };

  componentDidMount() {
    fetch("http://localhost:4000/data")
      .then(r => r.json())
      .then(d => this.setState({ data: d }));
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>

          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>

        {Object.keys(data).length && <Cytoscape elements={data} />}

      </div>
    );
  }
}

export default App;
