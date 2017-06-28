import React, { Component } from "react";
import logo from "./logo.svg";
import axios from "axios";

import Cytoscape from "./Cytoscape";

class App extends Component {
  state = {
    data: {}
  };

  componentDidMount() {
    axios
      .post("http://localhost/ocpu/library/enrichmentmap/R/getJsonStr/json", {
        p: 0
      })
      .then(result => this.setState({ data: JSON.parse(result.data[0]) }));
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Cytoscape elements={data} />
      </div>
    );
  }
}

export default App;
