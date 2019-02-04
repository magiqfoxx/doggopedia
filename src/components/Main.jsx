import React, { Component } from "react";
import Dog from "./Dog";

class Main extends Component {
  state = {};
  listOfDogs = [
    "akita",
    "basset_hound",
    "beagle",
    "bloodhound",
    "border_collie",
    "border_terrier",
    "borzoi",
    "boston_terrier",
    "boxer",
    "bull_terrier",
    "bullmastiff",
    "chow_chow",
    "cocker_spaniel",
    "dalmatian",
    "daschund",
    "doberman",
    "fox_terrier",
    "french_bulldog",
    "german_pinscher",
    "german_shepherd",
    "german_spaniel",
    "golden_retriever",
    "great_dane",
    "greyhound",
    "husky",
    "jack_russell_terrier",
    "king_charles_spaniel",
    "labrador",
    "lakeland_terrier",
    "newfoundland",
    "pitbull",
    "pomeranian",
    "poodle",
    "pug",
    "rottweiler",
    "samoyed",
    "scottish_terrier",
    "shiba_inu",
    "shih_tzu",
    "St._Bernard",
    "tibetan_mastiff",
    "west_highland_white_terrier",
    "yorkshire_terrier"
  ];
  showDetails = dog => {
    this.props.showDetails(dog);
  };
  render() {
    return (
      <main>
        <p>
          Data is fetched from wikipedia. Please allow a few seconds to load.
        </p>
        {this.listOfDogs.map((dog, i) => {
          return <Dog showDetails={this.showDetails} dog={dog} key={i} />;
        })}
      </main>
    );
  }
}

export default Main;
