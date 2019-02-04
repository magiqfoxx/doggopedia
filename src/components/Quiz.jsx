import React, { Component } from "react";
import "./Quiz.css";

const listOfDogs = {
  42: "akita",
  41: "basset_hound",
  27: "beagle",
  21: "bloodhound",
  8: "border_collie",
  20: "border_terrier",
  40: "borzoi",
  33: "boston_terrier",
  39: "boxer",
  9: "bull_terrier",
  30: "bullmastiff",
  32: "chow_chow",
  13: "cocker_spaniel",
  31: "dalmatian",
  23: "daschund",
  11: "doberman",
  29: "fox_terrier",
  5: "french_bulldog",
  12: "german_pinscher",
  17: "german_shepherd",
  28: "german_spaniel",
  26: "golden_retriever",
  19: "great_dane",
  4: "greyhound",
  22: "husky",
  18: "jack_russell_terrier",
  6: "king_charles_spaniel",
  10: "labrador",
  7: "lakeland_terrier",
  34: "newfoundland",
  25: "pitbull",
  15: "pomeranian",
  35: "poodle",
  43: "pug",
  38: "rottweiler",
  37: "samoyed",
  14: "scottish_terrier",
  36: "shiba_inu",
  3: "shih_tzu",
  2: "St._Bernard",
  1: "tibetan_mastiff",
  16: "west_highland_white_terrier",
  24: "yorkshire_terrier"
};

class Quiz extends Component {
  state = { breed: 0, points: 0 };
  //randomly choose a a picture from list. remove pic from list
  //randomly choose 4 different breed names.
  //if breed of pic === breed => points
  breeds = [];
  pictures = [];

  componentDidMount = () => {
    this.breeds = Object.values(listOfDogs); //keep as non-mutated copy
    this.pictures = Object.keys(listOfDogs); //mutated during the game to avoid repeats
  };

  newPhoto = () => {
    let returnArr = [];
    let breeds = this.breeds.slice(); //mutated inside method only

    function getRandom(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    let index = getRandom(this.pictures.length);
    let picture = this.pictures[index]; //the image name
    this.pictures.splice(index, 1);

    let answer1 = listOfDogs[picture];
    breeds.splice(breeds.indexOf(answer1), 1); //removing the correct answer to avoid duplicates

    let index2 = getRandom(breeds.length);
    returnArr.push(breeds[index2]);
    breeds.splice(index2, 1);
    let index3 = getRandom(breeds.length);
    returnArr.push(breeds[index3]);
    breeds.splice(index3, 1);
    let index4 = getRandom(breeds.length);
    returnArr.push(breeds[index4]);
    breeds.splice(index4, 1);

    let correctI = getRandom(4); //random position for correct guess

    returnArr.splice(correctI, 0, answer1); //insert the correct answer at position correct

    returnArr.push(picture);

    return returnArr;
  };

  newRound = () => {
    let turn = this.newPhoto();

    this.setState({
      a1: turn[0],
      a2: turn[1],
      a3: turn[2],
      a4: turn[3],
      picture: turn[4],
      breed: listOfDogs[turn[4]]
    });
  };
  showMessage = message => {
    let el = document.querySelector(".quiz--message");
    el.style.content = "message";
    el.style.display = "block";
    setTimeout(() => {
      el.style.display = "none";
    }, 2000);
  };
  answerChosen = answer => {
    if (this.pictures.length < 1) {
      this.showMessage("you won the game!");
    }
    if (answer === this.state.breed) {
      let points = this.state.points + 1;
      this.setState({ points });
      this.showMessage("correct");
    } else {
      this.showMessage("wrong");
    }
    this.newRound();
  };

  renderContent = () => {
    if (!this.state.breed) {
      return (
        <button className="quiz--button" onClick={this.newRound}>
          start
        </button>
      );
    } else {
      return [
        <span className="quiz--points" key="0">
          Points {this.state.points}
        </span>,
        <section class="section__quiz">
          <div className="quiz" key="5">
            <div className="quiz--message" />
            <div className="quiz--image">
              <img src={`../img/mystery/${this.state.picture}.jpg`} alt="dog" />
            </div>

            <div className="quiz--options">
              <ul>
                <li onClick={() => this.answerChosen(this.state.a1)} key="1">
                  {this.state.a1.replace(/[_-]/g, " ")}
                </li>
                <li onClick={() => this.answerChosen(this.state.a2)} key="2">
                  {this.state.a2.replace(/[_-]/g, " ")}
                </li>
                <li onClick={() => this.answerChosen(this.state.a3)} key="3">
                  {this.state.a3.replace(/[_-]/g, " ")}
                </li>
                <li onClick={() => this.answerChosen(this.state.a4)}>
                  {this.state.a4.replace(/[_-]/g, " ")}
                </li>
              </ul>
            </div>
          </div>
        </section>
      ];
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="header--logo">
          <img className="header--logo--image" src="./img/paw.png" alt="paw" />
          <h1 className="header--logo--text">doggopedia</h1>
        </div>
        <div className="quiz--title">
          <h1>Can you guess the breed?</h1>
        </div>

        {this.renderContent()}

        <footer>Copyright by Kat</footer>
      </React.Fragment>
    );
  }
}

export default Quiz;
