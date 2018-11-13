import React, { Component } from "react";
import Post from "./Post";

class DisplayContent extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }

  onClick = () => {
    this.setState({
      show: true
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.onClick}>Click Me</button>
        {this.state.show ? <Post /> : <h3>Click the Button to see Data</h3>}
      </div>
    );
  }
}

export default DisplayContent;
