import React, { Component } from "react";
import Doggopedia from "./components/Doggopedia";
import Details from "./components/Details";
import wikipedia from "./api/wikipedia";

class App extends Component {
  state = { dog: null };

  onTermSubmit = async dogBreed => {
    const response = await wikipedia.get(
      `/api/rest_v1/page/summary/${dogBreed}`,
      {}
    );
    this.setState({ dog: response.data });
  };

  quitMessage = () => {
    this.setState({ dog: null });
  };
  showDetails = async dogBreed => {
    console.log(dogBreed);
    const response = await wikipedia.get(
      `/api/rest_v1/page/summary/${dogBreed}`,
      {}
    );
    this.setState({ dog: response.data });
  };
  render() {
    return (
      <React.Fragment>
        <Doggopedia showDetails={this.showDetails} />
        {this.state.dog ? (
          <Details dog={this.state.dog} handleQuit={this.quitMessage} />
        ) : null}
        <button onClick={() => this.onTermSubmit("Husky")} />
      </React.Fragment>
    );
  }
}

export default App;
