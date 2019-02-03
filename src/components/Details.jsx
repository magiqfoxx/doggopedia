import React, { Component } from "react";

class Details extends Component {
  state = {};

  componentDidMount() {
    let dog = this.props.dog;
    if (dog !== "error") {
      if (dog.displaytitle.includes("(dog)")) {
        this.setState({ name: dog.displaytitle.slice(0, -5) });
      } else {
        this.setState({ name: dog.displaytitle });
      }
      this.setState({ summary: dog.extract });
      this.setState({ img: dog.originalimage.source });
    } else {
      this.setState({ name: "Unavailable" });
      this.setState({ summary: "There seems to be a problem" });
      this.setState({ img: "" });
    }
  }

  handleQuit = () => {
    this.props.handleQuit();
  };
  stopPropagation = e => {
    e.stopPropagation();
  };
  render() {
    return (
      <React.Fragment>
        <div className="details__background" onClick={this.handleQuit} />
        <div className="details" onClick={this.stopPropagation}>
          <div className="details--x__for-mobile" onClick={this.handleQuit}>
            X
          </div>
          <img
            className="details--image"
            src={this.state.img}
            alt={this.state.name}
          />
          <h2 className="details--name">{this.state.name}</h2>
          <p className="details--summary">{this.state.summary}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Details;
