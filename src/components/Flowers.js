import React, { Component } from "react";

class Flowers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "flowers"
    };
  }

  onFlowerSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return <div>{this.onFlowerSubmit}</div>;
  }
}

export default Flowers;
