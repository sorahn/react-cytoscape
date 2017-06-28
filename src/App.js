import React, { Component } from "react";
import logo from "./logo.svg";
import axios from "axios";

import Cytoscape from "./Cytoscape";

class App extends Component {
  state = {
    data: {},
    p: 0
  };

  getData(p) {
    axios
      .post("http://localhost/ocpu/library/enrichmentmap/R/getJsonStr/json", {
        p
      })
      .then(result => this.setState({ data: JSON.parse(result.data[0]) }));
  }

  componentDidMount() {
    this.getData(this.state.p);
  }

  componentWillUpdate(props, state) {
    if (this.state.p !== state.p) {
      this.getData(state.p);
    }
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Cytoscape elements={data} />
        <button onClick={() => this.setState({ p: 1 })}>Click</button>
      </div>
    );
  }
}

export default App;
