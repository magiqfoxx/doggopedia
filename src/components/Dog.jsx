import React, { Component } from "react";

import { listOfDogs } from "./data";

class Dog extends Component {
  state = { mouseover: false };

  styleDog = {
    filter: "brightness(50%)"
  };

  dogName = this.props.dog.replace(/[_-]/g, " ");

  findPicture = () => {
    return Object.keys(listOfDogs).find(
      key => listOfDogs[key] === this.props.dog
    );
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
            className="dog--image"
            src={`./img/${this.findPicture()}.jpg`}
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
            className="dog--image"
            src={`./img/${this.findPicture()}.jpg`}
            alt={`${this.props.dog}`}
            style={this.styleDog} //adds styling to hovered element
          />
          <div className="dog--image--name">{this.dogName}</div>
        </div>
      );
    }
  };

  render() {
    return this.renderContent();
  }
}

export default Dog;
