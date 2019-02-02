import React, { Component } from "react";

class Details extends Component {
  state = {};

  dog = this.props.dog;
  name = this.dog.displaytitle;
  summary = this.dog.extract;
  img = this.dog.originalimage.source;

  handleQuit = () => {
    this.props.handleQuit();
  };
  render() {
    return (
      <div className="details--background" onClick={this.handleQuit}>
        <div className="details">
          <img src={this.img} alt={this.name} />
          <h2>{this.name}</h2>
          <p className="details--summary" />
        </div>
      </div>
    );
  }
}

export default Details;
