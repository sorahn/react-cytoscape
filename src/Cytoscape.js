import React from "react";
import PropTypes from "prop-types";
import cytoscape from "cytoscape";
import styled from "styled-components";

const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
`;

const defaultNodeStyle = {
  selector: "node",
  style: {
    content: "data(id)",
    "font-size": 4,
    "background-color": "#ea8a31"
  }
};

const defaultEdgeStyle = {
  selector: "edge",
  style: {
    "curve-style": "haystack",
    "haystack-radius": 0,
    width: 5,
    opacity: 0.666,
    "line-color": "#fcc694"
  }
};

const defaultStyle = [defaultNodeStyle, defaultEdgeStyle];

const defaultLayout = {
  name: "circle",
  padding: 2
};

export default class Cytoscape extends React.Component {
  static defaultProps = {
    height: "700px",
    layout: defaultLayout,
    style: defaultStyle,
    width: "100%"
  };

  static propTypes = {
    elements: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { style, elements, layout } = this.props;
    cytoscape({ style, elements, layout, container: this.div });
  }

  render() {
    return (
      <Wrapper
        innerRef={c => (this.div = c)}
        height={this.props.height}
        width={this.props.width}
      />
    );
  }
}
