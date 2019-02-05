import React, { Component } from "react";
import Doggopedia from "./components/Doggopedia";
import Details from "./components/Details";
import wikipedia from "./api/wikipedia";

class App extends Component {
  state = { dog: null };

  onTermSubmit = async dogBreed => {
    try {
      const response = await wikipedia.get(
        `/api/rest_v1/page/summary/${dogBreed}`,
        {}
      );
      this.setState({ dog: response.data });
    } catch (error) {
      console.log(error);
      this.setState({ dog: "error" });
    }
  };

  quitMessage = () => {
    this.setState({ dog: null });
  };

  showDetails = async dogBreed => {
    let moreThanJustADog = [
      "akita",
      "boxer",
      "dalmatian",
      "labrador",
      "newfoundland",
      "pomeranian",
      "samoyed",
      "St._Bernard"
    ];
    if (moreThanJustADog.includes(dogBreed)) {
      dogBreed += "_(dog)"; //handles the disambiguation
    }
    try {
      const response = await wikipedia.get(
        `/api/rest_v1/page/summary/${dogBreed}`,
        {}
      );
      this.setState({ dog: response.data });
    } catch (error) {
      console.log(error);
      this.setState({ dog: "error" });
    }
  };

  Doggopedia = (
    <Doggopedia
      showDetails={this.showDetails}
      onFormSubmit={this.onTermSubmit}
    />
  );

  render() {
    return !this.state.dog
      ? this.Doggopedia
      : [
          this.Doggopedia,
          <Details dog={this.state.dog} handleQuit={this.quitMessage} />
        ];
  }
}

export default App;
