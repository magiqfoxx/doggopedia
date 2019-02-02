import React, { Component } from "react";

class Dog extends Component {
  state = { mouseover: false };

  styleDog = {
    filter: "brightness(50%)"
  };
  showDetails = () => {
    this.props.showDetails(this.props.dog);
  };
  renderContent = () => {
    if (!this.state.mouseover) {
      return (
        <div
          className="dog"
          onMouseEnter={() => this.setState({ mouseover: true })}
        >
          <img
            className="main--image"
            src={`./img/${this.props.dog}.jpg`}
            alt={`${this.props.dog}`}
          />
        </div>
      );
    } else {
      return (
        <div
          className="dog"
          onMouseLeave={() => this.setState({ mouseover: false })}
          onClick={this.showDetails}
        >
          <img
            className="main--image"
            src={`./img/${this.props.dog}.jpg`}
            alt={`${this.props.dog}`}
            style={this.styleDog}
          />
          {<div className="main--image--name">{this.props.dog}</div>}
        </div>
      );
    }
  };
  render() {
    return this.renderContent();
  }
}

export default Dog;
