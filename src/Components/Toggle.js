import React, { Component } from "react";

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }

  handleClick() {
    console.log(this);
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>
          {this.state.isToggleOn ? "On" : "Off"}
        </button>
      </div>
    );
  }
}

export default Toggle;
